import * as ajaxM from "./SysConfig_Interface/ajax";
import importLoadM from "./SysConfig_Interface/importLoad";
import pubObj from '../config/interface/getPubObject_interface';
import * as runFUnM from "./SysConfig_Interface/middleWare";
import pbM from "./SysConfig_Interface/pb";
import * as vueComponentM from "./SysConfig_Interface/vueComponent";
import jObjM from "./SysConfig_Interface/JObj";

/**
 * public 程序處理
*/
export const pb:pbM = eval("pb");

/**
 * ajax
 */
export const ajax:ajaxM.ajax = eval("ajax");

/**
 * ajax
 */
export interface ajaxInterface extends ajaxM.ajax {}

/**
 * ajax 連結function
*/
export interface asyncGetInterface extends ajaxM.asyncGet {}

/**
 * ajax 連結function(僅限 Get)
*/
export interface asyncToGetInterface extends ajaxM.asyncToGet{}

/**
 * 公共域物件/載入初始化物件
 * 
*/
export interface importLoadObjInterface extends pubObj,importLoadM
{

}

/**
 * 系統掛載(公共域物件/載入初始化物件)
 */
export const importLoad:importLoadObjInterface = eval("importLoad");

/**
 * libary載入系統
*/
export var jObj =():jObjInterface=> eval("new Jobj()");

/**
 * libary載入系統 Interface
*/
export interface jObjInterface extends jObjM { }

/** 
 * url add middleware
*/
export const getMiddle:runFUnM.runFUnction = eval("getMiddleWare");

/** 
 * catch url middleware code
 */
 export const getMiddleCode:runFUnM.runFUnctionStr = eval("geMiddleWareCode");



 /**
  * template 載入(綁定)
 */
 export const vueComponent:vueComponentM.vueComponent = eval("vueComponent");

 /**
 *(T=專案入口 最高層級樣版) 專案內 子樣版 this 內import 注入功能 備註:model js 只能取 project 本身
*/
 export interface VueTemplate<T> extends vueComponentM.ThisImport<T>
 {

 }

 /**
  * 專案入口 main 樣版
 */
 export interface MainVueTemplate extends vueComponentM.templateObj<any,vueComponentM.ThisImport<any>>
 {

 }

 /**
  * 樣版 model T1=data class,T2=VueTemplate<T?> 樣版 extends
 */
 export interface vueComponentModel<T1,T2> extends vueComponentM.vueModel<T1,T2>
 {

 }

 /** 載入子樣版(生命周期) 陣列 templateObj<T1,T> */
 export interface vueModelTemp extends vueComponentM.vueModelTempLI
 {

 }

 /** controllers 數據取用層級 */
 export interface vueModelControllers<T1,T2> extends vueComponentM.vueColModel<T1,T2>
 {
    
 }



 /**
  * 專案 component
  * @param ProjectName 專案名
  * @returns 取得 專案Vue
  */
 export function ProjectComponent<T extends vueComponentM.ThisImport<any>>(ProjectName:string)
 {
   return (eval(ProjectName + '_mainrunVue.main')) as T;
 }