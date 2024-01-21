# psyl build(Docker version前/後端整合型前端-開發工具)
### 建置啟動環境  docker-compose --compatibility up -d
### 起用指令集 node psyl
### 起用指令集後 node psyl -> psyl -h 啟用幫助
### 其它備註
- dir = build web 夾(release/debug model)
- src = psyl 前端開發資料夾

## 開發工具特性
- 1.技術特性擁有加速分散式演算封裝技術
- 2.builde release (web server)離散載入source 功能，減化不必要時機取用功能資源
- 3.builde release (web server)封裝離散圖檔一次性載入技術及後端共構圖檔集中演算
- 4.builde release (web server)分散開發之css/html/scss 可以選擇性使用html標籤<builde>true</build>封裝至專案，優化多次性載入之不正當性
- 5.deverloper 共用自定義組件Component 為extendsComponent之開發自動化命名及可不使用props，自動化繼承
- 6.deverloper 樣版組件 可不使用props自動化承繼承，並擁有import 分散式載入及樣版靜態繼承之涵數exportVue
- 7.deverloper CreateVue涵數 整合 首頁自動化生成網頁標籤、自定義指令集共構html element動化特效涵數使用
- 8.deverloper 擁有架構化MVVM及數據分類並與特效動化共構開發式架構、interface強調註解(強固maintain時期)
- 9.deverloper 底層為為Javascript，減化過多不必要之source code封裝
- 10.docker for web name，即為web 前端站台並已建置伺服使用之所需緩存技術之標準

### dir/imageSet.json = 設定 web 靜態路徑(匹次/合拼載入)
- 示例
``` 
{
    "APIName": "imgprotalindex",//API Name
    "MaxSize": 66667,//分割檔上限 2MB 為單次上限(建議)
    "FilePath": "protal"//真轉file
}
```
## 開發需知
### src/config 環境設定初始設定夾
- 開發內容 js 檔將會自動整並 build 為 一個 class 物件
- (開發時機 importLoad 所有資源共享物件 起源夾)
示例 souce code
- 1. loadModel.js = 為載入運行程序入口(必須存在)
- 2. public.js = 建置 function class 被取用使用(不一定存在/或另多命名)

### src/init web 起始渲染入口專案夾
- 可於此 資料夾或其它專案 引用 importLoad.p.[專案名] 載入其它專案夾，再進此過載入口
- 示例 html 取用樣版名 'Management'
```
    $t.import.p.Management((re)=>
    {//載入專案
            Component($t)
            .Extends("aaTemp")//宣告樣版名
            .Project(map=>map(Name=>Name.aa)).toLoad();
    });
```
### src/models 擴充 模組 說明
- 以資料夾為單位為一個模組、或單檔js
- 開發 可經由 importLoad.m.js 載入起用程序、importLoad.m.css 模組樣式載入

### src/models 開發框架 引入說明
- src/models/SysConfig_interface 開發 框架 SDK 資源檔
- src/models/vueSDK.ts = 引入 開發框架物件入口

### src/models/SysConfig_Interface/JsonInterface 共用 intface 類 資料夾
- 指令 psyl tscdb [password]，起用後注入 psyl 後端程序 class/enum inteface(共構開發)
- 開發取用-後端enum                ->  import {EnumsAPI} from ''./models/vueSDK';
- 開發取用-後端DB-Table/API Format ->  import {TablesAPI} from ''./models/vueSDK';

### Libary&Document/libary 靜態圖檔
- build 時機 將會自動 以資料夾 單位 封裝 整拼為一個載入資源
- 開發 可經由 jObj().loadlib(....) 控制載入時機及取用
- 取用物件 示例 jObj().loadlib(...).src("/dd.jpeg")

### Libary&Document/jsonDoc 文檔/多過語系/環境資料 json 文件 擴充 模組
- 開發  經由 jObj().load(...) 控制載入時機及取用
- 取用物件 示例 jObj().load(...).get("testJson")

### 專案 開發框架
- controllers(數據處理分類模組)及view(樣版渲染及特效動畫層) => 同名檔為構件渲染框架

### Html/html css bundel
- release html 封裝至專案(不離散)(預設定離散資料)
```<bundle>true</bundel>```