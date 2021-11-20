import JsSHA from 'jssha'
import tdxReq from '@/api/tdxReq'

export default () => {
  const AppID = process.env.VUE_APP_TRX_ID
  const AppKey = process.env.VUE_APP_TRX_KEY
  const GMTString = new Date().toUTCString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  tdxReq.defaults.headers.common = { Authorization, 'X-Date': GMTString }
}
