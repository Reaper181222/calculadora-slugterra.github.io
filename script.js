let datosBabosas = {};

async function cargarOpciones() {
  try {
    const res = await fetch("babosas.json");
    datosBabosas = await res.json();

    const selects = [document.getElementById("slug1"), document.getElementById("slug2")];

    const especies = Object.keys(datosBabosas);
    selects.forEach(select => {
      especies.forEach(nombre => {
        const option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        select.appendChild(option);
      });
    });

  } catch (error) {
    console.error("Error al cargar el archivo de babosas:", error);
  }
}

function seleccionarBabosa(num) {
  const select = document.getElementById(`slug${num}`);
  const especie = select.value;
  const stats = datosBabosas[especie];

  alert(
    `Babosa ${num} (${especie}):\n` +
    `Ataque: ${stats.ataque}\n` +
    `Defensa: ${stats.defensa}\n` +
    `Velocidad: ${stats.velocidad}\n` +
    `Energía elemental: ${stats.energia_elemental}\n` +
    `Precisión: ${stats.precision}\n` +
    `Control: ${stats.control}\n` +
    `Elemento: ${stats.elemento}`
  );
}

window.onload = cargarOpciones;
