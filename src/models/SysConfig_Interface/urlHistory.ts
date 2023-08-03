/** get function to code value*/
interface getCode
{
    /**
     * runing source code
     * @param funStr runing source function
     * @returns code value
    */
    (funStr:string):string
}

/** function to code value add browser history*/
interface addHistory
{
    /**
     * runing source code
     * @param funStr runing source function
    */
    (funStr:string):void
}

/** add browser history(sorce code) */
export default interface urlHistory
{
    /** runing code function */
    runing:()=>void,
    /** get function to code value*/
    get:getCode,
    /** add browser history(get function) */
    add:addHistory
}