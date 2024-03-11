$(document).ready(function () {
  // Simulación de datos para el dropdown
  const contactData = [
    {
      name: "Homero Simpson",
      rut: "123456789-0",
      alias: "BestDad",
      bank: "SpringfieldBank",
    },
    {
      name: "Moe Sizlak",
      rut: "134525321-1",
      alias: "Moe",
      bank: "SpringfieldBank",
    },
    {
      name: "Lisa Simpson",
      rut: "987654321-0",
      alias: "SmartGirl",
      bank: "SpringfieldBank",
    },
    {
      name: "Ned Flanders",
      rut: "567890123-9",
      alias: "Neighborino",
      bank: "SpringfieldBank",
    },
    {
      name: "Barney Gumble",
      rut: "112233445-5",
      alias: "DrunkDude",
      bank: "SpringfieldBank",
    },
    {
      name: "Monty Burns",
      rut: "999888777-6",
      alias: "MrBurns",
      bank: "SpringfieldBank",
    },
    {
      name: "Apu Nahasapeemapetilon",
      rut: "444555666-2",
      alias: "KwikEMart",
      bank: "SpringfieldBank",
    },
    {
      name: "Marge Simpson",
      rut: "654321987-1",
      alias: "BlueHair",
      bank: "SpringfieldBank",
    },
    {
      name: "Krusty the Clown",
      rut: "777888999-4",
      alias: "FunnyMan",
      bank: "SpringfieldBank",
    },
    {
      name: "Milhouse Van Houten",
      rut: "333222111-8",
      alias: "ThrivyMilly",
      bank: "SpringfieldBank",
    },
  ];

  function fillDropdown(query) {
    $("#dropdownMenuButton").empty();
    contactData.forEach((item) => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        $("#dropdownMenuButton").append(
          `<li class="dropdown-item" data-name="${item.name}">${item.name}</li>`
        );
      }
    });
  }

  $("#sendForm").on("submit", function (event) {
    event.preventDefault();
    let sendAmount = parseFloat($("#sendAmount").val());
    sendOut(sendAmount);
  });

  $("#searchContact").on("input", function () {
    const query = $(this).val();
    fillDropdown(query);
  });

  // Handling click on dropdown items
  $("#dropdownMenuButton").on("click", ".dropdown-item", function () {
    const selectedName = $(this).data("name");
    $("#searchContact").val(selectedName);
    $("#dropdownMenuButton").empty(); // Clear dropdown after selection
  });

  function sendOut(sendAmount) {
    if (isNaN(sendAmount)) {
      $(".error-message").text("Ingrese un monto válido");
      return;
    }

    let actualBalance = parseFloat(localStorage.getItem("balance")) || 0;
    if (actualBalance < sendAmount) {
      $(".error-message").text("Saldo insuficiente");
      return;
    }

    let newBalance = actualBalance - sendAmount;
    localStorage.setItem("balance", newBalance);

    $(".error-message").text("Transferencia realizada exitosamente");
    $("#searchContact").val("");
    setTimeout(function () {
      window.location.href = "menu.html";
    }, 1500);
  }
});
