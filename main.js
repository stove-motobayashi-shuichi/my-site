const buttons = document.querySelectorAll(".mobile-nav button");
const panels = document.querySelectorAll(".panel");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // ボタン状態
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // パネル切替
    panels.forEach((p) => p.classList.remove("active"));
    document.querySelector("." + btn.dataset.target).classList.add("active");
  });
});
