jQuery(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    if (email === "admin@admin" && password === "admin") {
      window.location.href = "/view/menu/menu.html";
    } else {
      alert("Credenciales Incorrectas");
    }
  });
});
