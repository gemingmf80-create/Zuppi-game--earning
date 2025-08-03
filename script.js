let score = 0;
let balance = 0;

const scoreEl = document.getElementById("score");
const balanceEl = document.getElementById("balance");
const tapButton = document.getElementById("tapButton");
const adButton = document.getElementById("adButton");

tapButton.addEventListener("click", () => {
  score += 1;
  scoreEl.innerText = `Score: ${score}`;
});

adButton.addEventListener("click", () => {
  alert("Ad is playing... Please wait 5 seconds.");
  setTimeout(() => {
    balance += 0.5;
    balanceEl.innerText = `Balance: ₹${balance.toFixed(2)}`;
    alert("Thanks for watching the ad! ₹0.50 added to your balance.");
  }, 5000);
});
