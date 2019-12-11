import axios from 'axios'

const config = {
  baseURL: 'https://diaspora.black',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getAcomodacoes () {
  const url = '/wp-json/wp/v2/estate_property'
  return protocolo.get(url)
}