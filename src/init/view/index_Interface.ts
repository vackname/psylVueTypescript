import {jObjInterface} from "../../models/vueSDK";
import { init} from "../main_VueTemp";

/** init project(初始化入口點project) */
export  default interface index
{
    /** controller model是否載入完成*/
    mLoad:boolean,
    /** 控項名 */
    textBox:string,
    /** 自定義全域指令 */
    toMesBind:string,
    /** main 繼承注入 */
    main?:init
}