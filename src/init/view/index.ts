import tscM from "../../models/SysConfig_Interface/tscModel/init";
import indexData from "./index_Interface";
import indexVueTemp from "./index_VueTemp";

import {pb,vueComponentModel,vueModelTemp,Component,urlHistory} from "../../models/vueSDK";

/** 首頁-入口Body Temp */
export default {
    data:{
        mLoad:false,
        textBox:"my textbox",
        toMesBind:"自定義欄位"
    },
    init:($t)=>
    {
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
            
        }
    },
    completed:($t)=>
    {//主樣版初始化完成

        $t.import.p.aa(InsertTemp=>
            InsertTemp("aaTemp", tempObj=>tempObj).toLoad());

        //樣版渲染完成
        pb.el.id("init_panel").style({"opacity":"0"}).animate({"duration":0.6,"delay":0.3,"count":1},
        {//主樣版 body 漸顯示
            "0%":{"opacity":"0.1"},
            "100%":{"opacity":"1"}
        }).remove();

        if($t.main!=null)
            $t.main.page = 'index';//啟動觸發 html head title
    },
    temp:($t)=>
    {
        /** 樣版緩存 */
        var tempObj:vueModelTemp = {};
        pb.AddPrototype($t.head,{main:$t});
        tempObj["headTemp"] = Component($t).import(temp=>temp.init.temp_index_head).exportVue($t.head);
        tempObj["footTemp"] = $t.import.url("@temp/index/foot").exportVue($t.foot);
        tempObj["AuthorATemp"] = Component($t).import(temp=>temp.init.temp_index_AuthorAnimate).exportVue({});
        return tempObj;
    },
    action:($t)=>{
        return {
            /** add function */
            getFun:()=>
            {
                
            },
            /**
             * 運行url function
            */
            toUrlHistoryFuntion:()=>
            {
                alert('test 你觸發網址錨點程序記錄功能');
            },
            /** 儲存此頁程序參數 記錄 於url 錨點 */
            saveHomeToHistory:()=>
            {
                //click 後，重新整理頁面即可出現運行 url function 效果
                urlHistory.addJoinApp("toUrlHistoryFuntion()");//join index of this.toUrlHistoryFuntion()
                //urlHistory.add("appThis.toUrlHistoryFuntion()"); 等同
            }
        }
    }
} as vueComponentModel<indexData,indexVueTemp>;//<bind data KeyName,VueTemplate=$t>


