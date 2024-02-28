import tscM from "../../models/SysConfig_Interface/tscModel/aa";
import {vueComponentModel,Component,importLoad,pb} from '../../models/vueSDK';
import * as indexData from './index_Interface';
import indexVueTemp from './index_VueTemp';

export default {
    data:{
        show:false,
    },
    init:($t)=>{
        $t.lib=importLoad.pub.lib;//注入宣告共用圖片取得
        setTimeout(()=>{//3sec 後出現 open userset.html button
            $t.show=true;
        },3000);
        $t.data.user.load = '';//controller data
        $t.import.toLoad();
    },
    temp:($t)=>{
        
        /*init temp() run to temp*/
        return {
            userpage : Component($t).import(path=>path.aa.view_userset)
                .exportVue({//bind data for user page
                    main: $t.main,
                    data: $t.data.user
                })
        };
    },
    tsc:[],//project -> typescript model
    completed:($t)=>
    {
        pb.el.delay(e=>
        e.id("aa_index_closBt")//close userset.html button
        .frame(el=>el.animate({"duration":1,"delay":1,"count":1},
        {//旋轉震動
            "0%":{"transform": "rotateY(0deg)"},
            "60%":{"transform": "rotateY(-90deg)"},
            "62%":{"transform": "rotateY(80deg)" },
            "90%":{"transform": "rotateY(-90deg)" },
            "97%":{"transform": "rotateY(80deg)" },
            "98%":{"transform": "rotateY(-180deg)" },
            "100%":{"transform": "rotateY(-180deg)"},
        }),
        4//特效時長範圍
        ,"closeBt"//frame flagname
        ).toFrame("closeBt",3)//反回frame flagname = closeBt
        .remove()//移除動畫
        ,0.05);//延遲50ms 進入
        /*init temp() run to completed or not exist init*/
    }
} as vueComponentModel<indexData.indexTemp,indexVueTemp>;
