import * as ajaxPB from '../ajaxPublic';

/** 回應事件 Fail LV2 Catch Lv3 OverTime */
export interface ResponseEventFailLv2CatchLv3OverTime extends ajaxPB.AjaxFileStreamSubmit
{
    /** 回應完成後 容是資訊 事件  */
    Finally:(Fun:ajaxPB.FunFinallyEvent)=>ajaxPB.AjaxFileStreamSubmit,

}

/** 回應事件 Fail LV2 Catch Lv3 Finally */
export interface ResponseEventFailLv2CatchLv3Finally extends ajaxPB.AjaxFileStreamSubmit
{

    /**
     * 等候超時設定
     * @param setTime 超時設定(單位毫秒)
     * @param overFun 超時 進入 funcion
     */
    OverTimeEvent:(setTime:number,overFun?:(errorMes:string)=>void)=>ajaxPB.AjaxFileStreamSubmit,
}

/** 回應事件 Fail LV2 Finally Lv3 Catch*/
export interface ResponseEventFailLv2FinallyLv3Catch extends ajaxPB.AjaxFileStreamSubmit
{
    /**
     * 等候超時設定
     * @param setTime 超時設定(單位毫秒)
     * @param overFun 超時 進入 funcion
     */
    OverTimeEvent:(setTime:number,overFun?:(errorMes:string)=>void)=>ajaxPB.AjaxFileStreamSubmit,
}

/** 回應事件 Fail LV2 Finally Lv3 OverTime*/
export interface ResponseEventFailLv2FinallyLv3OverTime extends ajaxPB.AjaxFileStreamSubmit
{
    /** 回應事件 Request/Process 錯誤資訊*/
    Catch:(Fun:ajaxPB.FunCatchEvent)=>ajaxPB.AjaxFileStreamSubmit,
}

/** 回應事件 Fail LV2 OverTime Lv3 Catch */
export interface ResponseEventFailLv2OverTimeLv3Catch extends ajaxPB.AjaxFileStreamSubmit
{

    /** 回應完成後 容是資訊 事件  */
    Finally:(Fun:ajaxPB.FunFinallyEvent)=>ajaxPB.AjaxFileStreamSubmit,
}

/** 回應事件 Fail LV2 OverTime Lv3 Finally */
export interface ResponseEventFailLv2OverTimeLv3Finally extends ajaxPB.AjaxFileStreamSubmit
{
    /** 回應事件 Request/Process 錯誤資訊*/
    Catch:(Fun:ajaxPB.FunCatchEvent)=>ajaxPB.AjaxFileStreamSubmit,
}