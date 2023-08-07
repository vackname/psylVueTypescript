import {MainVueTemplate} from '../models/vueSDK';

export interface init
{
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