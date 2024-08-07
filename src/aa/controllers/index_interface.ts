import * as interfaceFormat from "../../models/vueTemplateFormat";
import toModel from '../model/index';

/** template watch */
export interface Watch extends interfaceFormat.addVueWatch
{

}

/** template computed */
export interface Computed extends interfaceFormat.addVueComputedFormat
{


}


/** template Filter */
export interface Filter extends interfaceFormat.addVueFilterFunctionFormat
{

}



/** download model format 
 * 注意: model為載入物件 需注入 "KeyName?"*/
interface joinModeldownFormat
{
    /** 注入 model */
    $m:toModel
}

interface user
{
    /** 數字陣列 */
    list:Array<number>,
    load:string
}

/* first 層級 */
interface forData
{
    /** user 層 */
    user:user
}

/** init project(初始化入口點project)
  * 注意:來自於 template computed 為載入物件 註冊時機需注入 "KeyName?"
 */
export  interface Data extends joinModeldownFormat
{
    /** first 數據 */
    data:forData
}