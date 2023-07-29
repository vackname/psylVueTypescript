import {templateObj} from "./vueComponent";

/** 專案樣版注冊 物件 注冊data */
interface AsyncFunProjectTemp
{
    (obj:templateObj<any,any>):void,
}

/** 載入樣版 mark */
interface objPJfunLoad
{
    /** 載入樣版 mark(等同 $temp)
     * @param fun 開始載入樣版階段 運行function
     */
    toLoad:(fun?:Function)=>void
}

/** 專案樣版注冊 */
interface AsyncFunAddTemp
{
    /** 
     * @param TempName 注冊樣版名
     * @param Project 專案樣版注冊 物件 注冊data
     */
    (TempName:string,Project:AsyncFunProjectTemp):objPJfunLoad
}

/**
 * load async function
*/
interface AsyncFun
{
    /**
     * @param InsertTemp 注入樣版
     * @param e type =(complete = 載入成功！)(fail = 載入失敗！)
    */
    (InsertTemp:AsyncFunAddTemp,e:string):void
}

/**
 *  project name(function)
*/
export default interface objPJFun{
    /**
     * @param fun load async function
     * @param $temp 起動運行 注入 子樣版
    */
    (fun:AsyncFun):void;
}
