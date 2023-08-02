import {VueTemplate} from '../../models/vueSDK';
import * as mainTemp from '../main_VueTemp';
import * as indexData from './index_Interface';
import index_col_temp from '../controllers/index_interface';

/** index teamp */
export default interface index extends index_col_temp,indexData.index,indexData.indexTemp,VueTemplate<mainTemp.main>
{

}