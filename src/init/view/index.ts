import tscM from "../../models/SysConfig_Interface/tscModel/init";
import indexData from "./index_Interface";
import indexVueTemp from "./index_VueTemp";
import animate_author from "../animateModel/author";//作者主題 動畫

import {pb,vueComponentModel,vueModelTemp,Component,jObj} from "../../models/vueSDK";

/** 作者主題 動畫模組宣告 */
var $an:animate_author;

/** 首頁-入口Body Temp */
export default {
    data:{
        authorImg:null,
        showAnimateFlag:false,
        mLoad:false,
        textBox:"my textbox",
        toMesBind:"自定義指令"
    },
    init:($t)=>
    {
        $an = new animate_author($t);
        $t["$an"] = $an;//注入樣版

        /* 與 $t.import.p.aa 等同作動
        importLoad.p.aa((e)=>{//異步載入 注入專案
            Component($t)
            .Extends("aaTemp")//宣告樣版名
            .Project(map=>map(Name=>Name.aa));
            $temp();
        });*/
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
        "textBox":(val:string,oldValue:string)=>
        {
            //偵聽元素 sample
        }
    },
    tsc:[],
    completed:($t,tscModel)=>
    {//主樣版初始化完成

        $t.import.p.aa(InsertTemp=>
            InsertTemp("aaTemp", tempObj=>tempObj).toLoad());

        //樣版渲染完成
        pb.el.id("init_panel").style({"opacity":"0"}).animate({"duration":0.6,"delay":0.3,"count":1},
        {//主樣版 body 漸顯示
            "0%":{"opacity":"0.1"},
            "100%":{"opacity":"1"}
        }).remove();
        $t.authorImg = jObj();//啟用注入jObj 物件
        $t.authorImg.loadlib("author",e=>{//異步載入圖片
            $t.showAnimateFlag = true;
            $an.run();

        });
    },
    temp:($t)=>
    {
        /** 樣版緩存 */
        var tempObj:vueModelTemp = {};
        pb.AddPrototype($t.head,{main:$t});
        tempObj["headTemp"] = Component($t).import(temp=>temp.init.temp_index_head).exportVue($t.head);
        tempObj["footTemp"] = $t.import.url("@temp/index/foot").exportVue($t.foot);
        return tempObj;
    },
    action:($t)=>{
        return {
            /** add function */
            getFun:()=>
            {
                
            }
        }
    }
} as vueComponentModel<indexData,indexVueTemp,tscM>;//<bind data KeyName,VueTemplate=$t>

