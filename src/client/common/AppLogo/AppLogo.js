import './AppLogo.scss'

class AppLogo {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<div class="header--app-logo">Leonardo Gomes</div>',
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryAppLogo = () => document.querySelector('.header--app-logo')
}

export default AppLogo
