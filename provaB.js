// (0 PONTOS) Identificação — nomeCompleto
// Retorne uma string com o NOME COMPLETO do(s) aluno(s).
export function nomeCompleto() {
  // return "Seu Nome Completo";
}

// ----------------------------------------------------------------------------
// PARTE 1 — Questões fechadas (1 a 15) — 1 ponto cada
// Retorne o NÚMERO (1 a 5) da alternativa correta.
// ----------------------------------------------------------------------------

// (1 PONTO) Questão 1
// Para criar um novo <li> e colocá-lo dentro de uma <ul> já existente, a
// sequência correta é:
//   1) new HTMLElement('li')
//   2) ul.innerText = 'li'
//   3) ul.createElement('li')
//   4) const li = document.createElement('li'); ul.appendChild(li)
//   5) document.appendChild('li')
export function questao1() {
  // return ...
}

// (1 PONTO) Questão 2
// Qual a forma moderna de remover do DOM o próprio elemento `el`?
//   1) el.remove()
//   2) el.innerHTML = null
//   3) el.parentNode.delete(el)
//   4) delete el
//   5) el.style.display = 'none'
export function questao2() {
  // return ...
}

// (1 PONTO) Questão 3
// Qual o resultado de `typeof null`?
//   1) 'boolean'
//   2) 'null'
//   3) 'object'
//   4) 'number'
//   5) 'undefined'
export function questao3() {
  // return ...
}

// (1 PONTO) Questão 4
// Qual o resultado da expressão `2 + "2"`?
//   1) 4
//   2) '22'
//   3) NaN
//   4) '4'
//   5) 22
export function questao4() {
  // return ...
}

// (1 PONTO) Questão 5
// Em um listener registrado em um elemento PAI, a que se refere `event.target`?
//   1) sempre o document
//   2) o objeto window
//   3) o elemento onde o listener foi registrado (o pai)
//   4) o elemento que originou o evento (onde o usuário realmente clicou)
//   5) o próximo elemento irmão
export function questao5() {
  // return ...
}

// (1 PONTO) Questão 6
// O que `document.querySelector('.item')` retorna quando há vários `.item` na página?
//   1) um array com todos os `.item`
//   2) sempre null
//   3) uma NodeList com todos os `.item`
//   4) apenas o PRIMEIRO elemento que casa (ou null se nenhum)
//   5) o ÚLTIMO elemento que casa
export function questao6() {
  // return ...
}

// (1 PONTO) Questão 7
// Qual a forma RECOMENDADA de registrar um tratador de clique no botão `btn`?
//   1) btn.addEventListener('click', tratar)
//   2) btn.onclick = tratar()
//   3) btn.on('click', tratar)
//   4) btn.click(tratar)
//   5) btn.addEventListener('onclick', tratar())
export function questao7() {
  // return ...
}

// (1 PONTO) Questão 8
// No evento `submit` de um formulário, o que faz `event.preventDefault()`?
//   1) valida os campos automaticamente
//   2) impede o evento de subir para os elementos pais (bubbling)
//   3) remove o formulário do DOM
//   4) limpa todos os campos do formulário
//   5) impede o envio/recarregamento padrão da página
export function questao8() {
  // return ...
}

// (1 PONTO) Questão 9
// O que `document.getElementById('menu')` retorna quando NÃO existe nenhum
// elemento com id="menu" na página?
//   1) lança um erro
//   2) false
//   3) null
//   4) undefined
//   5) uma lista vazia
export function questao9() {
  // return ...
}

// (1 PONTO) Questão 10
// Quais os resultados de `0 == ''` e `0 === ''`, respectivamente?
//   1) false e true
//   2) false e false
//   3) true e true
//   4) ambos lançam erro
//   5) true e false
export function questao10() {
  // return ...
}

// (1 PONTO) Questão 11
// Qual o resultado de `JSON.stringify({ a: 1, b: [2, 3] })`?
//   1) '{a:1,b:[2,3]}'
//   2) { a: 1, b: [2, 3] }
//   3) '{"a":1,"b":[2,3]}'
//   4) '{"a":1,"b":"[2,3]"}'
//   5) lança erro
export function questao11() {
  // return ...
}

// (1 PONTO) Questão 12
// Em um `if`, qual dos valores abaixo é avaliado como FALSO (falsy)?
//   1) "0"
//   2) {}
//   3) []
//   4) "false"
//   5) 0
export function questao12() {
  // return ...
}

// (1 PONTO) Questão 13
// O que acontece quando um `case` do `switch` é executado e NÃO tem `break`?
//   1) executa também os cases seguintes até achar um break (fall-through)
//   2) ignora aquele case e segue
//   3) reinicia o switch do início
//   4) retorna undefined imediatamente
//   5) lança um erro de sintaxe
export function questao13() {
  // return ...
}

// (1 PONTO) Questão 14
// Dado `const f = (a, b) => a + b * 2;`, qual o resultado de `f(2, 3)`?
//   1) NaN
//   2) 12
//   3) 10
//   4) 7
//   5) 8
export function questao14() {
  // return ...
}

// (1 PONTO) Questão 15
// Qual palavra-chave declara uma referência que NÃO pode ser reatribuída?
//   1) let
//   2) function
//   3) const
//   4) var
//   5) readonly
export function questao15() {
  // return ...
}

// ----------------------------------------------------------------------------
// PARTE 2 — Questões abertas (16 a 20) — 3 pontos cada — implemente a função
// ----------------------------------------------------------------------------

// (3 PONTOS) Questão 16
// Recebe um array e retorna um OBJETO contando quantas vezes cada valor
// aparece. As chaves são os valores; os valores, a contagem.
// Exemplo: contarOcorrencias([1,2,2,3,3,3]) -> { "1":1, "2":2, "3":3 }
// contarOcorrencias([]) -> {}
export function contarOcorrencias(lista) {
  // return ...
}

// (3 PONTOS) Questão 17
// Recebe um array de números e retorna um objeto
// { pares: [...], impares: [...] } preservando a ordem de entrada.
// Exemplo: agruparPorParidade([1,2,3,4]) -> { pares:[2,4], impares:[1,3] }
// agruparPorParidade([]) -> { pares:[], impares:[] }
export function agruparPorParidade(numeros) {
  // return ...
}

// (3 PONTOS) Questão 18
// Recebe um elemento <ul> e um array de strings `itens`. Para cada string,
// cria um <li> com aquele texto e o anexa à `ul`, na ordem do array.
// Não retorna nada. (Dica: document.createElement / textContent / appendChild)
export function preencherLista(ul, itens) {
  // implemente aqui
}

// (3 PONTOS) Questão 19
// Recebe um `elemento`. Ao ser chamada, adiciona a classe `ativo` caso o
// elemento não a tenha, ou a remove caso já tenha. (Dica: classList.toggle)
export function alternarAtivo(elemento) {
  // implemente aqui
}

// (3 PONTOS) Questão 20
// Recebe um elemento <ul>. Registra UM ÚNICO listener de `click` na `ul` que,
// ao clicar em qualquer <li> filho, adiciona a classe `selecionado` somente ao
// <li> que foi clicado. (Dica: event delegation / event.target / classList)
export function listaClicavel(ul) {
  // implemente aqui
}
