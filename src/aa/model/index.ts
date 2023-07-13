import indexVueTemp from '../view/index_VueTemp';
import {jObj,jObjInterface} from '../../models/vueSDK';

let $t:indexVueTemp;
export default class index
{
    constructor($tObj:indexVueTemp) 
    {
        $t = $tObj;//model 進入樣版
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