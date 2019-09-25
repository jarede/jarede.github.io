const UM_DIA = 1000 * 60 * 60 * 24;
const HOJE = new Date();
const DISC = new Date(HOJE.getFullYear(), 9, 26);
const FALTA = `falta só ${Math.ceil((DISC.getTime() - HOJE.getTime()) / (UM_DIA)) - 1} dias para o discurso do Jerri`;
let e = document.getElementById('tempo');
e.innerText = FALTA;