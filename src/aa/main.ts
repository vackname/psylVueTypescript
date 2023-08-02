import tscM from "../models/SysConfig_Interface/tscModel/aa";
import {mainData,main} from './main_VueTemp';
import {vueComponentModel} from '../models/vueSDK';


/** example view */
var indata:mainData = {
        maindata:{a1:'firstname',a2:'lastname'},
        textProject:"input box",
        VueName:""
    };

/** aa 專案 入口 */
export default {
    data:indata,
    init:($t)=>{
        $t.import.toLoad();
    },
    temp:($t)=>{
        /*init temp() run to temp*/
        return {
            view1:$t.import.url('@view/index')
            .exportVue({
                main:{layout:'hi(layout)'},//data注入模板
                datamain:indata.maindata
            })
        };
    },
    tsc:[],//project -> typescript model
    completed:($t,tscModel)=>
    {
        $t.VueName='view1';//完成程序後 Get Set 渲染樣版
        /*init temp() run to completed or not exist init*/
    },
    methods:{

    }
} as vueComponentModel<mainData,main,tscM>;
