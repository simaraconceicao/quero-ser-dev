import axios from 'axios'

const config = {
  baseURL: 'http://my-json-server.typicode.com/simaraconceicao',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getMensagens () {
  const url = '/acomodacoes/acomodacoes'
  return protocolo.get(url)
}