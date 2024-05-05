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

/** form for post */
interface ajaxMethodFormPost
{   
    /**
     *  ajax post to gZip input for data (application/x-www-form-urlencoded)
    */
    sendGzip:goApiPost,

    /**
     *  ajax post (application/x-www-form-urlencoded)
    */
    send:goApiPost,
}

/** form */
interface ajaxMethodForm
{   
    /**
     *  ajax get (application/x-www-form-urlencoded)
    */
    Get:goApiGet,

    /** remove source (application/x-www-form-urlencoded)*/
    Delete:goApiJsonToUrlIDDELETE,

    /**
     * ajax Replace (application/x-www-form-urlencoded)(Create or Update)
     */
    Put:goApiJsonToUrlIDPut,

    /** Method Post */
    Post:ajaxMethodFormPost,

    /**
     *  ajax post file (multipart/form-data)
    */
    UploadFile:goApiPost,
}

/** json body */
interface ajaxMethodJson
{
    /** remove source (application/json)*/
    Delete:goApiJsonToUrlIDDELETE,

    /**
     * ajax Replace (application/json)(Create or Update)
     */
    Put:goApiJsonToUrlIDPut,

    /**
     *  ajax (application/json)
    */
    sendGzip:goApiJson,

    /**
     *  ajax (application/json)
    */
    send:goApiJson,
}

export interface ajax
{
    /**
     * ajax stream for File (application/octet-stream)
    */
    Stream:goApiFileStream,
    /**
     * ajax (? / form)
     */
    Form:ajaxMethodForm,

    /**  ajax (application/json) */
    JSON:ajaxMethodJson,
}