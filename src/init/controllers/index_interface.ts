import * as interfaceFormat from "../../models/vueTemplateFormat";
import indexMainModel from "../model/indexTsc/main";

/** template watch */
export interface Watch extends interfaceFormat.addVueWatch
{


}

/** template computed */
export interface Computed extends interfaceFormat.addVueComputedFormat
{
    /** test value */
    getComputedForTitle:interfaceFormat.toVueComputedGetAndSet,
    /** catch data */
    getComputedForTitleOutput:interfaceFormat.toVueComputedGetForFunction

}

/** template Filter */
export interface Filter extends interfaceFormat.addVueFilterFunctionFormat
{

}

/** download model format
 * 注意: model為載入物件 需注入 "KeyName?"*/
interface joinModeldownFormat 
{
    /** data model (斷開載入model時機)*/
    $m?:indexMainModel
}

interface head
{
    /** title */
    headTitle:string,
}

/**
 * data format
 * 注意:來自於 template computed 為載入物件 註冊時機需注入 "KeyName?"
 */
export interface Data extends joinModeldownFormat
{
    /** title */
    title:string,
    /** head 樣版數據 */
    head:head,
    /** 數據 樣版數據 */
    foot:{},
    /** test value (源自 comtrollers Computed)*/
    getComputedForTitle?:string
    /** catch data (源自 comtrollers Computed)*/
    getComputedForTitleOutput?:string
}