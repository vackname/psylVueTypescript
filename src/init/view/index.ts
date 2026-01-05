import tscM from "../../models/SysConfig_Interface/tscModel/init";
import * as indexView from "./index_Interface";
import aaProjectIndexTemp from "../../aa/view/index_VueTemp";
import indexVueTemp from "./index_VueTemp";
import JWTCrypto from "../../models/JWTCrypto/interface";

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
               return "QQ"+value;
            }
        } as indexView.Filter;
    },
    watch:
    {
        textBox:(val:string,oldValue:string)=>
        {
            
        }
    } as indexView.Watch,
    completed:($t)=>
    {//主樣版初始化完成

        //models 載入實例 jwt toke 生成範例
        $t.import.m.js.JWTCrypto<JWTCrypto>(e=>{
            console.log("jwt toke 生成範例-----");
            var JWTCryptoData = e();
            console.log(JWTCryptoData.CreateJWT({
            "alg": "HS256",
            "typ": "JWT"
            },{
            "toLang": "ja",
            "nbf": 1767191398,
            "exp": 1767491398,
            "iat": 1767153914,
            "iss": "a525"
            },"aa1234"));//加密後 密鑰 HmacSHA256("aa1234")
        });

        setTimeout(()=>{// Computed參數 get/set (經6秒後會發生變化
            $t.getComputedForTitle="[computed set 變化]";
        },6000); 

        $t.import.p.aa(InsertTemp=>
            InsertTemp("aaTemp", tempObj=>tempObj.exportVue({ main:$t.main })).toLoad());

        Component($t)//取得下層頁 this 物件
        .generation<aaProjectIndexTemp>("aaTemp/view1").async(temp=>{
            setTimeout(()=>{
            temp.show = false;
            console.log("generation");
            console.log(temp);
            },5000);
        });

        //樣版渲染完成
        pb.el.id("init_panel").style({"opacity":"0"}).animate({"duration":0.6,"delay":0.3,"count":1},
        {//主樣版 body 漸顯示
            "0%":{"opacity":"0.1"},
            "100%":{"opacity":"1"}
        }).remove();

        if($t.main!=null)
            $t.main.init.page = 'index';//啟動觸發 html head title
    },
    temp:($t)=>
    {
        /** 樣版緩存 */
        var tempObj:vueModelTemp = {};
        pb.AddPrototype($t.head,{main:$t.main,index$m:$t.$m});//相融繼承key (props)
        tempObj["headTemp"] = Component($t).import(temp=>temp.init.temp_index_head).exportVue($t.head);
        tempObj["footTemp"] = $t.import.url("@temp/index/foot").exportVue($t.foot);
        tempObj["AuthorATemp"] = Component($t).import(temp=>temp.init.temp_index_AuthorAnimate).exportVue({});
        return tempObj;
    },
    action:($t)=>{
        return {
            getFun:()=>
            {
                
            },
            toUrlHistoryFuntion:()=>
            {
                alert('test 你觸發網址錨點程序記錄功能');
            },
            saveHomeToHistory:()=>
            {
                //click 後，重新整理頁面即可出現運行 url function 效果
                urlHistory.addJoinApp("toUrlHistoryFuntion()");//join index of this.toUrlHistoryFuntion()
                //urlHistory.add("appThis.toUrlHistoryFuntion()"); 等同
            }
        } as indexView.Action;
    }
} as vueComponentModel<indexView.Data,indexVueTemp>;//<bind data KeyName,VueTemplate=$t>


