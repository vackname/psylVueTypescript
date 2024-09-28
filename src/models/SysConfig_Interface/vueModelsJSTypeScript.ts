

/**
 * load async function
*/
interface AsyncJsFun<T>
{
    /**
     * @param e T model
    */
    (e:new () => T):void
}


/**
 *  models name(function)
*/
export default interface objJsFun{
    /**
     * @param fun load async function
    */
    <T>(fun:AsyncJsFun<T>):void;
}