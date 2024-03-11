$(document).ready(function () {
  // Selector del formulario de registro
  const registroForm = $(".form-registro");

  // Evento submit del formulario
  registroForm.submit(function (event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombres = $("#nombres").val();
    const apellidos = $("#apellidos").val();
    const correo = $("#correo").val();
    const contraseña = $("#contraseña").val();

    // Validar campos (puedes agregar más validaciones según tus necesidades)
    if (!nombres || !apellidos || !correo || !contraseña) {
      $(".error-message").html(`
          <div class="alert alert-danger" role="alert">
            Por favor, complete todos los campos.
          </div>
        `);
      return;
    }

    // Realizar la lógica de registro (aquí debes hacer la lógica de registro real)
    // Puedes enviar los datos al servidor usando AJAX o realizar otras acciones necesarias

    // Mostrar mensaje de éxito y redireccionar
    $(".error-message").html(`
        <div class="alert alert-success" role="alert">
          Registro exitoso. Redirigiendo...
        </div>
      `);

    // Redireccionar a la página de inicio de sesión después de 2 segundos (2000 milisegundos)
    setTimeout(function () {
      window.location.href = "./menu.html";
    }, 2000);
  });
});
