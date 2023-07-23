import indexData from "./index_Interface";
import indexVueTemp from "./index_VueTemp";
import {importLoad,pb,vueComponentModel,vueModelTemp,Component} from "../../models/vueSDK";

/** 首頁-入口Body Temp */
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
            Component($t)
            .Extends("aaTemp")//宣告樣版名
            .Project(map=>map(Name=>Name.aa).exportVue({
                textProject:"----myTextProject---"//受繼承變數
            }));//專案物件

            $temp();//已引用完成所有樣版時機-插入樣版
        });
    },
    temp:($t)=>
    {
        pb.AddPrototype($t.head,{main:$t});
        
        Component($t)
        .Extends("headTemp")//宣告樣版名
        .Template(map=>map(path=>path.init.temp_index_head).exportVue($t.head));

        /** 樣版緩存 */
        var tempObj:vueModelTemp = {};

        tempObj["footTemp"] =  Component($t).import(path=>path.init.temp_index_foot).exportVue($t.foot);
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

