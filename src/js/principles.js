// Rotates the homepage's featured-principle card through the last few
// principles logged across the site (see src/_data/featuredPrinciples.js).
// Advances on a timer and lets the reader jump to one via the dots; either
// way the timer resets so it doesn't fight the reader's own click.

(function () {
  const root = document.getElementById("principle-rotator");
  if (!root) return;

  let items;
  try {
    items = JSON.parse(root.dataset.principles);
  } catch {
    return;
  }
  if (!items || items.length < 2) return;

  const statementEl = document.getElementById("principle-rotator-statement");
  const sourceEl = document.getElementById("principle-rotator-source");
  const dots = Array.from(document.querySelectorAll(".principle-rotator-dot"));
  let index = 0;
  let timer;

  function show(i) {
    index = i;
    root.classList.add("is-fading");
    window.setTimeout(() => {
      statementEl.textContent = items[index].statement;
      sourceEl.textContent = items[index].title;
      sourceEl.href = items[index].url;
      dots.forEach((dot, n) => dot.classList.toggle("active", n === index));
      root.classList.remove("is-fading");
    }, 200);
  }

  function next() {
    show((index + 1) % items.length);
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(next, 7000);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      show(Number(dot.dataset.index));
      restartTimer();
    });
  });

  restartTimer();
})();
