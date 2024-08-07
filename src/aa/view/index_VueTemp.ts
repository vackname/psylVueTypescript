import {VueTemplate,MainVueTemplate} from "../../models/vueSDK";
import * as forProtalMain from "../../init/main_VueTemp";
import * as indexControllers from "../controllers/index_Interface";
import * as indexView from "./index_Interface";
import * as mainView from '../main_Interface';

/** init project(初始化入口點project) props 進入點 interface */
export  default interface index extends indexView.Data,indexControllers.Data,mainView.view_indexTemp,VueTemplate
{
    
    /** vue 程序 入口點 this */
   main?:forProtalMain.init,
   /** main props 進入 */
   aaa?:string
}