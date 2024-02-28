import tscM from "../../../models/SysConfig_Interface/tscModel/init";
import {vueComponentModel,VueTemplate,MainVueTemplate} from "../../../models/vueSDK";

export default {
    data:{
                                    
    },
    //props:["footValue"],
    props:{
        footValue:
        {
            type:String,
            default:"test default"
        }
    },
    init:($t)=>{
       
    },
    completed:($t)=>
    {

    },
    temp:($t)=>{ 
        return {

            }
    }
} as vueComponentModel<any,VueTemplate<MainVueTemplate>>;
