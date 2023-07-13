export interface asyncGet
{
    /**
     * async response function(data=string)
    */
    async:async,

    /**
     * async response function(data=json object)
    */
    asyncToJson:asyncJson,

    /**
     * 等候超時設定
     * @param setTime 超時設定(單位毫秒)
     * @param overFun 超時 進入 funcion
    */
    timeout:(setTime:number,overFun?:(errorMes:ProgressEvent)=>void)=>asyncGet,

    /**
     * send data (json object)
     */
    input:<T>(json:T)=>asyncToGet,

    /**
    * send web head (json object)
    */
    head:<T>(json:T)=>asyncToGet
}

/**
 * 僅限 get 使用
*/
export interface asyncToGet
{
    /**
     * async response function(fileStream=base64)
    */
    asyncToStreamBase64 :async,

    /**
     * async response function(data=string)
    */
    async:async,

    /**
     * async response function(data=json object)
    */
    asyncToJson:asyncJson,

    /**
     * 等候超時設定
     * @param setTime 超時設定(單位毫秒)
     * @param overFun 超時 進入 funcion
    */
    timeout:(setTime:number,overFun?:(errorMes:string)=>void)=>asyncToGet,

    /**
     * send data (json object)
     */
    input:<T>(json:T)=>asyncToGet,

    /**
    * send web head (json object)
    */
    head:<T>(json:T)=>asyncToGet
}

/**
 * @param url Api 路經
*/
type goApi = (url:string)=>asyncGet;

/**
 * 僅限 get 使用
 * @param url Api 路經
*/
type goApiGet = (url:string)=>asyncToGet;

/**
 * @param re response data
 * @param sendData send Data
 * @param url Api url
*/
type asyncTp = (re:string,sendData:any,url:string)=>void;

/**
 * 錯誤處理程序(未使用=預設=錯誤將不理會而重新連線3次))
*/
type asyncErrorTp = ()=>void;

/**
 * async response data
*/
interface async
{
    /**
     * @param fun response function
     * @param errorFun 錯誤處理程序function(未使用=預設=錯誤將不理會而重新連線3次))
    */
    (fun:asyncTp,errorFun?:asyncErrorTp):void;
}

/**
 * async response data to json
*/
interface asyncJson
{
    /**
     * @param fun response function
     * @param errorFun 錯誤處理程序function(未使用=預設=錯誤將不理會而重新連線3次))
    */
    <T>(fun:(re:T,sendData:any,url:string)=>void,errorFun?:asyncErrorTp):void;
}

export interface ajax
{
    /**
     *  ajax get
    */
    get:goApiGet,

    /**
     *  ajax post to gZip data
    */
    postGzip:goApi,

    /**
     *  ajax post
    */
    post:goApi,

    /**
     *  ajax json body post
    */
    Json:goApi,
    /**
     *  ajax post file
    */
    file:goApi,
}