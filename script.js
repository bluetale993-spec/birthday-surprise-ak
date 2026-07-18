alert("JavaScript is working!");

const giftBtn = document.getElementById("giftBtn");

if (giftBtn) {
  giftBtn.addEventListener("click", () => {
    alert("✨ Welcome! Your magical birthday surprise is just getting started... 💖");
  });
}
