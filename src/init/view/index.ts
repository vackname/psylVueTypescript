import indexData from "./index_Interface";
import indexVueTemp from "./index_VueTemp";
import {importLoad,pb,vueComponentModel,vueModelTemp,vueComponent,ProjectComponent} from "../../models/vueSDK";

export default {
    data:{
        mLoad:false,
        textBox:"my textbox"
        },
    init:($t,$temp)=>
    {

    },
    funcFilters:($t)=>
    {
        return {
            toFormat:(value):string=>
            {
               return "";
            }
        };
    },
    watch:
    {

    },
    tsc:[],
    completed:($t,tscAry,$temp)=>
    {//主樣版初始化完成
        importLoad.p.aa((e)=>
        {//注入專案
            vueComponent($t)
            .Name("aaTemp")//宣告樣版名
            .Add(ProjectComponent("aa"));//專案物件
            $temp();
        });
    },
    temp:($t)=>
    {
        /** 樣版緩存 */
        var tempObj:vueModelTemp = {};
        pb.AddPrototype($t.head,{main:$t});
        tempObj["headTemp"] = $t.import("@temp/index/head").exportVue($t.head);
        tempObj["footTemp"] = $t.import("@temp/index/foot").exportVue($t.foot);
        return tempObj;
    },
    methods:
    {
        /** add function */
       getFun:()=>
       {

       }

    }
} as vueComponentModel<indexData,indexVueTemp>;//<bind data KeyName,VueTemplate=$t>

