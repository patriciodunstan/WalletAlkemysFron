$(document).ready(function () {
  let balance = 0;
  mostrarBalance();

  function mostrarBalance() {
    let balanceActual = parseFloat(localStorage.getItem("balance")) || 0;
    balance = balanceActual;
    $("#balance").text(balanceActual.toFixed(2));
  }
});
