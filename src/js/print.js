// Lets a single resource-template card (drillcard, breakdown, sourcecard,
// practicelog, principle) be printed or saved as a PNG on its own, without
// the rest of the page. Called by the buttons those shortcodes render when
// passed `print = true`. See SHORTCODES.md.

// Printing a live element with `visibility: hidden` on everything else
// leaves the hidden elements in the document flow, so the page keeps its
// full height and prints a stack of blank pages. Instead, clone just the
// card into a dedicated root that's the only visible thing on the page.
function scPrint(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const clone = el.cloneNode(true);
  clone.querySelectorAll(".sc-actions").forEach((n) => n.remove());

  const root = document.createElement("div");
  root.id = "sc-print-root";
  root.appendChild(clone);
  document.body.appendChild(root);
  document.body.classList.add("sc-printing");

  // iOS Safari fires `afterprint` immediately after window.print() returns
  // — well before the system print sheet has actually rendered the page —
  // so cleaning up on that event alone reverts the DOM before iOS captures
  // it, and the sheet ends up showing the whole page instead of just the
  // card. Regaining window focus (closing the sheet) is the reliable
  // signal there; `afterprint` still covers desktop, and the timeout is a
  // last-resort safety net.
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    document.body.classList.remove("sc-printing");
    root.remove();
    window.removeEventListener("afterprint", cleanup);
    window.removeEventListener("focus", cleanup);
    clearTimeout(safety);
  };
  window.addEventListener("afterprint", cleanup);
  window.addEventListener("focus", cleanup);
  const safety = setTimeout(cleanup, 60000);

  window.print();
}

let scHtml2CanvasPromise = null;
function scLoadHtml2Canvas() {
  if (window.html2canvas) return Promise.resolve();
  if (!scHtml2CanvasPromise) {
    scHtml2CanvasPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
      script.onload = resolve;
      script.onerror = () => {
        scHtml2CanvasPromise = null;
        reject(new Error("Couldn't load the image exporter."));
      };
      document.head.appendChild(script);
    });
  }
  return scHtml2CanvasPromise;
}

// Warm the library on page load, off the click path. navigator.share()
// (used below for the mobile PNG save) only works within a short window
// after the user's tap — if we waited to fetch html2canvas until the
// button was clicked, that network request alone could burn through the
// window before the share call, especially on a slow connection.
if (document.querySelector(".sc-print-btn")) {
  scLoadHtml2Canvas().catch(() => {});
}

// Saves the card as a PNG sized for a phone, not whatever width the live
// page happens to be. Screenshotting the on-page element directly captured
// it at the article's ~700px+ width, which made a wide, short banner —
// awkward to read on a phone. Instead, clone the card into an off-screen
// wrapper pinned to a fixed, phone-friendly width, and render that. Loads
// the html2canvas library from a CDN on first use only.
function scSavePng(id, name) {
  const el = document.getElementById(id);
  if (!el) return;

  const clone = el.cloneNode(true);
  clone.querySelectorAll(".sc-actions").forEach((n) => n.remove());
  clone.style.margin = "0";

  const wrap = document.createElement("div");
  wrap.style.cssText = "position:fixed; left:-9999px; top:0; width:420px;";
  wrap.appendChild(clone);
  document.body.appendChild(wrap);

  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();

  fontsReady
    .then(scLoadHtml2Canvas)
    .then(() =>
      window.html2canvas(clone, {
        // Transparent outside the card so its rounded corners stay rounded
        // in the saved image instead of getting squared off.
        backgroundColor: null,
        scale: 3,
        useCORS: true,
        // html2canvas estimates word widths itself rather than using the
        // browser's real layout, and that estimate goes wrong more often
        // at narrower reflowed widths — the symptom is words running
        // together with no space and punctuation overlapping the letter
        // before it. Rendering letter-by-letter avoids that guesswork.
        letterRendering: true,
      })
    )
    .then(
      (canvas) =>
        new Promise((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("toBlob failed"));
          }, "image/png");
        })
    )
    .then((blob) => {
      const filename = `${name || "resource"}.png`;

      // iOS Safari has never supported the `download` attribute — a
      // programmatic <a download> there just navigates to the image and
      // shows an Open/Download prompt that doesn't actually save it. The
      // share sheet's "Save Image" is the reliable way to get the PNG onto
      // the device, so prefer it whenever the platform can share a file.
      const file = new File([blob], filename, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        return navigator.share({ files: [file] }).catch((err) => {
          if (err && err.name === "AbortError") return;
          throw err;
        });
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = filename;
      link.href = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    })
    .catch(() => {
      alert("Couldn't save the image — check your connection and try again.");
    })
    .finally(() => {
      wrap.remove();
    });
}
