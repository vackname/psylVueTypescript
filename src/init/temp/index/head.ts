﻿import tscM from "../../../models/SysConfig_Interface/tscModel/init";
import * as headView from "./head_Interface";
import headVueTemp from "./head_VueTemp";
import {vueComponentModel} from "../../../models/vueSDK";

export default {
    data:{
        head1:"head1-value",
        ctrInput:"hihi"
    },
    props:false,
    /*
    props:
    {
        getValue:String
    },*/
    watch:
    {

    },
    init:($t)=>
    {
        $t.import.toLoad();
    },
    temp:($t)=>{
        return {};
        
    },
    completed:($t)=>
    {
        console.log($t);
    }
} as vueComponentModel<headView.Data,headVueTemp>;