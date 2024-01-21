
/** temp data */
import {VueTemplate} from "../../models/vueSDK";
import * as mainTemp from "../main_VueTemp";
import * as asyncLoadViewData from "./asyncLoadView_Interface";
import asyncLoadView_col_temp from "../controllers/asyncLoadView_Interface";

/** asyncLoadView teamp */
export default interface asyncLoadView extends asyncLoadView_col_temp,asyncLoadViewData.asyncLoadView,asyncLoadViewData.asyncLoadViewTemp,VueTemplate<mainTemp.main>
{
    main:mainTemp.main
}
