import {vueComponentModel,VueTemplate,MainVueTemplate,Component} from '../../models/vueSDK';

export default {
    data:{

    },
    init:($t)=>{
        $t.import.toLoad();
    },
    temp:($t)=>{
        /*init $temp() run to temp*/
        return {

            }
    },
    completed:($t)=>
    {
        /*init $temp() run to completed or not exist init*/
    },
    action:$t=>{
        return{
            /** add Temp example */
            openAsyncView:()=>
            {
                Component($t)
                .Extends("asynTemp").Template(map=>map(temp=>temp.aa.view_asyncLoadView));
            }
        }
    }
} as vueComponentModel<any,VueTemplate>;
