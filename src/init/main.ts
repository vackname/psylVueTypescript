import {mainData} from "./main_VueTemp";
import {importLoad} from "../models/vueSDK";
import CreateVue from "../models/SysConfig_Interface/psylVueTsc";

/** 當下網址路徑 */
var spUrl:string = window.location.pathname;

new CreateVue(temp=>temp.view_index)
    .getData<mainData>({
        init:{//共用資訊
            pub:importLoad.pub,
            page:"index",
            urlName:((spUrl.split('/').length>=2)?spUrl.split('/')[1]:""),
            spUrl:spUrl,
        }
    })
    .getIcon(($t)=>//注入網頁icon
        $t.init.pub.lib.src('inlayout.ico'))
    .getHeadTitle("init.page",//資料切換觸發 key
    ($t)=>//browser page html title name
        $t.init.pub.config.get("title")+"-"+$t.init.pub.config.get("page")[$t.init.page])//html title name
    .load(($t)=>{
        return {
            main:$t.init//注入共用入口點數據(繼承)
        };
});

/** application 入口 */
export default undefined;//初始化不需要輸出樣版 object