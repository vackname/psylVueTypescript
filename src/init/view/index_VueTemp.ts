import {VueTemplate} from "../../models/vueSDK";
import * as mainTemp from "../main_VueTemp";
import indexTemp from "../controllers/index_interface";
import indexData from "./index_Interface";

/** init project(初始化入口點project) */
export  default interface index extends indexData,indexTemp,mainTemp.init,VueTemplate<mainTemp.main>
{

    /** data model (斷開載入model時機)*/
    $m:any,
    
}