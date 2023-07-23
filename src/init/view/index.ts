import indexData from "./index_Interface";
import indexVueTemp from "./index_VueTemp";
import animate_author from "../animateModel/author";//作者主題 動畫

import {importLoad,pb,vueComponentModel,vueModelTemp,Component,jObj} from "../../models/vueSDK";
/** 作者主題 動畫模組宣告 */
var $an:animate_author;

/** 首頁-入口Body Temp */
export default {
    data:{
        authorImg:null,
        showAnimateFlag:false,
        mLoad:false,
        textBox:"my textbox"
        },
    init:($t,$temp)=>
    {
        $an = new animate_author($t);
        $t["$an"] = $an;//注入樣版
        importLoad.p.aa((e)=>{//異步載入 注入專案
            Component($t)
            .Extends("aaTemp")//宣告樣版名
            .Project(map=>map(Name=>Name.aa));
            $temp();
        });
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

