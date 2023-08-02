import tscM from "../../models/SysConfig_Interface/tscModel/aa";
import indexData from './index_interface';
import indexVueTemp from '../view/index_VueTemp';
import {vueModelControllers} from '../../models/vueSDK';
import toModel from '../model/index';

/**  
 * data bind (self.data)
*/
export default {
    init:($t)=>
    {

    },
    data:{
        data:{
            user:{
                list:[1,2,3],
                load:''
            }
        }
    },
    completed:($t)=>
    {
        $t['$m'] = new toModel($t) //注入model
    },
} as vueModelControllers<indexData,indexVueTemp,tscM>;
