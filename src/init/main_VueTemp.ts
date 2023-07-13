import {MainVueTemplate} from '../models/vueSDK';
import pubObj from '../config/interface/publicObjec_Interface';

export interface init
{
    /** 共用 libary 注入繼承(起動樣版 get set 變動時機取用) */
    pub:pubObj,//importLoad.pub
    /** 目前位於子頁code(子標題名) */
    page:string,
    /** 進入專案(init project us) */
    urlName:string,
    /** 網址路徑名 */
    spUrl:string,
}

/**
 * 數據樣版
*/
export interface mainData
{
    /** 初始樣版 */
    init:init,
}

export interface main extends mainData,MainVueTemplate
{
    /** 初始樣版 */
    init:init,
}