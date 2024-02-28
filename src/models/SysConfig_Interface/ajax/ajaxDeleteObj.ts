import * as ajaxPB from './ajaxPublic';
import ResponseEventFail from './ajaxJson/ajaxFailResponse';
import ResponseEventCatch from './ajaxJson/ajaxCatchResponse';
import ResponseEventFinally from './ajaxJson/ajaxFinallyResponse';
import ResponseEventOverTime from './ajaxJson/ajaxOverTimeResponse';

/**
 * 僅限 Delete json body 使用
*/
export default interface ajaxThen extends ajaxPB.AjaxJsonSubmit
{

    /** 回應事件 Fail */
    Fail:(Fun:()=>void)=>ResponseEventFail,

    /** 回應事件 Request/Process 錯誤資訊*/
    Catch:(Fun:ajaxPB.FunCatchEvent)=>ResponseEventCatch,

    /** 回應完成後 容量資訊 事件  */
    Finally:(Fun:ajaxPB.FunFinallyEvent)=>ResponseEventFinally,
    
    /**
     * 等候超時設定
     * @param setTime 超時設定(單位毫秒)
     * @param overFun 超時 進入 funcion
     */
    OverTimeEvent:(setTime:number,overFun?:(errorMes:string)=>void)=>ResponseEventOverTime,
    /**
    * send web head (json object)
    */
    head:<T>(json:T)=>ajaxThen
}