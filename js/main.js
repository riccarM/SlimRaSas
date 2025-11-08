const d = document,
  $form = d.querySelector("form"),
  modal = d.getElementById("miModal"),
  abrir = d.getElementById("abrirModal"),
  cerrar = d.getElementById("cerrarModal"),
  textarea = $form.querySelector("textarea"); // 👈 selecciona el textarea dentro del form

// Abrir modal
abrir.onclick = function () {
  modal.style.display = "block";
};

// Cerrar modal con el botón ❌
cerrar.onclick = function () {
  modal.style.display = "none";
  reiniciarTexto();
};

// Cerrar modal al hacer clic fuera
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    reiniciarTexto();
  }
};

// Función que reinicia el contenido del textarea
function reiniciarTexto() {
  textarea.value = "Envía un mensaje a SlimRaSas...";
}
