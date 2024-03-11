$(document).ready(function () {
  const transactions = [
    {
      fecha: "2024-01-01",
      tipo: "deposito",
      monto: "1000",
    },
    {
      fecha: "2024-01-02",
      tipo: "retiro",
      monto: "10500",
    },
    {
      fecha: "2024-01-03",
      tipo: "deposito",
      monto: "1000000",
    },
    {
      fecha: "2024-01-04",
      tipo: "retiro",
      monto: "2000",
    },
    {
      fecha: "2024-01-05",
      tipo: "deposito",
      monto: "100",
    },
    {
      fecha: "2024-01-06",
      tipo: "retiro",
      monto: "3000",
    },
    {
      fecha: "2024-01-07",
      tipo: "deposito",
      monto: "2000",
    },
    {
      fecha: "2024-01-08",
      tipo: "retiro",
      monto: "1000",
    },
  ];

  mostrarTransacciones(transactions);

  $("#form-filter").submit(function (event) {
    event.preventDefault();

    const tipo = $("#tipo").val();
    const fechaInicio = $("#fecha-inicio").val();
    const fechaFin = $("#fecha-fin").val();

    const transaccionesFiltradas = filtrarTransacciones(
      tipo,
      fechaInicio,
      fechaFin
    );
    mostrarTransacciones(transaccionesFiltradas);
  });

  function filtrarTransacciones(tipo, fechaInicio, fechaFin) {
    return transactions.filter((transaccion) => {
      if (tipo && transaccion.tipo !== tipo) {
        return false;
      }

      if (fechaInicio && transaccion.fecha < fechaInicio) {
        return false;
      }

      if (fechaFin && transaccion.fecha > fechaFin) {
        return false;
      }

      return true;
    });
  }

  function mostrarTransacciones(transacciones) {
    $("#transactions-table tbody").empty();

    transacciones.forEach((transaccion) => {
      $("#transactions-table tbody").append(`
      <tr>
      <td>${transaccion.fecha}</td>
      <td>${transaccion.tipo}</td>
      <td>${transaccion.monto}</td>
      </tr>
      `);
    });
  }
});
