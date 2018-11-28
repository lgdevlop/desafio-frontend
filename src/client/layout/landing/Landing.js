import './Landing.scss'

class Landing {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<div class="landing" id="home"></div>',
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryLanding = () => document.querySelector('.landing')
}

export default Landing
