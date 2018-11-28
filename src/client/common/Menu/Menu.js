import './Menu.scss'

class Menu {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `<div class="header--menu">
      <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#desafio">Desafio</a></li>
      </ul>
      </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryMenu = () => document.querySelector('.header--menu')
}

export default Menu
