import {ajax} from "../ajax";
/**
 * @param re response data
 * @param sendData send Data
 * @param url Api url
*/
type asyncTp = (re:string,sendData?:any,url?:string)=>void;

/** ajax catch then response for any value*/
interface ajaxThenResFun
{
    (Res:any):void
}

/** ajax then catch */
interface ajaxThenCatchFirst
{
    /** ajax 程序完成後 下一個程序(response for cash) */
    awaitCatch:(Fun?:ajaxThenResFun)=>ajaxThenFinal
}

/** ajax then catch */
interface ajaxThenFinal
{
    /** ajax 程序完成後(Response for successfully) */
    awaitThen:(Fun?:<T>(re:T)=>void)=>void
}

/** ajax then */
interface ajaxThenCatch
{
    /** ajax 程序完成後 下一個程序(response for cash) */
    awaitCatch:(Fun?:ajaxThenResFun)=>void
}

/** ajax then */
interface ajaxThen
{
    /** ajax 程序完成後(Response for successfully) */
    awaitThen:(Fun?:<T>(re:T)=>void)=>ajaxThenCatch
}

interface ajaxThenJoin extends ajaxThen,ajaxThenCatchFirst
{

}

/**
 * async response data
*/
export interface Response
{
    /**
     * @param fun response function (未使用Catch 事件=預設=錯誤將不理會而重新連線3次)
    */
    (fun:asyncTp):ajaxThenJoin;
}

/**
 * async response data to json
*/
export interface ResponseJson
{
    /**
     * @param fun response function (未使用Catch 事件=預設=錯誤將不理會而重新連線3次)
    */
    <T>(fun:(re:T,sendData?:any,url?:string)=>void):ajaxThenJoin;
}

/**
 * catch event
*/
export interface CatchEventInfo
{
    /**
    * 0	UNSENT	Client has been created. open() not called yet.
    * 1	OPENED	open() has been called.
    * 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    * 3	LOADING	Downloading; responseText holds partial data.
    * 4	DONE	The operation is complete.
    */
    readyState: number,
    /** server response status*/
    status: number
}

/**
 * catch response
*/
export interface FunCatchEvent
{
    (event:CatchEventInfo):void
}
/** 
 * 事件結束 Event Response
 */
export interface FinallyEventInfo
{
    ContentLength:number,
    TotalBytes:number
}

/** 
 * 事件結束 Event
 */
export interface FunFinallyEvent
{
    (event:FinallyEventInfo):void
}

/** ajax Sumbit */
interface AjaxBestSumbit
{
    /**
     * 啟動API
     */
    toSubmit:()=>ajaxThenJoin,
}

/**
 * ajax File Stream Submit
*/
export interface AjaxFileStreamSubmit extends AjaxBestSumbit
{
    
    /**
     * response = 回應資料 (fileStream=base64)
     */
    toStreamBase64Response:Response,
}

/**
 * ajax json body Submit
*/
export interface AjaxJsonSubmit extends AjaxBestSumbit
{
    /**
     * response = 回應資料 data to json object
     */
    toResponse:ResponseJson,
}

/**
 * ajax Submit
*/
export interface AjaxSubmit extends AjaxJsonSubmit
{
    /**
     * response = 回應資料data to string
     */
    toStringResponse:Response,
}