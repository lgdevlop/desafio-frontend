import './ResumoCard.scss'

class ResumoCard {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `
    <div class="card--resumo-card">
      <div class="resumo-card--infos">
        <p class="infos--titulo">Repositórios: </p>
        <p class="infos--titulo">Seguidores: </p>
        <p class="infos--titulo">Seguindo: </p>
      </div>
      <div class="resumo-card--botoes">
        <button type="button" class="botoes--repositorios">Ver Repositórios</button>
        <button type="button" class="botoes--favoritos">Ver Favoritos</button>
      </div>
    </div>`,
    }
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryResumoCard = () => document.querySelector('.card--imagem-card')

  queryBotaoRepositorio = () => document.querySelector('.botoes--repositorios')

  queryBotaoFavoritos = () => document.querySelector('.botoes--favoritos')
}

export default ResumoCard
