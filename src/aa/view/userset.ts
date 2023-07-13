import {vueComponentModel,VueTemplate,MainVueTemplate} from '../../models/vueSDK';

export default {
    data:{

    },
    init:($t,$temp)=>{

    },
    temp:($t)=>{
        /*init $temp() run to temp*/
        return {

            }
    },
    tsc:[],//project -> typescript model
    completed:($t,tscAry,$temp)=>
    {
        /*init $temp() run to completed or not exist init*/
    },
    methods:{

    }
} as vueComponentModel<any,VueTemplate<MainVueTemplate>>;
