import tscM from "../../models/SysConfig_Interface/tscModel/aa";
import {vueModelControllers,VueTemplate,MainVueTemplate} from '../../models/vueSDK';

//data bind (self.data)
export default {
    data:{
        subject:"myUserset"
    }
} as vueModelControllers<any,VueTemplate<MainVueTemplate>>;
