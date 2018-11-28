import './IconesSociais.scss'

class IconesSociais {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `
    <div class="landing--icones-sociais">
      <a href="#"><i class="fab fa-facebook-square"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fab fa-github-square"></i></a>
    </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryIconesSociais = () => document.querySelector('.landing--header')
}

export default IconesSociais
