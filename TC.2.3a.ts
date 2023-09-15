class FatorialCalculador {
   listaResultados: number[] = [];

    calcularFatorialComArmazenamento(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            const fatorialNMenos1 = this.calcularFatorialComArmazenamento(n - 1);
            this.listaResultados.push(fatorialNMenos1);
            const fatorialN = n * fatorialNMenos1;
            return fatorialN;
        }
    }

   obterListaResultados(): number[] {
        return this.listaResultados;
    }
}

const fatorialCalculador = new FatorialCalculador();
const resultado = fatorialCalculador.calcularFatorialComArmazenamento(5);
const listaResultados = fatorialCalculador.obterListaResultados();

console.log("Resultado do fatorial:", resultado);
console.log("Lista de resultados intermediários:", listaResultados);
