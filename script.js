let datosBabosas = {};

async function cargarOpciones() {
  try {
    const res = await fetch("babosas.json");
    datosBabosas = await res.json();

    const selects = [document.getElementById("slug1"), document.getElementById("slug2")];

    const nombres = Object.keys(datosBabosas);
    selects.forEach(select => {
      nombres.forEach(nombre => {
        const option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        select.appendChild(option);
      });
    });
  } catch (error) {
    console.error("Error al cargar las babosas:", error);
  }
}

function seleccionarBabosa(num) {
  const select = document.getElementById(`slug${num}`);
  const malvada = document.getElementById(`malvada${num}`).checked;
  const especie = select.value;
  const original = datosBabosas[especie];

  // Clonamos el objeto para no modificar el original
  const stats = { ...original };

  if (malvada) {
    for (let key in stats) {
      if (key === "Elemento") continue;
      if (key === "Control") {
        stats[key] -= 40;
      } else {
        stats[key] += 20;
      }
    }
  }

  alert(
    `Babosa ${num} (${especie}${malvada ? " - Malvada" : ""}):\n` +
    `Ataque: ${stats["Ataque"]}\n` +
    `Defensa: ${stats["Defensa"]}\n` +
    `Velocidad: ${stats["Velocidad"]}\n` +
    `Energía Elemental: ${stats["Energía Elemental"]}\n` +
    `Precisión: ${stats["Precisión"]}\n` +
    `Control: ${stats["Control"]}\n` +
    `Elemento: ${stats["Elemento"]}`
  );
}

window.onload = cargarOpciones;

