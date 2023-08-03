import {elAnimateMain} from "./animate";
/**
 * client browser/解析 browser info
*/
interface browser
{
    /** 瀏覽器 */
    browser:string,
    /** 
     * 版本
    */
    version:string,
    /**
     * 系統name
     */
    OS:string,
    /**
     * browser 語系
    */
    lang:string
}

/**
 * 判讀是不是行動裝置 boolean
*/
interface isMobile{
    Android:()=>boolean,
    BlackBerry:()=>boolean,
    iOS:()=>boolean,
    Opera:()=>boolean,
    Windows:()=>boolean,
    any:()=>boolean,
}

/**
 *  vue catch teamp
 */
interface vueProp<T>
{
    /**
     * vue
     * @param map tamp map ex: "a1/b1/c1"
     * @param wait now set wait create tamp 20 ms
    */
    v:<T>(map:string,wait?:number)=>vueProp<T>,
    /**
     * catch tamp this
     * @param fun async this
    */
    async:(fun:(e:T)=>void)=>void,
}

/**
 * browser 解析 format
 */
interface BrowserInfo
{
    /**
     * 語系
    */
    lang:string,
    /**
     * 廠商
    */
    vendor:string,
    userAgent:string,
    /**
     * 版本
    */
    appVersion:string,
    /**
     * os 平台
    */
    platform:string
}

export default interface pb
{
    /** 取得用戶IP */
    clientIP:string,
    /** 判斷是不是為mible */
    isMobile:isMobile,
    /** 是否為Debug 模式 */
    debug:boolean,
    /** 金額三位一點 
     * @param val cash
     * @returns cash ex:1,000
    */
    MoneyFormat:(val:number)=>string,
    /**
     * date to unix
     * @param val date ex:"2000-01-01 18:00:00" or "2000/01/01 18:00:00" 
     * @returns unix time
     */
    unixRe:(val:string)=>number,
    /**
     * unix to date string
     * @param val date unix
     * @returns date to string ex:"2000/01/01 18:00:00" 
     */
    reunixDate:(val:number)=>string,
    /**
     * now unix time(client)
     */
    unixReNow:()=>number,
    /**
     * add cookie
     * @param name cookie name
     * @param value value
     * @param geTimeval life time(unit:1 equals sec)
     */
    LogindoCookieSetup:(name:string, value:string,geTimeval?:number)=>void,
    /**
     * cookie value
     * @param name cookie name
     */
    LogingetCookie:(name:string)=>string,

    /**
     * cookie delete
     * @param name cookie name
     */
    LogindelCookie:(name:string)=>string,

    /**
     * client browser
    */
     browserInfo:(info?:BrowserInfo)=>browser,
     /**
      * base64(support url string) to unzip
      * @param base64Val base64 string
      * @returns string value
      */
     ungzipBase64:(base64Val:string)=>string,

     /**
      * gzip to url  base64 of string
      * @param data string value
      * @returns base64
      */
     gzipBase64:(data:string)=>string,

     /**
      * string to url base64 of string
      * @param data string value
      * @returns base64
     */
     UTF8ToBase64:(data:string)=>string,

     /**
      * base64(support url string) to string
      * @param base64Val base64 string
      * @returns string value
     */
     Base64ToUTF8:(base64Val:string)=>string,
     
     /**
      * html element(css animate)
     */
     el:elAnimateMain,

     /**
      * join json object prototype
      * @param now 被注入 json 物件
      * @param json 取得資料源 物件
     */
     AddPrototype:<T>(now:any,json:any)=>T,
    /**
     * vue
     * @param $t now vue this
     * @param map tamp map ex: "a1/b1/c1"
     * @param wait now set wait create tamp 20 ms
    */
     v:<T>($t:any,map:string,wait?:number)=>vueProp<T>,

}