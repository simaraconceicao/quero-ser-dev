import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com/simaraconceicao/acomodacoes',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getAcomodacoes () {
  const url = './acomodacoes'
  return protocolo.get(url)
}