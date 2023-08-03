import {elOnly} from "./animate";
/** 綁定參數 format */
interface binding<T>
{
    /** 指令名，不包括 前綴  ex v-test:hello='runFunction()'  參數='test'*/
    name:string,
    /** 指令綁定 value/function ex v-test:hello='runFunction()' 參數取得運算=runFunction()*/
    value:T,
    /** 綁定值 表達式或變量名 ex v-test='runFunction()' 參數='runFunction'*/
    expression:string,
    /** 綁定指令參數 ex v-test:hello='runFunction()' 參數='hello=' */
    arg:string
    /** 取修飾詞  ex v-test:hello.foo.bar='runFunction()' 參數 json={ foo: true, bar: true } */
    modifiers:any
}


/** 綁定參數 format */
interface binding_update_componentUpdated<T> extends binding<T>
{
    /** 指令改綁前參數 */
    oldValue:T
}

/** 調用 function */
interface vueDirectFun<T>
{

    /**
     * 調用 function
     * @param el html element
     * @param binding 綁定參數詳細資訊
     * @param vnode 編緝生成虛擬節點
    */
    (el:elOnly, binding?:binding<T>, vnode?:Array<string>):void
}

/** 調用 function */
interface vueDirectFun_update_componentUpdated<T>
{

    /**
     * 調用 function
     * @param el html element
     * @param binding 綁定參數詳細資訊
     * @param vnode 編緝生成虛擬節點
     * @param oldVnode 上一個虛擬節點
    */
    (el:elOnly, binding?:binding_update_componentUpdated<T>, vnode?:Array<string>,oldVnode?:Array<string>):void
}

/** 建置 自定義function */
interface addDvFun_format
{
    (command:string,evt:string,fun:Function):void
}

/** add 自定義 function */
var addDvFun:addDvFun_format = eval("psylAddVueD");

/** 全域式自定義指令 */
export default class vueDirectiveEvt
{
    /** 只調用一次，指令第一次綁定到元素時調用，啟用函數可以定義一個在綁定時執行一次初始化 ex v-foot:aa.dd.cc='okFunction()'
     * @param command 指令名(需為 lowercase)
     * @param fun 調用 function
     */
    bind = <T>(command:string,fun:vueDirectFun<T>)=>addDvFun(command,'bind',fun);

    /** 初始綁定元素插入父節點調用 (注入於元素 ex: v-foucs)
     * @param command 指令名(需為 lowercase)
     * @param fun 調用 function
     */
    inserted = <T>(command:string,fun?:vueDirectFun<T>)=> addDvFun(command,'inserted',((fun!=null && fun!=undefined)?fun:function(){ }));

    /** 被綁定元素所在的模板更新時調用 (可以忽略不必要的模板更新) ex v-foot:aa.dd.cc='okFunction()'
     * @param command 指令名(需為 lowercase)
     * @param fun 調用 function
     */
    update = <T>(command:string,fun:vueDirectFun_update_componentUpdated<T>)=>addDvFun(command,'update',fun);

    /** 被綁定元素所在模版完成一次更新周期調用 ex v-foot:aa.dd.cc='okFunction()'
     * @param command 指令名(需為 lowercase)
     * @param fun 調用 function
     */
    componentUpdated = <T>(command:string,fun:vueDirectFun_update_componentUpdated<T>)=>addDvFun(command,'componentUpdated',fun);

    /** 只調用一次，指令與元素解綁時機調用 ex v-foot:aa.dd.cc='okFunction()'
     * @param command 指令名(需為 lowercase)
     * @param fun 調用 function
     */
    unbind = <T>(command:string,fun:vueDirectFun<T>)=>addDvFun(command,'unbind',fun);
}