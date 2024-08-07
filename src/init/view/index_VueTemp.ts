import {VueTemplate} from "../../models/vueSDK";
import * as mainTemp from "../main_VueTemp";
import * as indexControllers from "../controllers/index_interface";
import * as indexView from "./index_Interface";

/** init project(初始化入口點project) props 進入點 interface */
export  default interface index extends indexView.Data,indexControllers.Data,mainTemp.init,VueTemplate
{
    /** 入口this */
    main?:mainTemp.main

}