function cargarOpciones() {
  const nombres = Object.keys(datosBabosas); // datosBabosas viene de babosas.js

  [1, 2].forEach(num => {
    const select = document.getElementById(`slug${num}`);
    const checkbox = document.getElementById(`malvada${num}`);

    // llena select
    nombres.forEach((nombre, index) => {
      const option = document.createElement("option");
      option.value = nombre;
      option.textContent = nombre;
      if (index === 0) option.selected = true;
      select.appendChild(option);
    });

    // listeners para actualizar los stats al toque
    select.addEventListener("change", () => mostrarStats(num));
    checkbox.addEventListener("change", () => mostrarStats(num));

    // Mostrar stats por defecto (primer opción)
    mostrarStats(num);
  });
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
        stats[key] -= 50;
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

  const img = document.getElementById(`foto${num}`);
    if (malvada && original["Foto Malvada"]) {
      img.src = original["Foto Malvada"];
    } else {
      img.src = original["Foto Normal"];
    }
}

function seleccionarBabosa(num) {
  alert(`Seleccionaste una babosa para el slot ${num}`);
}

window.onload = cargarOpciones;