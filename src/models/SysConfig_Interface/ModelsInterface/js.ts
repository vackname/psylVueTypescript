import objJsTypeFun from '../vueModelsJSTypeScript';
import objJsFun from '../vueModelsJS';
/** 載入models js source物件 */
export default interface models
{
 /** md5 decode/encode */
 md5Ascii:objJsFun,
 /** vide js */
 video:objJsFun,
 /** Web Socket */
 WebSocket:objJsFun,
 /** to QRDecode */
 QRDecoder:objJsFun,
 /** create qrcode */
 qrcode:objJsFun,
 /** web rtc 使用 */
 adapterRTC:objJsFun,
 /** models->debugBundleWebSocket */
 debugBundleWebSocket:objJsFun,
 /** vide hls */
 hls:objJsFun,
 /** chart 圓餅圖 */
 d3v4Chart:objJsFun
}
