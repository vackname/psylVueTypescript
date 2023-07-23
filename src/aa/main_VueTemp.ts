import {MainVueTemplate,VueTemplate} from '../models/vueSDK';

    /** 宣告 prop 下放繼承數據 */
export interface maindataObj
{
    a1:string,
    a2:string
}


/**
 * 數據樣版
*/
export interface mainData
{
    /** 宣告 prop 下放繼承數據 */
    maindata:maindataObj,
    /** 渲染樣版名 */
    VueName:string
    /** input box */
    textProject:string
}

/** 主要入口樣版 */
export interface main extends mainData,VueTemplate<MainVueTemplate>
{

}