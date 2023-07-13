import indexVueTemp from "../view/index_VueTemp";
import indexData from "./index_interface";
import {vueModelControllers} from "../../models/vueSDK";

export default 
{
    data:{
        title:"hihi-data-controllers",
        head:{
            headTitle:"prop head title"
        },
        foot:{}
    },
    tsc:["model/indexTsc"],
    completed:($t,tscAry)=>
    {
        $t["$m"] = tscAry[0];
        $t.mLoad=true;
    }
} as vueModelControllers<indexData,indexVueTemp>;