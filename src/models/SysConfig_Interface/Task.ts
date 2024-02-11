interface TaskAbortAfter
{
    /** 等候時間最大值(強制關閉執行序)
     * @param ms  單位毫秒
     */
    (ms:number):Promise<any>
}

interface anchorValueObj
{
    /** 
     * @param  Value 錨點參數物件
     */
    (Value:any):void
}

interface anchorObj
{
    /** 
     * @param  resolve 錨點傳送Function
     */
    (resolve:anchorValueObj):void
}

/** add 新執行序 */
interface TaskContinueWitchFun<T>
{
    /**
     * @param resolve 執行完成 通知錨點
     * @param previousValue 上一個執行 錨點 運行參數
    */
    (resolve:anchorValueObj,previousValue:T):void
}

/** add 新執行序 */
interface TaskContinueWitch
{
    <T>(Fun:TaskContinueWitchFun<T>):TaskFactoryObj
}

/** add then 執行序 */
interface TaskThenFun<T>
{
    /**
     * @param resolve 執行完成 通知錨點
     * @param resolve 執行失敗 通知錨點
     * @param previousValue 上一個執行 錨點 運行參數
    */
    (resolve:anchorValueObj,reject:anchorValueObj,previousValue:T):void
}

/** add then 新執行序 */
interface TaskThen
{
    <T>(Fun:TaskThenFun<T>):TaskFactoryObj
}

/** add Catch 執行序 */
interface TaskCatchFun<T>
{
    /**
     * @param previousValue 上一個執行 錨點 運行參數
    */
    (previousValue:T):void
}

/** add Catch新執行序 */
interface TaskCatch
{
    <T>(Fun:TaskCatchFun<T>):TaskFinalProcess
}

interface TaskFinalProcess
{
    /** 強制關閉執行序 */
    Abort:()=>Promise<any>,

    /** 等候時間最大值(強制關閉執行序) */
    AbortAfter:TaskAbortAfter,

    /** 執行序 await get Promise object */
    getPromise:()=>Promise<any>,
}

/** 初始化Task */
export interface TaskFactoryObj extends TaskFinalProcess
{
    /** 繼續運行 執行序 */
    ContinueWith:TaskContinueWitch,

    /**
     * 繼續運行 promise then
    */
    then:TaskThen,

    /**
     * 錯誤時機 或 abort Catch 時機
    */
    ContinueCatch:TaskCatch
}

/** 注入 Task.Factory */
export interface TaskObj
{
    /** Task 初始化程序 
    */
    Factory:(resolve:anchorObj)=>TaskFactoryObj
}