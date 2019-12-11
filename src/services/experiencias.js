import axios from 'axios'

const config = {
  baseURL: 'https://diaspora.black',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getExperiencias () {
  const url = '/wp-json/wp/v2/product'
  return protocolo.get(url)
}