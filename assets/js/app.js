/* ============================================================
   Calc 1 — interactive behaviors
   - Show/hide solution
   - Reveal steps one at a time
   - Sticky TOC active link tracking
   - Reading-progress bar
   ============================================================ */

(function () {
  /* ---------- Solution toggles ---------- */
  document.querySelectorAll(".solution-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.nextElementSibling;
      const open = target.classList.toggle("open");
      btn.classList.toggle("open", open);
      btn.querySelector(".label").textContent = open ? "Hide solution" : "Show step-by-step solution";

      if (open) {
        // Reveal only the first step
        const steps = target.querySelectorAll(".step");
        steps.forEach((s, i) => {
          s.style.display = i === 0 ? "flex" : "none";
        });
        // Show the "next step" button on the first step if there are more
        updateRevealButtons(target);
      }
    });
  });

  /* ---------- Step reveal logic ---------- */
  function updateRevealButtons(container) {
    const steps = Array.from(container.querySelectorAll(".step"));
    steps.forEach((step, i) => {
      const btn = step.querySelector(".step-reveal");
      if (!btn) return;
      const nextHidden = steps[i + 1] && steps[i + 1].style.display === "none";
      btn.style.display = nextHidden ? "inline-block" : "none";
    });
    // Show final answer once all steps are visible
    const allShown = steps.every((s) => s.style.display !== "none");
    const finalAnswer = container.querySelector(".final-answer");
    if (finalAnswer) finalAnswer.style.display = allShown ? "block" : "none";
  }

  document.querySelectorAll(".step-reveal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = btn.closest(".step");
      const next = step.nextElementSibling;
      if (next && next.classList.contains("step")) {
        next.style.display = "flex";
        const container = btn.closest(".solution-content");
        updateRevealButtons(container);
      }
    });
  });

  // Initialize: hide all steps and final answers until solution opened
  document.querySelectorAll(".solution-content").forEach((c) => {
    c.querySelectorAll(".step").forEach((s) => (s.style.display = "none"));
    const fa = c.querySelector(".final-answer");
    if (fa) fa.style.display = "none";
  });

  /* ---------- "Show all" convenience ---------- */
  document.querySelectorAll(".show-all").forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.closest(".solution-content");
      container.querySelectorAll(".step").forEach((s) => (s.style.display = "flex"));
      updateRevealButtons(container);
    });
  });

  /* ---------- TOC active link tracking ---------- */
  const tocLinks = document.querySelectorAll(".sidebar a[href^='#']");
  const sections = Array.from(tocLinks)
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  function onScroll() {
    const y = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) if (s.offsetTop <= y) current = s;
    tocLinks.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + (current && current.id))
    );

    // Progress bar
    const doc = document.documentElement;
    const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
    const bar = document.querySelector(".progress-bar");
    if (bar) bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
