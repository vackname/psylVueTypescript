import {importLoad} from '../../models/vueSDK';
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
        lib:importLoad.pub.lib,
        data:{
            user:{
                list:[1,2,3],
                load:''
            }
        }
    },
    completed:($t,tscAry)=>
    {
        $t['$m'] = new toModel($t) //注入model
    },
} as vueModelControllers<indexData,indexVueTemp>;
