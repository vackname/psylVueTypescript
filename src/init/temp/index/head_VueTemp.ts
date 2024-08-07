
import {VueTemplate} from "../../../models/vueSDK";
import * as mainTemp from "../../main_VueTemp";
import * as view from "./head_Interface";
import indexMainModel from "../../model/indexTsc/main";
/** head teamp props 進入點 interface */
export default interface Head extends view.Data,VueTemplate
{
    /** 入口this props */
    main?:mainTemp.main,
    /** index.$m model this */
    index$m:indexMainModel 
}