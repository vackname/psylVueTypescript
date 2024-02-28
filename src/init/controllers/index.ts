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
    discreteModelLoad:tsc => 
    tsc(new tscM()).toMap(map=>[map.model_indexTsc])
    .CreateJson(modelObj=>{ return { $m:modelObj.model_indexTsc} }),
    completed:($t)=>
    {
        $t.mLoad=true;
    },
    funComputed:($t)=>
    {
        return {
            cache:true,
            mesCo:{
                get:()=>
                {
                    return $t.page+$t.spUrl;
                },
                set:()=>
                {

                }
            }
        };
    }
} as vueModelControllers<indexData,indexVueTemp>;