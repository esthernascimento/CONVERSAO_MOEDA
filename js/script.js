function converter(moeda) {

    const valorReais = parseFloat(document.getElementById('valorReais').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valorReais) || valorReais <= 0){
        resultadoDiv.innerText = "Por favor, digite valores válidos e REAIS.";
        return;
    }

    const taxas = {
        'USD': 0.19,
        'EUR': 0.16
    };

    const valorConvertido = (valorReais * taxas[moeda]).toFixed(2);
    resultadoDiv.innerText = `Valor em ${moeda === 'USD' ? 'Dólar' : 'Euro'}: ${moeda} ${valorConvertido}`;

}