const { event } = require("jquery");

$(function ($) {
  $("#depositForn").on("submit", function (event) {
    event.prenventDefault();
  });

  $("#depositDepositBtn").on("click", function () {
    depositAmount = parseFloat($("#depositAmount").val());
    depositIn();
  });

  function depositIn() {
    if (!isNaN(depositAmount)) {
      let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
      let newBalance = actualBalance + depositAmount;
      localStorage.setItem("balance", newBalance);
      Swal.fire({
        icon: "success",
        title: "Deposito realizado exitosamente",
        timer: 1500,
        showConfirmButton: false,
      });
      window.location.href = "http://127.0.0.1:5500/view/menu/menu.html";
    } else {
      alert("Ingrese monto válido");
    }
  }
});
