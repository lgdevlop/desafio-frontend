export default class apiService {
  /**
   * Obtem os dados do Endpoint da API fornecido
   * @param {string} url Endereço URL do endpoint
   */
  static getApi(url) {
    return fetch(url).then((resposta) => resposta.json())
  }

  /**
   * Obtem os repositórios do usuário no github
   */
  static obtemRepositorios() {
    // https://api.github.com/users/lgdevlop/repos
    const parameters = {
      url: 'https://api.github.com/',
      users: 'users/',
      usuario: `lgdevlop/`,
      recurso: 'repos',
    }

    const url = `${parameters.url +
      parameters.users +
      parameters.usuario +
      parameters.recurso}`

    return this.getApi(url)
  }

  /**
   * Obtem os repositórios favoritos do usuário no github
   */
  static obtemRepositoriosFavoritos() {
    // https://api.github.com/users/lgdevlop/starred
    const parameters = {
      url: 'https://api.github.com/',
      users: 'users/',
      usuario: `lgdevlop/`,
      recurso: 'starred',
    }

    const url = `${parameters.url +
      parameters.users +
      parameters.usuario +
      parameters.recurso}`

    return this.getApi(url)
  }

  /**
   * Obtem os seguidores do usuário no github
   */
  static obtemSeguidores() {
    // https://api.github.com/users/lgdevlop/followers
    const parameters = {
      url: 'https://api.github.com/',
      users: 'users/',
      usuario: `lgdevlop/`,
      recurso: 'followers',
    }

    const url = `${parameters.url +
      parameters.users +
      parameters.usuario +
      parameters.recurso}`

    return this.getApi(url)
  }

  /**
   * Obtem quem o usuário segue no github
   */
  static obtemSeguindo() {
    // https://api.github.com/users/lgdevlop/following
    const parameters = {
      url: 'https://api.github.com/',
      users: 'users/',
      usuario: `lgdevlop/`,
      recurso: 'following',
    }

    const url = `${parameters.url +
      parameters.users +
      parameters.usuario +
      parameters.recurso}`

    return this.getApi(url)
  }
}
