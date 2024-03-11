jQuery(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    if (email === "admin@admin" && password === "admin") {
      window.location.href = "menu.html";
    } else {
      $(".error-message").html(`
      <div class="alert alert-danger" role="alert">
        Credenciales incorrectas. Por favor, inténtelo de nuevo.
      </div>
    `);
    }
  });
});
