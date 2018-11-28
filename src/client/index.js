import './index.html'
import './common/App.scss'

import ElementoHTML from './util/ElementoHTML'

import Landing from './layout/landing'
import Header from './components/Header'
import AppLogo from './common/AppLogo'
import Menu from './common/Menu'
import TextoDestaque from './common/TextoDestaque'
import IconesSociais from './common/IconesSociais'

import Sobre from './layout/Sobre'
import TextoSobre from './common/TextoSobre'

import Desafio from './layout/Desafio'
import TextoDesafio from './common/TextoDesafio'
import Card from './components/Card'
import Footer from './components/Footer'

const handleScroll = (headerComponent) => {
  // if (window.pageYOffset > headerComponent.queryHeader().offsetTop && window.innerWidth > 499)
  if (window.pageYOffset > headerComponent.queryHeader().offsetTop) {
    headerComponent.queryHeader().classList.add('black')
  } else {
    headerComponent.queryHeader().classList.remove('black')
  }
}

const montaUI = () => {
  const manipulaDOM = new ElementoHTML()

  const layoutLanding = new Landing()
  const headerComponent = new Header()
  const AppLogoComponent = new AppLogo()
  const MenuComponent = new Menu()
  const TextoDestaqueComponent = new TextoDestaque()
  const IconesSociaisComponent = new IconesSociais()

  const SobreComponent = new Sobre()
  const TextoSobreComponent = new TextoSobre()

  const DesafioComponent = new Desafio()
  const TextoDesafioComponent = new TextoDesafio()
  const CardComponent = new Card()
  const FooterComponent = new Footer()

  window.onscroll = () => handleScroll(headerComponent)

  manipulaDOM.insereElementoFilho(
    layoutLanding.template,
    document.querySelector('#root'),
    [layoutLanding.objeto(), layoutLanding.queryLanding]
  )
  manipulaDOM.insereElementoFilho(
    headerComponent.template,
    layoutLanding.queryLanding(),
    [headerComponent.objeto(), headerComponent.queryHeader]
  )
  manipulaDOM.insereElementoFilho(
    AppLogoComponent.template,
    headerComponent.queryHeader(),
    [AppLogoComponent.objeto(), AppLogoComponent.queryAppLogo]
  )
  manipulaDOM.insereElementoFilho(MenuComponent.template, headerComponent.queryHeader(), [
    MenuComponent.objeto(),
    MenuComponent.queryMenu,
  ])

  manipulaDOM.insereElementoFilho(
    TextoDestaqueComponent.template,
    layoutLanding.queryLanding(),
    [TextoDestaqueComponent.objeto(), TextoDestaqueComponent.queryTextoDestaque]
  )

  manipulaDOM.insereElementoFilho(
    IconesSociaisComponent.template,
    layoutLanding.queryLanding(),
    [IconesSociaisComponent.objeto(), IconesSociaisComponent.queryIconesSociais]
  )

  // Sobre
  manipulaDOM.insereElementoFilho(
    SobreComponent.template,
    document.querySelector('#root'),
    [SobreComponent.objeto(), SobreComponent.querySobre]
  )
  manipulaDOM.insereElementoFilho(
    TextoSobreComponent.template,
    SobreComponent.querySobre(),
    [TextoSobreComponent.objeto(), TextoSobreComponent.queryTextoSobre]
  )

  // Desafio
  manipulaDOM.insereElementoFilho(
    DesafioComponent.template,
    document.querySelector('#root'),
    [DesafioComponent.objeto(), DesafioComponent.queryDesafio]
  )
  manipulaDOM.insereElementoFilho(
    TextoDesafioComponent.template,
    DesafioComponent.queryDesafio(),
    [TextoDesafioComponent.objeto(), TextoDesafioComponent.queryTextoDesafio]
  )
  manipulaDOM.insereElementoFilho(
    CardComponent.template,
    DesafioComponent.queryDesafio(),
    [CardComponent.objeto(), CardComponent.queryCard]
  )
  manipulaDOM.insereElementoFilho(
    FooterComponent.template,
    DesafioComponent.queryDesafio(),
    [FooterComponent.objeto(), FooterComponent.queryFooter]
  )

  CardComponent.montaUI()
  CardComponent.adicionaEvento()
  CardComponent.obtemEstatisticasProfile()
}

montaUI()
