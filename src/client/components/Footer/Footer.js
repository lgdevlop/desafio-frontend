import './Footer.scss'

class Footer {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `
      <footer class="desafio--footer">
        <p class="footer--texto">Desafio Desenvolvedor Front Qconcursos.com</p>
      </footer>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryFooter = () => document.querySelector('.desafio--footer')
}

export default Footer
