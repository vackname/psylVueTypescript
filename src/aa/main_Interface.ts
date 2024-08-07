import * as interfaceFormat from "../models/vueTemplateFormat";

/** template props */
export interface Props extends interfaceFormat.addVuePropsFormat
{
  /** 繼承變數 aa->main/index */
  aaa:interfaceFormat.toVuePropsType
}


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


/** template Action/methods (only support Function)
  * 注意: model為載入物件 需注入 "KeyName?"*/
interface ActionFunction
{

}

/** template Action/methods */
export interface Action extends interfaceFormat.addVueAction,ActionFunction
{

}

/** download model format 
 * 注意: model為載入物件 需注入 "KeyName?"*/
interface joinModeldownFormat
{

}

/** 宣告 prop 下放繼承數據 */
interface maindataObj
{
    a1:string,
    a2:string
}


/** init project(初始化入口點project)
  * 注意:來自於 template computed 為載入物件 註冊時機需注入 "KeyName?"
 */
export  interface Data extends joinModeldownFormat,ActionFunction
{
    /** 宣告 prop 下放繼承數據 */
    maindata:maindataObj,

    /** 渲染樣版名 */
    VueName:string
    /** input box */
    textProject:string
}

interface dataFormat
{
    layout:string
}

/** exportVue 注入數據端 */
export interface view_indexTemp
{
    /**  data注入模板*/
    aaProject_main:dataFormat,
    /** 宣告 prop 下放繼承數據 */
    datamain:maindataObj
}
