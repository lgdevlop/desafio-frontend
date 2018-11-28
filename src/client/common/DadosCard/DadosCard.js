import './DadosCard.scss'

class DadosCard {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: `
    <div class="card--dados-card">
      <div class="dados-card--texto">
        <p class="texto--titulo">Lista dos Repositórios:</p>
      </div>
      <div class="dados-card--lista">
        <ul class="lista--items">

        </ul>
      </div>
    </div>`,
    }
  }

  template = () => this.objetoElemento.template

  templateItem = (item) => `<li class="lista--item">${item}</li>`

  objeto = () => this.objetoElemento

  queryDadosCard = () => document.querySelector('.card--dados-card')

  queryDadosCardLista = () => document.querySelector('.lista--items')

  queryDadosCardListaItem = () => document.querySelector('.lista--item')
}

export default DadosCard
