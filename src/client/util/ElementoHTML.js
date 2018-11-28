/* eslint-disable no-param-reassign */
class ElementoHTML {
  constructor() {
    this.obj = { estilo: null }
  }

  removeElementoFilho = ([objeto, chaveElementoPai, chaveElementoFilho]) => {
    while (objeto[chaveElementoPai].firstChild) {
      objeto[chaveElementoPai].firstChild.remove()
    }
    objeto[chaveElementoFilho] = null
  }

  obtemElementoFilho = ([objeto, comportamento, chave = 'elemento']) => {
    if (objeto[chave] === null || objeto[chave] === undefined) {
      objeto[chave] = comportamento()
    }
  }

  /**
   * Insere no DOM um Elemento HTML
   * @param {function} funcaoRetornaTemplateElementoHtml Marcação HTML em uma string, para ser inserido no elemento html pai
   * @param {HTMLElement} elementoHtmlPai Objeto do elemento html pai(retornado do querySelector)
   * @param {array} paramSegComport Array contendo objeto, chave do objeto e objeto do elemento html do filho
   * @param {function} segComportamento Uma função de callback caso queira executar algo diferente
   */
  insereElementoFilho = (
    funcaoRetornaTemplateElementoHtml,
    elementoHtmlPai,
    paramSegComport,
    segComportamento = this.obtemElementoFilho
  ) => {
    elementoHtmlPai.insertAdjacentHTML('beforeend', funcaoRetornaTemplateElementoHtml())
    segComportamento(paramSegComport)
  }

  adicionaEvento = (elementoDOM, evento, comportamento) => {
    elementoDOM.addEventListener(evento, comportamento)
  }
}

export default ElementoHTML
