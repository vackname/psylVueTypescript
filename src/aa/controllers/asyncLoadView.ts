import {vueModelControllers} from "../../models/vueSDK";
import asyncLoadViewData from "./asyncLoadView_Interface";
import asyncLoadViewVueTemp from "../view/asyncLoadView_VueTemp";
import tscM from "../../models/SysConfig_Interface/tscModel/aa";

/** Model Path */
var M = new tscM();

/** data bind (self.data) **/
export default {
    data:{
        subject:"((my...asyncLoadView))"
    },
    tsc:[M.model_asyncM],
    completed:($t,tscModel)=>{
        $t["$m"] = tscModel.model_asyncM;//reg model
    }
} as vueModelControllers<asyncLoadViewData,asyncLoadViewVueTemp,tscM>;
