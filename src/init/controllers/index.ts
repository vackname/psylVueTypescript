import tscM from "../../models/SysConfig_Interface/tscModel/init";
import indexVueTemp from "../view/index_VueTemp";
import indexData from "./index_interface";
import {vueModelControllers} from "../../models/vueSDK";

var M:tscM = new tscM();

export default 
{
    data:{
        title:"hihi-data-controllers",
        head:{
            headTitle:"prop head title"
        },
        foot:{}
    },
    tsc:[M.model_indexTsc],
    completed:($t,tscModel)=>
    {
        $t["$m"] = tscModel.model_indexTsc;
        $t.mLoad=true;
    }
} as vueModelControllers<indexData,indexVueTemp,tscM>;