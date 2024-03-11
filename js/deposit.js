$(document).ready(function () {
  $("#depositForm").on("submit", function (event) {
    event.preventDefault();

    let depositAmount = $("#depositAmount").val();

    // Remove the unused function declaration
    // function depositIn() {
    if (!isNaN(depositAmount)) {
      let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
      let newBalance = actualBalance + depositAmount;
      localStorage.setItem("balance", newBalance);
      console.log(newBalance, actualBalance, depositAmount);
      if (newBalance > 0) {
        $(".error-message").text("Depósito realizado exitosamente");
        setTimeout(function () {
          window.location.href = "menu.html";
        }, 2000);
      } else {
        $(".error-message").text("Saldo insuficiente");
      }
    }
  });
});
