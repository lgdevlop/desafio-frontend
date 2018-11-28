import './Header.scss'

class Header {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<header class="landing--header"></header>',
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryHeader = () => document.querySelector('.landing--header')
}

export default Header
