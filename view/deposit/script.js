jQuery(function ($) {
  $("#depositDepositBtn").on("click", function () {
    depositIn();
  });

  function depositIn() {
    let depositAmount = parseFloat($("#depositAmount").val());
    if (!isNaN(depositAmount)) {
      let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
      let newBalance = actualBalance + depositAmount;
      localStorage.setItem("balance", newBalance.toFixed(2));
      Swal.fire({
        icon: "success",
        title: "Deposito realizado exitosamente",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/view/menu/menu.html";
      });
    } else {
      alert("Ingrese monto válido");
    }
  }
});