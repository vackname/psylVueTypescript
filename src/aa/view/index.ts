import {vueComponentModel} from '../../models/vueSDK';
import * as indexData from './index_Interface';
import indexVueTemp from './index_VueTemp';

export default {
    data:{
        show:false
    },
    init:($t,$temp)=>{
        setTimeout(()=>{
            $t.show=true;
        },3000);
        $t.data.user.load = '';//controller data
        $temp();
    },
    temp:($t)=>{
        /*init $temp() run to temp*/
        return {
            userpage : $t.import('@view/userset')
            .exportVue({//bind data for user page
                main: $t.main,
                data: $t.data.user
            })
            };
    },
    tsc:[],//project -> typescript model
    completed:($t,tscAry,$temp)=>
    {
        /*init $temp() run to completed or not exist init*/
    },
    methods:{

    }
} as vueComponentModel<indexData.indexTemp,indexVueTemp>;
