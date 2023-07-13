import * as vueComponent from "./vueComponent";
/**
 * load async function
*/
interface AsyncFun
{
    /**
     * @param e type =(complete = 載入成功！)(fail = 載入失敗！)
    */
    (e:string):void
}


/**
 * load async function
*/
interface AsyncJsFun<T>
{
    /**
     * @param e T model
    */
    (e:T):void
}


/**
 *  project name(function)
*/
interface objPJFun{
    /**
     * @param fun load async function
    */
    (fun:AsyncFun):void;
}


/** 載入專案 */
interface importPJ
{
    [objName:string]:objPJFun
}


/**
 *  models name(function)
*/
interface objJsFun{
    /**
     * @param fun load async function
    */
    <T>(fun:AsyncJsFun<T>):void;
}

interface importJs
{
    [objName:string]:objJsFun
}

/**
 *  file css name(function)
*/
interface objCssFun{
    /**
     * @param fun load async function
    */
    (fun:AsyncFun):void;
}

interface importCss
{
    [objName:string]:objCssFun
}

/** models sdk 夾 */
interface models
{
    /** css 載入 ex importLoad.[cssName]((e:string)=> {}) */
    css:importCss,
    /** model 載入 importLoad.[ModelName]((e:string)=> {}) */
    js:importJs,
}

/**
 * 載入model、project model 、css
*/
interface importLoadObj
{
    /** models sdk 夾 */
    m:models
    /** project 夾載入 importLoad.[ProjectName]((e:string)=> {}) */
    p:importPJ
}

/**
 * 載入model、project model 、css
*/
export default interface importLoad extends importLoadObj
{
    /** 任何經由 Config 注入之model */
    [name:string]:any
}