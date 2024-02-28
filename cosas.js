$(document).ready(function () {
  $("#depositForm").on("submit", function (event) {
    event.preventDefault(); // Evitar que se recargue la página
  });

  $("#depositDepositBtn").on("click", function () {
    depositAmount = parseFloat($("#depositAmount").val());
    depositIn(depositAmount);
  });

  function depositIn(depositAmount) {
    if (!isNaN(depositAmount)) {
      let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
      let newBalance = actualBalance + depositAmount;
      localStorage.setItem("balance", newBalance.toFixed(2));
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
