import './Desafio.scss'

class Desafio {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<div class="desafio" id="desafio"></div>',
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryDesafio = () => document.querySelector('.desafio')
}

export default Desafio
