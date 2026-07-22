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

  const cleanup = () => {
    document.body.classList.remove("sc-printing");
    root.remove();
    window.removeEventListener("afterprint", cleanup);
  };
  window.addEventListener("afterprint", cleanup);
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
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name || "resource"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    })
    .catch(() => {
      alert("Couldn't save the image — check your connection and try again.");
    })
    .finally(() => {
      wrap.remove();
    });
}
