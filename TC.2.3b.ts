class FatorialCalculador {
    calcularFatorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let resultado = 1;
            for (let i = 2; i <= n; i++) {
                resultado *= i;
            }
            return resultado;
        }
    }
}

const fatorialCalculador = new FatorialCalculador();
const resultado = fatorialCalculador.calcularFatorial(5);
console.log("Resultado do fatorial:", resultado);
