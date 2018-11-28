import './Card.scss'

import ElementoHTML from '../../util/ElementoHTML'
import ImagemCard from '../../common/ImagemCard'
import ResumoCard from '../../common/ResumoCard'
import DadosCard from '../../common/DadosCard'

import ConsomeRestAPI from '../../services/apiService'

class Card {
  constructor() {
    this.objetoElemento = {
      elemento: null,
      body: document.body,
      template: '<div class="desafio--card"></div>',
    }

    this.ManipulaDOM = new ElementoHTML()
    this.ImagemCardComponent = new ImagemCard()
    this.ResumoCardComponent = new ResumoCard()
    this.DadosCardComponent = new DadosCard()
  }

  adicionaNomeRepositorioNaLista = (nomeRepositorio) => {
    this.ManipulaDOM.insereElementoFilho(
      () => this.DadosCardComponent.templateItem(nomeRepositorio),
      this.DadosCardComponent.queryDadosCardLista(),
      [
        this.DadosCardComponent.objeto(),
        this.DadosCardComponent.queryDadosCardListaItem,
        'item',
      ]
    )
  }

  criaListaNomesRepositorios = (dados) => {
    // const listaNomesRepositorios = []
    dados.forEach((repositorio) => {
      // listaNomesRepositorios.push(repositorio.name)
      this.adicionaNomeRepositorioNaLista(repositorio.name)
    })
    // return listaNomesRepositorios
  }

  obtemRepositorios = async () => {
    const dados = await ConsomeRestAPI.obtemRepositorios()
    this.criaListaNomesRepositorios(dados)
  }

  obtemFavoritos = async () => {
    const dados = await ConsomeRestAPI.obtemRepositoriosFavoritos()
    this.criaListaNomesRepositorios(dados)
  }

  limpaLista = () => {
    this.ManipulaDOM.removeElementoFilho([
      this.DadosCardComponent.objeto(),
      'lista',
      'item',
    ])
  }

  handleClick = (evento) => {
    if (evento.target === this.ResumoCardComponent.queryBotaoRepositorio()) {
      this.limpaLista()
      this.obtemRepositorios()
    } else {
      this.limpaLista()
      this.obtemFavoritos()
    }
  }

  adicionaEvento = () => {
    this.ManipulaDOM.adicionaEvento(
      this.ResumoCardComponent.queryBotaoRepositorio(),
      'click',
      this.handleClick
    )

    this.ManipulaDOM.adicionaEvento(
      this.ResumoCardComponent.queryBotaoFavoritos(),
      'click',
      this.handleClick
    )
  }

  montaUI = () => {
    this.ManipulaDOM.insereElementoFilho(
      this.ImagemCardComponent.template,
      this.queryCard(),
      [this.ImagemCardComponent.objeto(), this.ImagemCardComponent.queryImagemCard]
    )
    this.ManipulaDOM.insereElementoFilho(
      this.ResumoCardComponent.template,
      this.queryCard(),
      [this.ResumoCardComponent.objeto(), this.ResumoCardComponent.queryResumoCard]
    )
    // Daqui para baixo, adicionar após clicar no botão
    this.ManipulaDOM.insereElementoFilho(
      this.DadosCardComponent.template,
      this.queryCard(),
      [this.DadosCardComponent.objeto(), this.DadosCardComponent.queryDadosCard]
    )

    this.ManipulaDOM.obtemElementoFilho([
      this.DadosCardComponent.objeto(),
      this.DadosCardComponent.queryDadosCardLista,
      'lista',
    ])

    this.adicionaEvento()
  }

  obtemEstatisticasProfile = async () => {
    const dadosRepositorios = await ConsomeRestAPI.obtemRepositorios()
    const quantidadeRepositorios = dadosRepositorios.length

    const dadosSeguidores = await ConsomeRestAPI.obtemSeguidores()
    const quantidadeSeguidores = dadosSeguidores.length

    const dadosSeguindo = await ConsomeRestAPI.obtemSeguindo()
    const quantidadeSeguindo = dadosSeguindo.length

    document.querySelectorAll('.infos--titulo')[0].textContent = `
    ${
      document.querySelectorAll('.infos--titulo')[0].textContent
    } ${quantidadeRepositorios}`

    document.querySelectorAll('.infos--titulo')[1].textContent = `
    ${document.querySelectorAll('.infos--titulo')[1].textContent} ${quantidadeSeguidores}`

    document.querySelectorAll('.infos--titulo')[2].textContent = `
    ${document.querySelectorAll('.infos--titulo')[2].textContent} ${quantidadeSeguindo}`
  }

  template = () => this.objetoElemento.template

  objeto = () => this.objetoElemento

  queryCard = () => document.querySelector('.desafio--card')
}

export default Card
