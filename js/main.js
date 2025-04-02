
document.addEventListener("DOMContentLoaded", function () {
  const faqToggle = document.getElementById("faqBar");
  const faqSection = document.getElementById("faqSection");

  function resetFAQInteractions() {
    const faqItems = faqSection.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const symbol = item.querySelector(".faq-symbol");

      if (!question || !answer || !symbol) return;

      question.onclick = () => {
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
        symbol.textContent = isOpen ? "+" : "−";
      };
    });
  }

  if (faqToggle && faqSection) {
    faqToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const isVisible = faqSection.style.display === "block";

      if (isVisible) {
        faqSection.style.display = "none";
        faqSection.style.height = "0";
        faqSection.style.padding = "0";
        faqSection.style.margin = "0";
        faqSection.style.overflow = "hidden";

        const allAnswers = faqSection.querySelectorAll(".faq-answer");
        const allSymbols = faqSection.querySelectorAll(".faq-symbol");

        allAnswers.forEach(a => a.style.display = "none");
        allSymbols.forEach(s => s.textContent = "+");
      } else {
        faqSection.style.display = "block";
        faqSection.style.height = "auto";
        faqSection.style.padding = "60px 20px";
        faqSection.style.marginTop = "20px";
        faqSection.style.overflow = "visible";
        faqSection.scrollIntoView({ behavior: "smooth" });

        resetFAQInteractions(); // rebind listeners
      }
    });

    resetFAQInteractions(); // initial load
  }
});
