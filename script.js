function reverseStringInPairs(input) {
    var reverseString = '';
    for (var s = 0; s < input.length; s += 2) {
        reverseString = input[s] + input[s + 1] + reverseString;
    }
    return reverseString;}

console.log(reverseStringInPairs("abcd"));
console.log(reverseStringInPairs("abcdef"));
console.log(reverseStringInPairs("ab"));
console.log(reverseStringInPairs(""));

// Nesse código, a função define a variavel result como null, então cria uma estrutura de repetição, definindo a variavel "s", que representa a string 
// como 0, e vai criando mais 2 parâmetros, sendo eles: continue se o valor de "s" for menor que o lenght da input que será retornada e faça a verificação 
// de "s" a cada 2 caracteres, fazendo que o código leia os pares de caracteres, depois disso ele vai concatenando os valores, por exemplo: "a" + "b" = "ab"
// "c" + "d" = "cd", então ele concatena o ultimo valor gerado com os valores gerados anteriormente, portanto caso o valor de input seja "abcd", ele vai retornar
// "cdab", caso seja "abcdef", ele vai retornar "efcdab"
