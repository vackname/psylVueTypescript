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
    discreteModelLoad: tsc=>tsc(new tscM())
    .toMap(map=>[map.model_asyncM])
    .CreateJson(modelObj=>{ return { $m:modelObj.model_asyncM }; }),//reg model
    completed:($t)=>{

    }
} as vueModelControllers<asyncLoadViewData,asyncLoadViewVueTemp>;
