import GetObj from "./ajax/ajaxGetObj";
import PostObj from "./ajax/ajaxPostObj";
import FileStreamObj from "./ajax/ajaxFileStreamObj";
import JsonObj from "./ajax/ajaxJsonObj";
import DeleteObj from "./ajax/ajaxDeleteObj";
/**
 * @param url Api 路經
*/
type goApiPost = (url:string)=>PostObj;

/**
 * 僅限 get 使用
 * @param url Api 路經
*/
type goApiGet = (url:string)=>GetObj;

/**
 * 僅限 get  stream file 使用
 * @param url Api 路經
*/
type goApiFileStream= (url:string)=>FileStreamObj;

/**
 * 僅限 json body 使用
 * @param url Api 路經
*/
type goApiJson = (url:string)=>JsonObj;

/**
 * url ID key Put作動 ajax
 */
interface urlIDPutObj
{
    /** Set PKey */
    InputID:(valID:any)=>JsonObj
}

/**
 * url ID key Delete 作動 ajax
 */
interface urlIDDeleteObj
{
    /** Set PKey */
    InputID:(valID:any)=>DeleteObj
}

/**
 * 僅限 PUT json body 使用
 * @param url Api 路經
*/
type goApiJsonToUrlIDPut = (url:string)=>urlIDPutObj;

/**
 * 僅限 DELETE json body 使用
 * @param url Api 路經
*/
type goApiJsonToUrlIDDELETE = (url:string)=>urlIDDeleteObj;


export interface ajax
{
    /**
     *  ajax get
    */
    get:goApiGet,

    /**
     * ajax stream for File
    */
    getFileStream:goApiFileStream,

    /**
     *  ajax post to gZip data
    */
    postInputToGzip:goApiPost,
    
    /** remove source */
    delete:goApiJsonToUrlIDDELETE,

    /**
     * ajax Replace (Create or Update)
     */
    put:goApiJsonToUrlIDPut,

    /**
     *  ajax post
    */
    post:goApiPost,

    /**
     *  ajax json body post
    */
    Json:goApiJson,

    /**
     *  ajax post file
    */
    file:goApiPost,
}