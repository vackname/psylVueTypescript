import * as interfaceFormat from "../../models/vueTemplateFormat";
import {jObjInterface} from "../../models/vueSDK";
import { init} from "../main_VueTemp";
import animate_author from "../animateModel/author";//作者主題 動畫

/** template watch */
export interface Watch extends interfaceFormat.addVueWatch
{

    /** 控項 */
    textBox:interfaceFormat.toVueWatchValueOldValue

}

/** template computed */
export interface Computed extends interfaceFormat.addVueComputedFormat
{


}

/** template Action/methods (only support Function)
  * 注意: model為載入物件 需注入 "KeyName?"*/
interface ActionFunction
{
    /** add function */
    getFun?:()=>void,
    /**
     * 運行url function
    */
    toUrlHistoryFuntion?:()=>void,

    /** 儲存此頁程序參數 記錄 於url 錨點 */
    saveHomeToHistory?:()=>void
}

/** template Filter */
export interface Filter extends interfaceFormat.addVueFilterFunctionFormat
{
    /** 過濾格式 */
    toFormat:interfaceFormat.toVueModeFfuncFilter,
}

/** template Action/methods */
export interface Action extends interfaceFormat.addVueAction,ActionFunction
{

}

/** download model format 
 * 注意:來自於 model typescript 為載入物件 註冊時機需注入 'KeyName?'
 * 注意: model為載入物件 需注入 'KeyName?'*/
interface joinModeldownFormat 
{
    /** 動畫 animate model*/
    $an?:animate_author
}

/** view index 數據
  * 注意:如加入 Key,來自於 template computed 為載入物件 註冊時機需注入 'KeyName?'
 */
export interface Data extends ActionFunction,joinModeldownFormat
{
    /** controller model是否載入完成*/
    mLoad:boolean,
    /** 控項名 */
    textBox:string,
    /** 自定義全域指令 */
    toMesBind:string,
}