function calculateEMI() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const R = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  const N = parseFloat(document.getElementById("loanTenure").value) * 12;

  if (!P || !R || !N) {
    alert("Please enter all values");
    return;
  }

  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const total = emi * N;
  const interest = total - P;

  document.getElementById("emi").innerText = "₹ " + emi.toFixed(2);
  document.getElementById("interest").innerText = "₹ " + interest.toFixed(2);
  document.getElementById("total").innerText = "₹ " + total.toFixed(2);
}
