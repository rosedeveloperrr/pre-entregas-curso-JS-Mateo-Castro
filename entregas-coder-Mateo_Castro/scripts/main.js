let carrito = [];

function agregarAlCarrito() {
  let elementoDeEntrada;

  do {
    elementoDeEntrada = prompt(
      "Ingrese el nombre del producto a agregar al carrito (o 'salir' para terminar):"
    );
    if (elementoDeEntrada !== "salir") {
      carrito.push(elementoDeEntrada);
      console.log(`Producto "${elementoDeEntrada}" agregado al carrito.`);
    }
  } while (elementoDeEntrada && elementoDeEntrada.toLowerCase() !== "salir");

  if (carrito.length === 0) {
    alert("No se han agregado productos al carrito.");
  } else {
    console.log("Carrito de compras:", carrito);
    alert(
      "Carrito de compras actualizado. Puedes ver la consola para más detalles."
    );
  }
}

agregarAlCarrito();
