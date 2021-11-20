import axios from 'axios'

const mockyReq = axios.create({
  baseURL: 'https://run.mocky.io'
})

export default mockyReq
