const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

const calcularMediaMensal = (dados) => {
    const valoresFaturamento = dados.map(dia => dia.valor);
    const valoresValidos = valoresFaturamento.filter(valor => valor > 0);
    const somaValores = valoresValidos.reduce((soma, valor) => soma + valor, 0); 
    const mediaMensal = somaValores / valoresValidos.length;
    return mediaMensal;
};


const obterMenorValor = (dados) => {
    const valoresFaturamento = dados.map(dia => dia.valor);
    const menorValor = Math.min(...valoresFaturamento);
    return menorValor;
};

const obterMaiorValor = (dados) => {
    const valoresFaturamento = dados.map(dia => dia.valor);
    const maiorValor = Math.max(...valoresFaturamento);
    return maiorValor;
};

const obterDiasAcimaMedia = (dados, mediaMensal) => {
    const diasAcimaMedia = dados.filter(dia => dia.valor > mediaMensal);
    return diasAcimaMedia.length;
};

// Chamar as funções e exibir os resultados
const mediaMensal = calcularMediaMensal(dados);
const menorValor = obterMenorValor(dados);
const maiorValor = obterMaiorValor(dados);
const diasAcimaMedia = obterDiasAcimaMedia(dados, mediaMensal);

console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média mensal: ${diasAcimaMedia}`);
