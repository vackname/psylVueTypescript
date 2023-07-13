import headData from "./head_Interface";
import headVueTemp from "./head_VueTemp";
import {vueComponentModel} from "../../../models/vueSDK";

export default {
    data:{
        head1:"head1-value",
        ctrInput:"hihi"
    },
    watch:
    {

    },
    init:($t,$temp)=>
    {
        $temp();
    },
    temp:($t)=>{
        return {};
        
    },
    tsc:[],
    completed:($t:headVueTemp,tscAry,$temp)=>
    {

    },
    methods:
    {
        
    }
} as vueComponentModel<headData,headVueTemp>;