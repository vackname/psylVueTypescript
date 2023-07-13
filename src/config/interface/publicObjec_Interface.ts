import {jObjInterface} from '../../models/vueSDK';

/** 共公變數宣告 */
export default interface pubObj
{
    /** 公共 設定文檔/語系 */
    config:jObjInterface,
    /** 公共圖檔 資源 */
    lib:jObjInterface,
    /** string 目前所選語系 */
    lang:string
}