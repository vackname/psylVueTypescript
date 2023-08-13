import * as ajaxM from "./SysConfig_Interface/ajax";
import importLoadM from "./SysConfig_Interface/importLoad";
import pubObj from '../config/interface/getPubObject_interface';
import urlHistoryM from "./SysConfig_Interface/urlHistory";
import pbM from "./SysConfig_Interface/pb";
import * as vueComponentM from "./SysConfig_Interface/vueComponent";
import pubComponentObj from "./SysConfig_Interface/publicComponent";
import jObjM from "./SysConfig_Interface/JObj";
import addComponent from "./SysConfig_Interface/vueComponentAdd";
import * as EnumsAPI from "./SysConfig_Interface/JsonInterface/enum";
import * as TablesAPI from "./SysConfig_Interface/JsonInterface/db";

/** public sdk */
export const pb:pbM = eval("pb");

/** ajax */
export const ajax:ajaxM.ajax = eval("ajax");

/** ajax interface */
export interface ajaxInterface extends ajaxM.ajax {}

/** add browser history(sorce code) */
export const urlHistory:urlHistoryM = eval("urlHistory");

/** ajax join function */
export interface asyncGetInterface extends ajaxM.asyncGet {}

/** ajax join function(僅限 Get) */
export interface asyncToGetInterface extends ajaxM.asyncToGet{}

/** system public to object/init(function) interface */
export interface importLoadObjInterface extends pubObj,importLoadM{}

/** system public to object/init(function) */
export const importLoad:importLoadObjInterface = eval("importLoad");

/** libary to load system */
export var jObj =():jObjInterface=> eval("new Jobj()");

/** libary to load system fro Interface */
export interface jObjInterface extends jObjM { }

 /** (T=專案入口 最高層級樣版) 專案內 子樣版 this 內import 注入功能 備註:model js 只能取 project 本身 */
 export interface VueTemplate<T> extends vueComponentM.ThisImport<T>
 {
    /** 無註解 自動注入 class/model */
    [name:string]:any
 }

 /** 專案入口 main 樣版 */
 export interface MainVueTemplate extends vueComponentM.templateObj<any,vueComponentM.ThisImport<any>>{}

 /** 樣版 model T1=data class,T2=VueTemplate<T?> ,T3=tscModel 樣版 extends */
 export interface vueComponentModel<T1,T2,T3> extends vueComponentM.vueModel<T1,T2,T3> {}

 /** 載入子樣版(生命周期) 陣列 templateObj<T1,T> */
 export interface vueModelTemp extends vueComponentM.vueModelTempLI {}

 /** controllers 數據取用層級 T1=data class,T2=VueTemplate<T?> ,T3=tscModel */
 export interface vueModelControllers<T1,T2,T3> extends vueComponentM.vueColModel<T1,T2,T3>{}

 /*
後端 enum 實例 ->webapi for net core 
  /// <summary>
  /// 示範 enum
  /// </summary>
	public enum EnumSample
	{
        [DBEnumViewName("[\"未發佈\",\"未发布\",\"not of publish\",\"未発表\"]", Description: "未發佈")]
        publsh = 0,

        [DBEnumViewName("[\"秒\",\"sec\",\"sec\",\"sec\"]", Description: "第二樣本")]
        sec =1,
	}
*/
/** API Enum 定義(API sorce)*/
export {EnumsAPI};

/*
後端 表class 實例 ->webapi for net core 
	/// <summary>
	/// 示範Table
	/// </summary>
	public class UserClient
	{
        [DBM(JsonName = "name_val", TSMark = "名稱")]
        public string Name { set; get; }
		[DBAPI(JsonName = "age_val",TSMark = "年齡")]
		public int Age { set; get; }

        [JsonExtensionData]
        public Dictionary<string, object> extend { set; get; } = new Dictionary<string, object>();
    }
*/
/** database/table/API interface 定義(API sorce)*/
export {TablesAPI};
/* 後端 DB enum ->webapi for net core 注冊
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
      if (env.IsDevelopment())
      {
          app.UseDeveloperExceptionPage();
      }

      app.UseResponseCompression();

      app.UseHttpsRedirection();
      app.UseResponseCaching();
      app.UseRouting();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      endpoints.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}"));

      VueBundleMiddleWare.GetTsc = () =>
        new List<tscObj>() {
                      JObj.getTsc<UserClient>("sample table"),
        };

      VueBundleMiddleWare.GetEnumTsc = () =>
        new List<enumTscObj>() {
                      JObj.EnumTscList<EnumSample>("sample enum"),
        };

      VueBundleMiddleWare.tscOutPutPw = "samplePassword";//載入 /src/config/interfaceJsonHost docker get.web.com 
      //密鑰 載入webapi專案 enum/table 註解及物件 指令示例: psyl tscdb samplePassword

      app.UseMiddleware<VueBundleMiddleWare>();
  }
*/

 /**
 * 樣版物件注冊
 * @param $t 繼承已起用樣版
 * @returns 注冊樣版物件 主要 class
*/
export function Component<T extends vueComponentM.ThisImport<any>>($t:T)
{
  var toTemp = new addComponent($t);
  return toTemp;
}

/** v-loadimg for load image 指令 */
export interface Commandloadimg
{
    /** source libary */
    source:jObjInterface,
    /** show/hidden image */
    show:boolean,
    /** image src */
    src:string
}

/**
 * 自定義組件(共用域 component)
*/
export interface PublicComponentInterface<T2> extends pubComponentObj<T2>{ }