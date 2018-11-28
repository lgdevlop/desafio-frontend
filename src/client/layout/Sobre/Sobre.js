import './Sobre.scss'

class Sobre {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<div class="sobre" id="sobre"></div>',
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  querySobre = () => document.querySelector('.sobre')
}

export default Sobre
