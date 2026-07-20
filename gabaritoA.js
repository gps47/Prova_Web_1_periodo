// ============================================================================
// GABARITO — ENSINO SUPERIOR / JavaScript — TURMA A
// ============================================================================
// Respostas corretas. Copie para alunos/ e rode os testes: deve dar 10,00.
// ============================================================================

export function nomeCompleto() {
  return "Gabarito Superior A";
}

// ----- Fechadas (1 a 14) -----
export function questao1() { return 2; } // declaração imutável
export function questao2() { return 3; } // valor falsy
//export function questao3() { return 2; } // método de array (map)
export function questao4() { return 5; } // coerção de tipos
export function questao5() { return 3; } // igualdade estrita vs frouxa
export function questao6() { return 2; } // serialização JSON
export function questao7() { return 2; } // typeof null
//export function questao8() { return 3; } // reduce (acumulador)
export function questao9() { return 5; } // arrow function
export function questao10() { return 2; } // switch fall-through
//export function questao11() { return 3; } // TDZ / function expression
//export function questao12() { return 2; } // sort lexicográfico
export function questao13() { return 4; } // querySelector vs querySelectorAll (DOM)
export function questao14() { return 3; } // stopPropagation vs preventDefault (DOM)

// ----- Abertas (15 a 20) -----
/*
export function inverterFrase(frase) {
  if (frase === "") return "";
  return frase.split(" ").reverse().join(" ");
}

export function contarOcorrencias(lista) {
  const c = {};
  for (const v of lista) c[v] = (c[v] || 0) + 1;
  return c;
}

export function ehPalindromo(texto) {
  const s = texto.toLowerCase().replace(/ /g, "");
  let i = 0, j = s.length - 1;
  while (i < j) { if (s[i] !== s[j]) return false; i++; j--; }
  return true;
}
*/
export function fatorial(n) {
  if (n < 0) return null;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}
/*
export function mesclarObjetos(a, b) {
  return { ...a, ...b };
}
  */
export function agruparPorParidade(numeros) {
  const r = { pares: [], impares: [] };
  for (const n of numeros) (n % 2 === 0 ? r.pares : r.impares).push(n);
  return r;
}

// ----- Fechadas DOM (21 a 30) -----
export function questao21() { return 2; } // getElementById inexistente -> null
export function questao22() { return 3; } // textContent (texto puro)
export function questao23() { return 1; } // addEventListener('click', fn)
export function questao24() { return 4; } // createElement + appendChild
export function questao25() { return 3; } // classList.add
export function questao26() { return 2; } // event.target = origem do evento
export function questao27() { return 3; } // button depois div (bubbling)
export function questao28() { return 1; } // event delegation
export function questao29() { return 4; } // el.remove()
export function questao30() { return 1; } // preventDefault impede envio padrão

// ----- Abertas DOM (31 a 35) -----
export function preencherLista(ul, itens) {
  for (const texto of itens) {
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
  }
}

export function configurarContador(botao, span) {
  let contador = 0;
  span.textContent = String(contador);
  botao.addEventListener("click", () => {
    contador += 1;
    span.textContent = String(contador);
  });
}

export function alternarAtivo(elemento) {
  elemento.classList.toggle("ativo");
}

export function listaClicavel(ul) {
  ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.add("selecionado");
    }
  });
}

export function limparElemento(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
