import jObjM from "./JObj";

/** 預設值程序設定設定 */
interface defaultColum
{
    <T>():T
}

/** 欄位 驗證型態 */
interface PropsColum
{
    /** 參數容許 型態 */
    type: Object | String | Number | Boolean | (StringConstructor|NumberConstructor|BooleanConstructor|ObjectConstructor)[],
    /** 預設參數設定 */
    default?: any | defaultColum,
    /** 傳入參數必為 指定 type, default=false=不啟用  */
    required?: boolean,
    /** 驗證參數 */
    validator?:<T>(value:T)=>boolean
}


/** 承接參數 */
interface PropsObj
{
    [name:string]:PropsColum
}

interface methodsObj
{
    [name:string]:Function
}


/** 共用 組件 component */
interface pubComponent<T>
{
    /** 註冊 外部繼承 變數 */
    props?: PropsObj | Array<string>,
    /** 組件 get/set 數據 */
    data?:T,
    /** html string */
    template:string,
    /** 運算程序 */
    methods?:methodsObj
}

/** 註冊 組件程序 */
export default interface pubFunComponent
{
    /** 
     * @param tempName 樣版框架名 ex <sample />
     * @param program 註冊運行程序
     */
    <T>(tempName:string,program:pubComponent<T>):void
}