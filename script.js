let datosBabosas = {};

async function cargarOpciones() {
  try {
    const nombres = Object.keys(datosBabosas);

    [1, 2].forEach(num => {
      const select = document.getElementById(`slug${num}`);
      const checkbox = document.getElementById(`malvada${num}`);

      // llena select
      nombres.forEach(nombre => {
        const option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        select.appendChild(option);
      });

      select.value = nombres[0];

      // listeners para actualizar los stats al toque
      select.addEventListener("change", () => mostrarStats(num));
      checkbox.addEventListener("change", () => mostrarStats(num));

      // Mostrar stats por defecto (primer opción)
      mostrarStats(num);
    });

  } catch (error) {
    console.error("Error al cargar las babosas:", error);
  }
}

function mostrarStats(num) {
  const select = document.getElementById(`slug${num}`);
  const malvada = document.getElementById(`malvada${num}`).checked;
  const especie = select.value;
  const original = datosBabosas[especie];

  if (!original) return;

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

  const statsDiv = document.getElementById(`stats${num}`);
  statsDiv.innerText =
    `Ataque: ${stats["Ataque"]}\n` +
    `Defensa: ${stats["Defensa"]}\n` +
    `Velocidad: ${stats["Velocidad"]}\n` +
    `Energía Elemental: ${stats["Energía Elemental"]}\n` +
    `Precisión: ${stats["Precisión"]}\n` +
    `Control: ${stats["Control"]}\n` +
    `Elemento: ${stats["Elemento"]}`;
}

function seleccionarBabosa(num) {
  alert(`Seleccionaste una babosa para el slot ${num}`);
}

window.onload = cargarOpciones;
