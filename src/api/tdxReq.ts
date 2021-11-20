import axios from 'axios'

const tdxReq = axios.create({
  baseURL: process.env.VUE_APP_TRX_URL
})

export default tdxReq
