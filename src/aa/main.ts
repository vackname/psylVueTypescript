import * as mainView from './main_Interface';
import mainVueTemp from './main_VueTemp';
import { vueComponentModel} from '../models/vueSDK';

/** aa 專案 入口 */
export default {
    data:{
        maindata:{a1:'firstname',a2:'lastname'},
        textProject:"input box",
        VueName:""
    },
    init:($t)=>{
        $t.import.toLoad();
    },
    temp:($t)=>{
        /*init temp() run to temp*/
        return {
            view1:$t.import.url('@view/index')
            .exportVue({
                aaProject_main:{layout:'hi(layout)'},//data注入模板
                datamain:$t.maindata
            } as mainView.view_indexTemp)
        };
    },
    completed:($t)=>
    {
        $t.VueName='view1';//完成程序後 Get Set 渲染樣版
        /*init temp() run to completed or not exist init*/
    }
} as vueComponentModel<mainView.Data,mainVueTemp>;
