$(function ($) {
  $("#sendForm").on("submit", function (event) {
    event.preventDefault();
  });

  $("#sendSendBtn").on("click", function () {
    let sendAmount = parseFloat($("#sendAmount").val());
    sendOut(sendAmount);
  });

  function sendOut(sendAmount) {
    if (!isNaN(sendAmount)) {
      let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
      let newBalance = actualBalance - sendAmount;
      localStorage.setItem("balance", newBalance);
      Swal.fire({
        icon: "success",
        title: "Transferencia realizada realizado exitosamente",
        timer: 1500,
        showConfirmButton: false,
      });
      window.location.href = "/view/menu/menu.html";
    } else {
      alert("Ingrese monto válido");
    }
  }
});
