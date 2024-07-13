import InITempMap from "./ProjectMap/init_View";//注入初始 樣版map
import vueDirectiveEvt from "./vueDirectiveEvt";
import {pb} from "../vueSDK";

/**
 * 樣版注入function output data json
*/
interface tempObj<T>
{
    /** $t= 樣版object 
     *
     * @returns 渲染樣版物 繼承 main data
    */
    ($t:T):any
}

/**
 * 樣版注入function output string
*/
interface tempStrObj<T>
{
    /** $t= 樣版object */
    ($t:T):string
}

interface loadObj<T>
{
    /**
     * 開始載入 樣版(注入 樣版及數據繼承)
    */
    load:(fun:tempObj<T>)=>void
}

/** head watch title change 物件 */
interface getHeadTitleToFun<T>
{
    /**
     * @param watchKeyName 觸發 T Json 物件資料
     * @param fun 觸發後進入 function(output 更新title資訊)
    */
    (watchKeyName:string,fun:tempStrObj<T>):loadObj<T>
}

interface getHeadTitleObj<T>
{
    /**
     * web title
    */
    getHeadTitle:getHeadTitleToFun<T>
}

/**
 * Icon base64 string
*/
interface getIconGetObj<T>
{
    /**
     * 注入 web icon
    */
    getIcon:(fun:tempStrObj<T>)=>getHeadTitleObj<T>
}

/**
 * Icon base64 string
*/
interface getIconObj<T> extends getIconGetObj<T>
{
    /** 自動起動url history參數程序(default=true) */
    urlHistoryRuning:(ck:boolean)=>getIconGetObj<T>
}


/** psyl Vue DataObj */
interface DataObj
{
    /**
     * app 樣版數據物件
    */
    <T>(mainDataJson:T):getIconObj<T>
}

 /** 初始化 Vue */
export default class CreateVue
{
    /** psyl 物件 */
    private nowVueObj:any;
    /**
     * @param temp 取得樣版路徑(起始渲染樣版)
    */
    constructor(temp:(obj:InITempMap)=>string) 
    {
        /** 樣版路徑名 */
        let catchTempName:string[] = temp(new InITempMap()).split('@');
        /** 起始樣版物件取用 */
        let startTemp:Function = (outhis:any)=>
            new (eval(((catchTempName[0]=='')?'init':catchTempName[0])+"_VuePJ") as any)()[catchTempName[1].replace(/\//g,'_')](outhis);
      
        this.nowVueObj = new (eval("psylVue") as any)(startTemp);
    }

    /**
     * screen view setting
     * @param viewPort meta tag default("width=device-width, initial-scale=1.0, user-scalable=no")
     * @returns CreateVue
     */
    setMetaViewport = (content?:string)=>
    {
        if(content!=null && content!=undefined)//setting viewport
            pb.el.tag("head").at(0).name("viewport").at(0).get.setAttribute("content",content);
        
        return {
            getData:<T>(mainDataJson:any)=>this.getData<T>(mainDataJson)
        };
    }

    /** add 自定義指令 
     * @param name 指令名
     * @returns CreateVue
    */
    addCommand = (name:string,fun:(dir:vueDirectiveEvt)=>void)=>
    {
        var getCommand = new vueDirectiveEvt(name);
        fun(getCommand);
        getCommand.toRegister();//註冊物件
        return this;
    }

    /**
     * app 樣版數據物件
     * @returns CreateVue
    */
    getData:DataObj=(mainDataJson:any)=> this.nowVueObj.getData(mainDataJson);
}

