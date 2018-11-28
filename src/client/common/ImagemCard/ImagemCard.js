import './ImagemCard.scss'

class ImagemCard {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `
    <div class="card--imagem-card">
      <div class="imagem-card--box">
        <img src="/img/norbert-levajsics-183706-unsplash-min.jpg" alt="Imagem" />
      </div>
      <div class="card--texto">
        <p class="card--titulo">Visitar Perfil</p>
      </div>
    </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryImagemCard = () => document.querySelector('.card--imagem-card')
}

export default ImagemCard
