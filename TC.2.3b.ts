class FatorialCalculador1 {
    calcularFatorial1(n: number): number {
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

const fatorialCalculador1 = new FatorialCalculador1();
const resultado1 = fatorialCalculador1.calcularFatorial1(5);
console.log("Resultado do fatorial:", resultado1);
