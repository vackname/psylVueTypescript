import {mainData} from "./main_VueTemp";
import {importLoad} from "../models/vueSDK";
import CreateVue from "../models/SysConfig_Interface/psylVueTsc";

/** 當下網址路徑 */
var spUrl:string = window.location.pathname;

new CreateVue(temp=>temp.view_index)
.addCommand("focus",dir=>//初始化時機元素 focus
    dir.add(b=>b.inserted<string>((el,binding)=>{//html element v-focus 指令
        el.delay(1)//延遲起動指令防止其它奪取 focus指令目標 
        .style({"opacity":"0"})//物件樣示
        .frame(toel=>{
            toel.get.focus();//element foucs
            toel.animate({"duration":6,"delay":0.03,"count":1},
            {//漸顯示
                "0%":{"opacity":"0.1"},
                "50%":{"opacity":"0.5"},
                "100%":{"opacity":"1"}
            });
        },1)
        .remove();//移除style
    }))
)
.addCommand("desbind",dir=>//指令物件 資訊
    dir.add(b=>b.bind<string>((el, binding, vnode)=>{//html 觸發調用一次
        var s = JSON.stringify
        el.get.innerHTML =
        'name: '       + s(binding?.name) + '<br>' +
        'value: '      + s(binding?.value) + '<br>' +
        'expression: ' + s(binding?.expression) + '<br>' +
        'argument: '   + s(binding?.arg) + '<br>' +
        'modifiers: '  + s(binding?.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode??[]).join(', ');
    }))
)
.addCommand("upm",dir=>//input 資訊
    dir.add(b=>b.inserted<string>((el,binding)=>{//初始化元素
        el.delay(1).style({"background-color":"#333333"})
        .animate({"duration":0.2,"delay":0.03,"count":1},
            {//閃黑橘
                "0%":{"background-color":"#333333"},
                "100%":{"background-color":"#FF8800"}
            }
        ).delay(1).remove();
    }))
    .add(b=>b.update<string>((el, binding, vnode,oldVnode)=>{//value 被觸發變動
        el.style({"opacity":"0"})//物件樣示
        .animate({"duration":0.2,"delay":0.03,"count":1},
        {//漸顯示
            "0%":{"opacity":"0.1"},
            "100%":{"opacity":"1"}
        }).remove();
    }))
)
.getData<mainData>({
    init:{//共用資訊
        page:"",
        urlName:((spUrl.split('/').length>=2)?spUrl.split('/')[1]:""),
        spUrl:spUrl,
    }
})
//.urlHistoryRuning(false) 預設定 起用url 運行程序
.getIcon(($t)=>//注入網頁icon
    importLoad.pub.lib.src('inlayout.ico'))
.getHeadTitle("init.page",//資料切換觸發 key
($t)=>//browser page html title name
importLoad.pub.config.get("title")+"-"+importLoad.pub.config.get("page")[$t.init.page])//html title name
.load(($t)=>{
    return {
        main:$t//注入共用入口點數據(繼承)
    }
});

/** application 入口 */
export default undefined;//初始化不需要輸出樣版 object