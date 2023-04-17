const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const valorTotalMensal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const percentualSP = (faturamentoSP / valorTotalMensal) * 100;
const percentualRJ = (faturamentoRJ / valorTotalMensal) * 100;
const percentualMG = (faturamentoMG / valorTotalMensal) * 100;
const percentualES = (faturamentoES / valorTotalMensal) * 100;
const percentualOutros = (faturamentoOutros / valorTotalMensal) * 100;

console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);
