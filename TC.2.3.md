<h1>Algoritmo recursivo</h1>
<h3>Com complexidade espacial superior a outro em decorrência principalmente a dados internos da função e não como decorrência da entrada.</h3>
<p>Para exemplificar, consideraremos uma <b>função recursiva</b> que calcula o fatorial de um número, mas que <i>armazena</i> cada resultado parcial em uma lista interna.</p>
<p>Isso aumentará a complexidade espacial em relação a uma versão mais simples que não armazena resultados intermediários.</p>
<h2>Exemplo 1: </h2>
Função fatorialComArmazenamento(n):

    Se n == 0 ou n == 1:
        Retorne 1
        
    Senão:
        # Calcula o fatorial de n-1 recursivamente
        fatorial_n_1 = fatorialComArmazenamento(n - 1)
        
        # Armazena o resultado parcial em uma lista interna
        lista_resultados.adicionar(fatorial_n_1)
        
        # Calcula o fatorial de n multiplicando-o pelo resultado anterior
        fatorial_n = n * fatorial_n_1
        
        Retorne fatorial_n

<h2>Exemplo 2: </h2>

Função calcularFatorial(n):
    <p> Se n = 0 ou n = 1: </p>
    <p>   Retorne 1 </p>
    <p> Senão: </p>
    <p> # Calcular retorno </p>
     <p>   resultado = 1 </p>
        <p> Para i de 2 até n, passo 1: </p>
            <p> resultado = resultado * i </p>
        <p> Retorne resultado </p>

  <h2>Explicacao</h2>
<p>No exemplo, a função fatorialComArmazenamento calcula o fatorial de um número n de forma recursiva. No entanto, ela armazena todos os resultados intermediários em uma lista interna chamada lista_resultados.</p> 
<p>Isso significa que, à medida que a recursão ocorre, uma cópia do resultado parcial é armazenada em cada chamada recursiva, consumindo espaço adicional na memória.</p>
<br>
<p>Por exemplo, se chamarmos fatorialComArmazenamento(5), a lista lista_resultados conterá [1, 2, 6, 24] após a execução, armazenando todos os resultados intermediários.</p> 
<p>Isso aumenta a complexidade espacial do algoritmo em comparação com uma implementação não recursiva ou recursiva que não mantém essa lista de resultados.</p>
<p> Já no segundo exemplo, ele não armazena nenhum dado relacionado, o tornando menos complexo espacialmente </p>
<p>Então a complexidade espacial deste primeiro algoritmo é maior devido ao uso da lista interna para armazenar dados intermediários, o que não é necessário em um cálculo simples de fatorial.

 
