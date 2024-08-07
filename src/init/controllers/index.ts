import tscM from "../../models/SysConfig_Interface/tscModel/init";
import indexVueTemp from "../view/index_VueTemp";
import * as indexControllers from "./index_interface";
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
    tsc(new tscM()).toMap(map=>map.model_indexTsc)// or multiple ex [map.model_indexTsc]
    .CreateJson(modelObj=>{ return { $m:modelObj.model_indexTsc} }),
    completed:($t)=>
    {
        $t.mLoad=true;
    },
    funComputed:($t)=>
    {
        return {//組合式計算 參數渲染
            getComputedForTitle:{
                get:()=>
                {
                    return "controller-我是Computed參數 get/set (經5秒後會發生變化)function:"+$t.head.headTitle+"_"+$t.title;
                },
                set:(value:string)=>
                {
                    console.log($t);
                    console.log("HIHIMyset");
                    $t.title = value;
                    console.log($t);
                }
            },
            getComputedForTitleOutput:()=>
                "controller-我是Computed參數 get function:"+$t.head.headTitle+"_"+$t.title

        } as indexControllers.Computed;
    }
} as vueModelControllers<indexControllers.Data,indexVueTemp>;