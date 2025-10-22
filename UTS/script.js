// ==============================
// ==== BAGIAN MOBILE LEGENDS ====
// ==============================

// Pilih nominal top up MLBB
function selectTopup(card) {
  document.querySelectorAll(".topup-card").forEach((el) => el.classList.remove("active"));
  card.classList.add("active");

  const harga = card.getAttribute("data-harga");
  document.getElementById("topupBtn").textContent = `Bayar Rp ${harga}`;
}

// Pilih metode pembayaran MLBB
function selectPayment(card) {
  document.querySelectorAll(".payment-card").forEach((el) => el.classList.remove("active"));
  card.classList.add("active");
}

// Popup open MLBB
function openReceipt() {
  document.getElementById("popup-receipt").style.display = "flex";

  const userId = document.getElementById("userId");
  const zoneId = document.getElementById("zoneId");

  document.getElementById("receipt-userId").textContent = userId.value;
  document.getElementById("receipt-zoneId").textContent = zoneId.value;
  document.getElementById("receipt-topup").textContent = document.querySelector(".topup-card.active h4").textContent;
  document.getElementById("receipt-harga").textContent = document.getElementById("topupBtn").textContent.replace("Bayar Rp ", "");
}

// Popup close MLBB
function closeReceipt() {
  document.getElementById("popup-receipt").style.display = "none";
}

// Aktifkan tombol beli MLBB
document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.getElementById("topupBtn");
  const userId = document.getElementById("userId");
  const zoneId = document.getElementById("zoneId");

  if (buyButton) buyButton.disabled = true;

  function toggleBuyButton() {
    if (userId.value.trim() !== "" && zoneId.value.trim() !== "") {
      buyButton.disabled = false;
    } else {
      buyButton.disabled = true;
    }
  }

  if (userId && zoneId) {
    userId.addEventListener("input", toggleBuyButton);
    zoneId.addEventListener("input", toggleBuyButton);
  }
});


// ==============================
// ======= BAGIAN FREE FIRE =====
// ==============================

// Pilih nominal top up FF
function selectTopupff(card) {
  document.querySelectorAll(".topup-card").forEach((el) => el.classList.remove("active"));
  card.classList.add("active");

  const harga = card.getAttribute("data-harga-ff");
  document.getElementById("topupBtn-ff").textContent = `Bayar Rp ${harga}`;
}

// Pilih metode pembayaran FF
function selectPaymentff(card) {
  document.querySelectorAll(".payment-card").forEach((el) => el.classList.remove("active"));
  card.classList.add("active");
}

// Popup open FF
function openReceiptff() {
  document.getElementById("popup-receipt-ff").style.display = "flex";

  const userIdff = document.getElementById("userIdff");

  document.getElementById("receipt-userId-ff").textContent = userIdff.value;
  document.getElementById("receipt-topup-ff").textContent = document.querySelector(".topup-card.active h4").textContent;
  document.getElementById("receipt-harga-ff").textContent = document.getElementById("topupBtn-ff").textContent.replace("Bayar Rp ", "");
}

// Popup close FF
function closeReceiptff() {
  document.getElementById("popup-receipt-ff").style.display = "none";
}

// Aktifkan tombol beli FF
document.addEventListener("DOMContentLoaded", function () {
  const buyButtonff = document.getElementById("topupBtn-ff");
  const userIdff = document.getElementById("userIdff");

  if (buyButtonff) buyButtonff.disabled = true;

  function toggleBuyButtonff() {
    if (userIdff.value.trim() !== "") {
      buyButtonff.disabled = false;
    } else {
      buyButtonff.disabled = true;
    }
  }

  if (userIdff) {
    userIdff.addEventListener("input", toggleBuyButtonff);
  }
});
