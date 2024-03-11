$(document).ready(function () {
  let balance = 0;
  mostrarBalance();

  function mostrarBalance() {
    let balanceActual = parseFloat(localStorage.getItem("balance")) || 0;
    balance = balanceActual;
    $("#balance").text(balanceActual);
  }

  $("#deposito").click(function () {
    window.location.href = "deposit.html";
  });

  $("#transferencia").click(function () {
    window.location.href = "sendmoney.html";
  });

  $("#transacciones").click(function () {
    window.location.href = "transactions.html";
  });
});
