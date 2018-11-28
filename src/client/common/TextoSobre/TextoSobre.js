import './TextoSobre.scss'

class TextoSobre {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `<div class="sobre--texto-sobre">
      <p class="texto-sobre--titulo">Sobre</p>
      <p class="texto-sobre--sub-titulo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu porttitor mi. Maecenas facilisis nec massa sit amet dapibus. Curabitur ipsum est, rhoncus ut ultricies eu, lacinia sit amet neque. Phasellus ultricies lorem ut efficitur pulvinar. Quisque eu dolor eleifend, imperdiet ante in, ultrices turpis. Fusce vulputate diam massa, vel dignissim nunc venenatis id. Sed molestie, quam ac facilisis lacinia, mauris dui rutrum mi, non tempor risus enim sed sapien. Pellentesque at tortor nisi. Mauris feugiat ipsum non nunc tempor pellentesque. In hac habitasse platea dictumst. Sed condimentum auctor dictum. Etiam sit amet tristique elit.
      </p>
      </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryTextoSobre = () => document.querySelector('.sobre--texto-sobre')
}

export default TextoSobre
