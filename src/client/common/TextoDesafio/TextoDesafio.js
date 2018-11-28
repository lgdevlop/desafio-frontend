import './TextoDesafio.scss'

class TextoDesafio {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `<div class="desafio--texto">
      <p class="desafio-sobre--titulo">Desafio</p>
      </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryTextoDesafio = () => document.querySelector('.desafio--texto')
}

export default TextoDesafio
