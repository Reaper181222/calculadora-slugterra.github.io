function seleccionarBabosa(num) {
  const select = document.getElementById(`slug${num}`);
  const malvada = document.getElementById(`malvada${num}`).checked;
  const especie = select.value;
  const original = datosBabosas[especie];

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

  // Mostrar en pantalla
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

