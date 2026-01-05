function calculateEMI() {
  const principal = parseFloat(document.getElementById("loanAmount").value);
  const annualRate = parseFloat(document.getElementById("interestRate").value);
  const years = parseFloat(document.getElementById("loanTenure").value);

  if (!principal || !annualRate || !years) {
    alert("Please enter all values");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  document.getElementById("emi").innerText = "₹ " + emi.toFixed(2);
  document.getElementById("totalInterest").innerText = "₹ " + totalInterest.toFixed(2);
  document.getElementById("totalPayment").innerText = "₹ " + totalPayment.toFixed(2);
}
