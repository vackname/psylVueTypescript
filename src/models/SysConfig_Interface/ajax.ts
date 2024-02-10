import GetObj from "./ajax/ajaxGetObj";
import PostObj from "./ajax/ajaxPostObj";
import FileStreamObj from "./ajax/ajaxFileStreamObj";
import JsonObj from "./ajax/ajaxJsonObj";
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
    postGzip:goApiPost,

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