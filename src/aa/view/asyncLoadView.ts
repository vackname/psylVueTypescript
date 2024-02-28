import {vueComponentModel} from "../../models/vueSDK";
import * as asyncLoadViewData from "./asyncLoadView_Interface";
import asyncLoadViewVueTemp from "./asyncLoadView_VueTemp";
import tscM from "../../models/SysConfig_Interface/tscModel/aa";

/** Model Path */
var M = new tscM();

export default {
    data:{
                                    
    },
    init:($t)=>{

    },
    temp:($t)=>{
        /*init $t.import.toLoad() run to temp*/
        return {

            }
    },
    completed:($t)=>
    {

    }
} as vueComponentModel<asyncLoadViewData.asyncLoadViewTemp,asyncLoadViewVueTemp>;
