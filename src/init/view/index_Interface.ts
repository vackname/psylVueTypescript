import {jObjInterface} from "../../models/vueSDK";
/** init project(初始化入口點project) */
export  default interface index
{
    /** 作者主題 動畫圖片 */
    authorImg:jObjInterface | null,
    /** 顯示動畫 */
    showAnimateFlag:boolean,
    /** controller model是否載入完成*/
    mLoad:boolean,
    /** 控項名 */
    textBox:string,
    /** 自定義 指令 bind */
    toMesBind:string
}