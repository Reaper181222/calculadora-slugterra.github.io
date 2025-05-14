// Lista de especies disponibles
const especies = ["Especie A", "Especie B", "Especie C", "Especie D"];

// Llenar ambos selectores con las mismas opciones
function cargarOpciones() {
  const selects = [document.getElementById("slug1"), document.getElementById("slug2")];
  selects.forEach(select => {
    especies.forEach((especie, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = especie;
      select.appendChild(option);
    });
  });
}

// Mostrar selección
function seleccionarBabosa(num) {
  const selector = document.getElementById(`slug${num}`);
  const especieSeleccionada = especies[selector.value];
  alert(`Seleccionaste ${especieSeleccionada} para Babosa ${num}`);
}

window.onload = cargarOpciones;
