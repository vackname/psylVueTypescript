import PJImport from "./ProjectMap/ProjectImportList";
import mImport from "./ModelsInterface/js";
import cssImport from "./ModelsInterface/css";


interface templateProject
{
    /** create template name(註冊渲染樣版名) */
    Name:(name:string)=>template,
}

/** 樣版注冊開始渲染 */
export interface template
{
    /** 加入 template 物件 project=eval("this['projectName'].main")、eval()*/
    Add:<T1,T extends ThisImport<T1>>(obj:templateObj<T1,T>|ThisImport<any>)=>void,
}
/**
 * 已渲染成功Vue 樣版名
*/
interface ExistVue
{
    [name:string]:string
}
//------------------- importLoad model -start
/** 載入專案 */
interface importPJ extends PJImport
{

}

/** models sdk 夾 */
interface models
{
    /** css 載入 ex importLoad.[cssName]((e:string)=> {}) */
    css:cssImport,
    /** model 載入 importLoad.[ModelName]((e:string)=> {}) */
    js:mImport,
}

/** importLoad Obj */
interface toImport<T1>
{
    /** include project template  
     * @param path template file=[project name]@[path]   ex "@temp/MGPDS/gift"、  js file= [path] ex "@t/model/jsmodel"
    */
    url:<T extends ThisImport<T1>>(path:string)=>templateObj<T1,T>

    /** models sdk 夾 */
    m:models

    /** project 夾載入 importLoad.[ProjectName]((e:string)=> {}) */
    p:importPJ

    /** 開始載入樣版 (temp=>function)
     * @param fun 開始載入樣版階段 (註冊載入樣版後運行function)
     */
    toLoad:(fun?:Function)=>void
}

//------------------- importLoad model -end

/**
 *(T1=專案入口 最高層級樣版) vue this 內import 注入功能 備註:model js 只能取 project 本身
*/
export interface ThisImport<T1>
{
    /** include project template  
     * @param path template file=[project name]@[path]   ex "@temp/MGPDS/gift"、  js file= [path] ex "@t/model/jsmodel"
    */
    import:toImport<T1>,

    /** 當前已曾經渲染完成 樣版名 */
    v:ExistVue,

    /** 主要專案層樣版物件 */
    pj:T1
}

/** (T1=專案入口 最高層級樣版) template format(psyl vue) */
export interface templateObj<T1,T extends ThisImport<T1>>
{
    /** template 繼承 參數
     * @param json json 參數 與 vue template data bind)
     */
    exportVue:<T extends ThisImport<T1>>(json:any)=>templateObj<T1,T>,
    
    /** 注入樣版source物件 */
    vue:T
}

/**
 * template 載入
*/
export interface vueComponent
{
    /** tamp this */
    <T>($t:T):templateProject
}

/**
 * vueModel 樣版初始化 階段(起動渲染生命周期)
 */
interface vueModeInit<T>
{
    /**
     * @param $t VueTemplate<T?> 樣版 extends
     */
    ($t:T):void
}


/**
 * vueModel 偵聽參數get/set渲染 function
 */
interface vueModelWatchFun
{
    /**
     * @param value 當前變動參睥
     * @param oldValue 未變動前參數
    */
    <T>(value:T,oldValue?:T):void;
}

/** 程序初始化完成(生命周期) */
interface vueModelCompleted<T,T1>
{
    /**
     * @param $t VueTemplate<T?> 樣版 extends
     * @param tscModel 載入 匹次 model 物件
     */
    ($t:T,tscModel:T1):void
}

/** 載入子樣版(生命周期) 陣列*/
export interface vueModelTempLI
{
    [name:string]:templateObj<any,ThisImport<any>> | ThisImport<any>
}

/** 載入子樣版(生命周期) */
interface vueModelTemp<T>
{
    /**
     * @param $t VueTemplate<T?> 樣版 extends
     */
    ($t:T):vueModelTempLI
}

/**
 * vueModel 偵聽渲染參數get/set
 */
interface vueModelWatch
{
    [name:string]:vueModelWatchFun
}

/**
 * vueModel get/set 運算 function
 */
interface vueModeMethods
{
    [name:string]:Function
}

/**
 * vueModel funcFilter 過濾字符
 */
interface vueModeFfuncFilterli
{
    <T>(value:any):T
}

/**
 * vueModel funcFilter 過濾字符
 */
interface vueModeFfuncFilter
{
    [name:string]:vueModeFfuncFilterli
}

/**
 * vueModel funcFilter 過濾字符
 */
interface vueModeFfuncFilterFun<T>
{
     /**
     * @param $t VueTemplate<T?> 樣版 extends
     */
     ($t:T):vueModeFfuncFilter
}

/**
 * 自動 注入 $m mark(temp使用)
*/
interface vueModelToModelMark
{
    [name:string]:any
}

/** vue methods */
interface vueMethods<T>
{
    ($t:T):vueModeMethods
}

export interface vueModel<T1,T2,T3>
{
    /** 樣版繫結數量 json 物件 */
    data?:T1,
    /** 樣版初始化階段(生命周期) */
    init?:vueModeInit<T2>,
    /** 偵聽渲染參數get/set */
    watch?:vueModelWatch,
    /** 過慮字符 */
    funcFilters?:vueModeFfuncFilterFun<T2>,
    /** typescript 注入取用匹次載入model 路徑,建議使用於(動畫類) animate model (tscM class)  ex:["modelAnimate/index"]*/
    tsc?:Array<string>,
    /** javascript/source 物件 model 注入路徑 (自動注入 this.$m[....])*/
    model?:vueModelToModelMark,
    /** 程序初始化完成(生命周期) */
    completed?:vueModelCompleted<T2,T3>,
    /** 載入子樣版(生命周期) */
    temp?:vueModelTemp<T2>
    /** vueModel get/set 運算 function/methods */
    action?:vueMethods<T2>
}

/** controllers 數據取用層級 */
export interface vueColModel<T1,T2,T3> 
{
    /** 樣版繫結數量 json 物件 */
    data?:T1,
    /** 樣版初始化階段(生命周期) */
    init?:vueModeInit<T2>,
    /** 偵聽渲染參數get/set */
    watch?:vueModelWatch,
    /** 過慮字符 */
    funcFilters?:vueModeFfuncFilterFun<T2>,
    /** typescript 注入取用匹次載入model 路徑,建議使用於(動畫類) animate model (tscM class) ex:["modelAnimate/index"]*/
    tsc?:Array<string>,
    /** javascript/source 物件 (自動注入 this.$m[....])*/
    model?:vueModelToModelMark,
    /** 程序初始化完成(生命周期) */
    completed?:vueModelCompleted<T2,T3>,
}
