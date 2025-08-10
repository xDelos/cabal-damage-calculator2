function calcularDano() {
  const atk = parseFloat(document.getElementById('atk').value);
  const amp = parseFloat(document.getElementById('amp').value);
  const crit = parseFloat(document.getElementById('crit').value);

  if (isNaN(atk) || isNaN(amp) || isNaN(crit)) {
    document.getElementById('resultado').innerText = "Preencha todos os campos corretamente.";
    return;
  }

  // Fórmula básica de dano (exemplo genérico)
  const danoBase = atk * (1 + amp / 100);
  const danoCritico = danoBase * (1 + crit / 100);

  document.getElementById('resultado').innerText =
    `Dano Base: ${danoBase.toFixed(2)}\nDano Crítico: ${danoCritico.toFixed(2)}`;
}