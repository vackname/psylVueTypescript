﻿import mainIndexTemp from "../../view/index_VueTemp";
import taskUs from "./taskUs";

export default class main{
    /** task 運行測試物件 */
    taskObj:taskUs|undefined

    constructor($tObj:mainIndexTemp) 
    {
        this.taskObj = new taskUs($tObj);
        console.log($tObj);//model 進入樣版
    }

    /** 我是model */
    mymodel=():string=>
    {
        console.log("渲染重新起動");
        return "me models";
    }

    /** 我是model */
    head_model=():string=>
    {
        console.log("渲染重新起動_head");
        return "->head models";
    }


    /** 我是model */
    foot_model=():string=>
    {
        console.log("渲染重新起動_foot");
        return "->foot models";
    }
};

