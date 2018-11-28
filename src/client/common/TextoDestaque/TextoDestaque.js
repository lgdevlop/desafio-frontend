import './TextoDestaque.scss'

class TextoDestaque {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `<div class="landing--texto-destaque">
      <p class="texto-destaque--titulo">Desenvolvedor Front End</p>
      <p class="texto-destaque--sub-titulo">Desafio Qconcursos.com</p>
      </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryTextoDestaque = () => document.querySelector('.landing--header')
}

export default TextoDestaque
