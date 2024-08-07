import {MainVueTemplate,VueTemplate} from '../models/vueSDK';
import * as forProtalMain from '../init/main_VueTemp';
import * as mainView from "./main_Interface";

/** 主要入口樣版 */
export default interface main extends mainView.Data,VueTemplate
{
   /** vue 程序 入口點 this */
   main?:forProtalMain.init
}