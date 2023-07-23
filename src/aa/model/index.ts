import indexVueTemp from '../view/index_VueTemp';
import {jObj,jObjInterface,TablesAPI,EnumsAPI} from '../../models/vueSDK';

/** 注入 webapi tables class 示例*/
class userClient implements TablesAPI.UserClient
{
    name_val:string = "my psyl";
    age_val:number = 3;
}

let $t:indexVueTemp;
export default class index
{
    constructor($tObj:indexVueTemp) 
    {
        $t = $tObj;//model 進入樣版

        console.log("---web api demon start---");
        console.log("table---");
        console.log(new userClient());
        console.log("enum value---");
        console.log(EnumsAPI.Enum_EnumSample.publsh);
        console.log("enum string data---");
        console.log("-取得enum key string");
        /** 取得enum key string */
        let enumToStr = EnumsAPI.Enum_EnumSample[EnumsAPI.Enum_EnumSample.publsh];
        console.log(enumToStr);
        console.log("-額外定議 enum string data");
        console.log(EnumsAPI.Enum_view_EnumSample(enumToStr));
        console.log("---web api demon end---");
    }

    /** open user page */
    page=()=>{
        $t.data.user.load = 'userpage';
        $t.show = false;
    };

    close=()=>{
        $t.data.user.load = '';
        $t.show = true;
    };

    /** son obj */
   config:jObjInterface = jObj();
}