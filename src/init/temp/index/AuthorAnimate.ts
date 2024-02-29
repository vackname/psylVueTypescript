import {vueComponentModel,VueTemplate,MainVueTemplate,Commandloadimg,jObj,task} from "../../../models/vueSDK";

import tscM from "../../../models/SysConfig_Interface/tscModel/init";//project for discrete model of load
import animate_author from "../../animateModel/author";//作者主題 動畫

/** 作者主題 動畫模組宣告 */
var $an:animate_author;

export default {
    data:{
        authorImg:null,
    },
    init:($t)=>{
        $an = new animate_author($t);
        $t["$an"] = $an;//注入樣版
    },
    temp:($t)=>{ 
        return {

            }
    },
    completed:($t)=>
    {
        task.Factory.StartNew(val=>{
            var authorImg = jObj();//啟用注入jObj 物件
            authorImg.loadlib("author",e=>{//異步載入圖片
                $t.authorImg = authorImg;
                val.resolve("author");
            });
        }).ContinueWith({
            SuccessEvent:val=>{
                $t.$an.run();
            },
            CatchEvent:val=>
            {
                console.log(val.ObjectVal);
            }
        }).ContinueCatch(val=>{
            console.log("animate Abort");
        }).AbortAfter(5000);
        
    },
    action:$t=>{
        return{
            /** 作者動畫 image 指令 載入 設定 <image v-loadimg='authorSrc("bk.png")' />*/
            authorSrc:(src:string) => ({'source':$t.authorImg,'src':src,'show':$t.showAnimateFlag} as Commandloadimg),
        }
    }
} as vueComponentModel<any,VueTemplate<MainVueTemplate>>;
;
