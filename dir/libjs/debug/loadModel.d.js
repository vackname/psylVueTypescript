var importLoad = new oderLoad().run((function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    });
    var __importStar = (this && this.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    define("models/SysConfig_Interface/ajax", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/vueComponentGetPJ", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/ProjectMap/ProjectImportLoadList", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/vueModelsJS", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/ModelsInterface/js", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/vueModelsCss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/ModelsInterface/css", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/importLoad", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("config/interface/publicObjec_Interface", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("config/interface/getPubObject_interface", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/middleWare", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/pb", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/vueComponentImportPJ", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/ProjectMap/ProjectImportList", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/vueComponent", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/JObj", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/SysConfig_Interface/ProjectMap/ProjectList", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var ProjectMap = /** @class */ (function () {
            function ProjectMap() {
                /**  aa 專案 入口  */
                this.aa = 'aa';
                /**  application 入口  */
                this.init = 'init';
            }
            return ProjectMap;
        }());
        exports.default = ProjectMap;
    });
    define("models/SysConfig_Interface/ProjectMap/aa_View", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var aa = /** @class */ (function () {
            function aa() {
                /** Project[aa]->Temp[view/index] */
                this.view_index = 'aa@view/index';
                /** Project[aa]->Temp[view/userset] */
                this.view_userset = 'aa@view/userset';
            }
            return aa;
        }());
        exports.default = aa;
    });
    define("models/SysConfig_Interface/ProjectMap/init_View", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var init = /** @class */ (function () {
            function init() {
                /** Project[init]->Temp[temp/index/foot] */
                this.temp_index_foot = 'init@temp/index/foot';
                /** Project[init]->Temp[temp/index/head] */
                this.temp_index_head = 'init@temp/index/head';
                /**  首頁-入口Body Temp  */
                this.view_index = 'init@view/index';
            }
            return init;
        }());
        exports.default = init;
    });
    define("models/SysConfig_Interface/ProjectMap/MapProject", ["require", "exports", "models/SysConfig_Interface/ProjectMap/aa_View", "models/SysConfig_Interface/ProjectMap/init_View"], function (require, exports, aa_View_1, init_View_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        aa_View_1 = __importDefault(aa_View_1);
        init_View_1 = __importDefault(init_View_1);
        var ViewMap = /** @class */ (function () {
            function ViewMap() {
                /**  aa 專案 入口  */
                this.aa = new aa_View_1.default();
                /**  application 入口  */
                this.init = new init_View_1.default();
            }
            return ViewMap;
        }());
        exports.default = ViewMap;
    });
    define("models/SysConfig_Interface/vueComponentAdd", ["require", "exports", "models/SysConfig_Interface/ProjectMap/ProjectList", "models/SysConfig_Interface/ProjectMap/MapProject"], function (require, exports, ProjectList_1, MapProject_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        ProjectList_1 = __importDefault(ProjectList_1);
        MapProject_1 = __importDefault(MapProject_1);
        /**
          * 注冊樣版端口
         */
        var toComponentObj = /** @class */ (function () {
            function toComponentObj(tempName, $t, vue) {
                this.get$t = $t;
                this.getVue = vue;
                this.getTempName = tempName;
            }
            /**
             * 專案樣版入口 注冊物件
             * @param map 專案 樣版路徑 物件
             * @returns 取得 專案Vue
             */
            toComponentObj.prototype.Project = function (map) {
                this.getVue.Add(map(new ComponentObj(this.get$t).Project));
            };
            /**
              * template 注冊物件
              * @param map 樣版路徑 物件
              * @returns 注冊該樣版
           */
            toComponentObj.prototype.Template = function (map) {
                var toGet$t = this.get$t;
                this.getVue.Add(map(function (Path) {
                    return toGet$t.import.url(Path(new MapProject_1.default()));
                }));
            };
            return toComponentObj;
        }());
        /**
        * 注冊樣版物件 主要 class
        */
        var ComponentObj = /** @class */ (function () {
            /**
             * @param $t 繼承已起用樣版
            */
            function ComponentObj($t) {
                var _this = this;
                /**
                * 專案樣版入口 注冊物件
                * @param ProjectName 專案名
                * @returns 取得 專案Vue
                */
                this.Project = function (ProjectName) {
                    return (eval(ProjectName(new ProjectList_1.default()) + '_mainrunVue.main'));
                };
                /**
                  * template 注冊物件
                  * @param Path 樣版路徑 物件
                  * @returns 注冊該樣版
                  */
                this.import = function (Path) {
                    return _this.get$t.import.url(Path(new MapProject_1.default()));
                };
                this.get$t = $t;
            }
            /**
             * template(需注意為後注入 需再次做動重新渲染) 額外加入新物件(綁定)
             * @param Name 定議註冊樣版 名稱
            */
            ComponentObj.prototype.Extends = function (Name) {
                var vueObj = eval("vueComponent");
                return new toComponentObj(Name, this.get$t, vueObj(this.get$t)
                    .Name(Name)); //宣告樣版名
            };
            return ComponentObj;
        }());
        exports.default = ComponentObj;
    });
    define("models/SysConfig_Interface/JsonInterface/enum", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Enum_view_EnumSample = exports.Enum_EnumSample = void 0;
        /**
         sample enum
         */
        var Enum_EnumSample;
        (function (Enum_EnumSample) {
            /**
            未發佈 */
            Enum_EnumSample[Enum_EnumSample["publsh"] = 0] = "publsh";
            /**
            第二樣本 */
            Enum_EnumSample[Enum_EnumSample["sec"] = 1] = "sec";
        })(Enum_EnumSample || (exports.Enum_EnumSample = Enum_EnumSample = {}));
        /**
         sample enum
         */
        var Enum_view_EnumSample = function (key) {
            switch (key) {
                case "publsh":
                    return "['未發佈','未发布','not of publish','未発表']";
                case "sec":
                    return "['秒','sec','sec','sec']";
            }
            return 'null';
        };
        exports.Enum_view_EnumSample = Enum_view_EnumSample;
    });
    define("models/SysConfig_Interface/JsonInterface/db", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("models/vueSDK", ["require", "exports", "models/SysConfig_Interface/vueComponentAdd", "models/SysConfig_Interface/JsonInterface/enum", "models/SysConfig_Interface/JsonInterface/db"], function (require, exports, vueComponentAdd_1, EnumsAPI, TablesAPI) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Component = exports.TablesAPI = exports.EnumsAPI = exports.getMiddleCode = exports.getMiddle = exports.jObj = exports.importLoad = exports.ajax = exports.pb = void 0;
        vueComponentAdd_1 = __importDefault(vueComponentAdd_1);
        EnumsAPI = __importStar(EnumsAPI);
        TablesAPI = __importStar(TablesAPI);
        exports.EnumsAPI = EnumsAPI;
        exports.TablesAPI = TablesAPI;
        /**
         * public 程序處理
        */
        exports.pb = eval("pb");
        /**
         * ajax
         */
        exports.ajax = eval("ajax");
        /**
         * 系統掛載(公共域物件/載入初始化物件)
         */
        exports.importLoad = eval("importLoad");
        /**
         * libary載入系統
        */
        var jObj = function () { return eval("new Jobj()"); };
        exports.jObj = jObj;
        /**
         * url add middleware
        */
        exports.getMiddle = eval("getMiddleWare");
        /**
         * catch url middleware code
         */
        exports.getMiddleCode = eval("geMiddleWareCode");
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
       */
        function Component($t) {
            var toTemp = new vueComponentAdd_1.default($t);
            return toTemp;
        }
        exports.Component = Component;
    });
    define("config/public", ["require", "exports", "models/vueSDK"], function (require, exports, vueSDK_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        /**
         * 取預設定語系
         */
        var getSysLang = function () {
            /** System language */
            var SysLang = navigator.language.toLowerCase();
            /** 繁中 */
            var nowLangVal = "ch";
            if (SysLang.indexOf("zh-") > -1 || SysLang.indexOf("hk-") > -1) {
                if (SysLang.indexOf("-cn") > -1) { //簡體
                    nowLangVal = "sch";
                }
                else { //繁體
                    nowLangVal = "ch";
                }
            }
            else if (SysLang.indexOf("en-") > -1) { //英語系國家
                nowLangVal = "en";
            }
            else if (SysLang == "ja") { //日語
                nowLangVal = "jp";
            }
            return nowLangVal;
        };
        /**
         * 載入 物件序列化(public 物件)
        */
        var configDataList = /** @class */ (function () {
            function configDataList() {
                var _this = this;
                /**
                 * 載入Libary json/image/語系資訊
                */
                this.inLibary = {
                    config: (0, vueSDK_1.jObj)(),
                    lib: (0, vueSDK_1.jObj)(),
                    lang: ""
                };
                /**
                 * 宣告載入data config & public libary
                 * @param loadFun async 載入 Function(完成載入 /models/jsonDoc/Config [json 檔案] )
                */
                this.setPublic = function (loadFun) {
                    if (_this.inLibary.lang == "") //注入預選語系
                        _this.inLibary.lang = getSysLang();
                    /**
                     * 載入完成計數(共計2)
                    */
                    var loadCount = 0;
                    _this.inLibary.config.load("config." + _this.inLibary.lang, function (e) {
                        loadCount++;
                        if (loadCount == 2)
                            loadFun();
                    });
                    _this.inLibary.lib.loadlib("pub", function (e) {
                        loadCount++;
                        if (loadCount == 2)
                            loadFun();
                    });
                    return _this.inLibary; //生成陣列
                };
            }
            return configDataList;
        }());
        exports.default = configDataList;
        ;
    });
    define("config/loadModel", ["require", "exports", "config/public", "models/vueSDK"], function (require, exports, public_1, vueSDK_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        public_1 = __importDefault(public_1);
        /** 繼承importLoad 物件(importLoad 入口class) */
        function default_1($t) {
            /**
             * 載入 oder
            */
            var configObj = new public_1.default();
            //公共 css
            $t.m.css.sit(function (e) {
                console.log("Model css =>sit_" + e);
                $t.pub = configObj.setPublic(function () {
                    console.log("libary =>init");
                    setTimeout(function () {
                        $t.p.init(function (e3) {
                            console.log("page vue =>init---" + e3);
                            console.warn("在找我/find me？https://psyltw.com/author");
                            if (vueSDK_2.pb.debug) //debug model
                                console.warn("----------runing-debug-model----------");
                        });
                    }, 99);
                });
            });
        }
        exports.default = default_1;
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        if (typeof define.factory !== 'function') {
            return define.factory;
        }
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})().default);
pb.debug = true;
