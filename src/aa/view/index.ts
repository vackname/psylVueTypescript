import {vueComponentModel,Component,task,pb,ajax,sleep} from '../../models/vueSDK';
import * as indexView from './index_Interface';
import indexVueTemp from './index_VueTemp';
task.Factory.StartNew(obj=>{
    obj.resolve("HIHI --First");
}).ContinueWith({
    SuccessEvent:obj=>
    {
        console.log(obj.ObjectVal);
        setTimeout(()=>{
            obj.resolve("testBranch-HIHI --Sec");
        },2000);
        var obj1 = task.Factory.StartNew(obj_1=>{
            setTimeout(()=>
            obj_1.resolve("testBranch-obj1")
            ,3000);
        })

        var obj2 = task.Factory.StartNew(obj_1=>{
            obj_1.resolve("testBranch-obj2");
        });

        var obj3 = task.Factory.StartNew(obj_1=>{
            setTimeout(()=>
            obj_1.resolve("testBranch-obj3"),6000);
        }).ContinueWith({SuccessEvent:obj_1=>{
            console.log(obj_1);
        } });

        return [obj3,task.Factory.StartNewMultipleToFirst([obj1,obj2]).ContinueWith({SuccessEvent:obj_1=>{
            console.log(obj_1);
        } })]
    }
}).ContinueMultipleToFirstForWith({
    SuccessEvent:val=>{
        console.log("成功 branch");
        console.log(val);
    },CatchEvent:val=>{
        console.log("失敗 branch");
        console.log(val);
    }
}).ContinueWith({
    SuccessEvent:val=>{
        console.log("--Sec")
        console.log(val.ObjectVal);
    },

}).ContinueMultipleToFirstForWith({
    SuccessEvent:val=>{
        console.log("成功2 branch");
        console.log(val);
    },CatchEvent:val=>{
        console.log("失敗2 branch");
        console.log(val);
    }
}).AbortAfter(3000);

interface ddaa
{
    format:string,
    callback:string
}
(async ()=>{
    await sleep(3000);
    console.log("hihi sleep");
})();

ajax.Form.Delete("/testUrl").InputUrlIDForString("dda").InputUrlIDForNumber(127283).head({"a":1})
.OverTimeEvent(1000,errMes=>{

}).toResponse(e=>{

}).ContinueWith<string,any>({
    SuccessEvent:function(valObj){
        var obj = ajax.Form.Get("https://api64.ipify.org").head({}).input<ddaa>({format:"json",callback:"toPsylIP6"})
        .toSubmit()
        .ContinueWith({
            SuccessEvent:(valObj2) =>{
                valObj.resolve(valObj2.ObjectVal);

                var objTask = task.Factory.StartNew((valobj3)=>{
                    setTimeout(()=>{
                    valobj3.resolve("vva obj");
                    },4000);
                });

                objTask.ContinueCatch(rjVal=>{
                
                }).AbortAfter(3000);

                var MultipleObj = task.Factory.StartNewMultipleToFirst([objTask,task.Factory.StartNew((valobj3)=>{
                    setTimeout(()=>{ valobj3.resolve("vva Array 2") },2000);
                }),task.Factory.StartNew((valobj3)=>{
                    setTimeout(()=>{ valobj3.resolve("vva Array 3") },5000);
                })]).ContinueWith({
                    SuccessEvent:valObj=>{
                        console.log(valObj.ObjectVal);
                    }
                });//多個 task 取第一個 Event事件

                var objTask2 = task.Factory.StartNew((valobj3)=>{
                    setTimeout(()=>{
                    valobj3.resolve("vva obj2");
                    },4000);
                });

              return [MultipleObj,objTask2];
    
            },
            CatchEvent:valObj2=>{
                
            }
        });

        obj.ContinueCatch(rjVal=>{
            valObj.reject(rjVal);
        });

        return obj;
    }
}).ContinueCatch(rjVal=>{
    //error
}).AbortAfter(3000);

var ajaxObj1=ajax.Form.Get("https://api64.ipify.org").head({}).input<ddaa>({format:"json",callback:"toPsylIP6"})
.OverTimeEvent(1000,(e)=>{
    console.log("i am overtime");
}).Finally(e=>
    {
        console.log("hihi my finally");
    })
.Catch((e)=>{
    console.log(e);
})
.Fail(()=>{
    console.log("hihi my fail");
});

setTimeout(()=>{
    ajaxObj1.toSubmit().ContinueWith<string,any>({
        SuccessEvent: val=>{
            console.log("setTimeout awaitCatch");
            console.log(val.ObjectVal);
            return ajaxObj1.toStringResponse(res=>{

            });
        }
    });
},3000);

ajaxObj1.toResponse<ddaa>((e)=>{
    
}).ContinueWith<ddaa,any>({
    SuccessEvent: val=>{
        console.log("awaitThen");
        console.log(val.ObjectVal);
        ajaxObj1.toStringResponse(res=>{
            val.resolve("OK");
        }).ContinueCatch(rjVal=>{
            val.reject(rjVal);
        });
        
    }
}).ContinueCatch(rjVal=>{
    console.log("awaitCatch");
    console.log(rjVal);
    ajaxObj1.toStringResponse(res=>{

    }).ContinueCatch(rjVal2=>{
        console.log("awaitCatch2");
        console.log(rjVal2);
    });
});

let toRun:boolean = true;

let toRun2:boolean = true;

new Promise((rv,rj)=>{

    return new Promise((rv,rj)=>{

    }).then(rvVal=>{

    }).catch(rjVal=>{
       
    });
});

let toTask = task.Factory.StartNew(valObj=>{
    valObj.resolve("HIHI Task");
}).ContinueWith<string,any>({
    SuccessEvent: valObj=>{
        valObj.ObjectVal
        console.log(valObj.ObjectVal);
        setTimeout(()=>{ valObj.resolve("setTimeOut 1s") },1000);
    },
}).ContinueWith<string,any>({
    SuccessEvent: valObj=>{
    console.log(valObj.ObjectVal);
    setTimeout(()=>{ valObj.resolve("setTimeOut 2s") },2000);
    }
}).ContinueWith<string,any>({
    SuccessEvent: valObj=>{
        console.log(valObj.ObjectVal);
        ((toRun)?valObj.resolve("then true"):valObj.reject("then false"));

        let toTask2 = task.Factory.StartNew(valObj=>{
            valObj.resolve("HIHI Task _2");
        }).ContinueWith<string,any>({
            SuccessEvent: val=>{
                setTimeout(()=>{ valObj.resolve("setTimeOut 1s _2") },1000);
            },
            CatchEvent: val=>
            {

            }
        }).ContinueWith<string,any>({
            SuccessEvent: valObj=>{
                console.log(valObj.ObjectVal);
                setTimeout(()=>{ valObj.resolve("setTimeOut 2s _2") },2000);

                toTask.Abort();
            }
        }).ContinueWith<string,any>({
            SuccessEvent: valObj=>{
                console.log(valObj.ObjectVal);
                ((toRun)?valObj.resolve("then true _2"):valObj.reject("then false _2"));
            }
        })
        .ContinueWith<string,any>({
            SuccessEvent: valObj=>{
                console.log(valObj.ObjectVal);
                setTimeout(()=>{ valObj.resolve("setTimeOut 3s _2") },3000);
            }
        }).ContinueWith<string,any>({
            SuccessEvent: valObj=>{
                console.log(valObj.ObjectVal);
                setTimeout(()=>
                ((toRun2)?valObj.resolve("then2 true _2"):valObj.reject("then2 false _2")),1000);
            }
        });
        return toTask2;
    }
})
.ContinueWith<string,any>({
    SuccessEvent: valObj=>{
        setTimeout(()=>{ valObj.resolve("setTimeOut 3s") },3000);
    }
}).ContinueWith<string,any>({
    SuccessEvent: valObj=>{
        console.log(valObj.ObjectVal);
        setTimeout(()=>
        ((toRun2)?valObj.resolve("then2 true"):valObj.reject("then2 false")),1000);
    }
});

console.log(toTask.getPromise());

toTask.ContinueCatch<string>(rjVal=>{
    console.error("取得錯誤");
    console.error(rjVal);
}).AbortAfter(7100);

setTimeout(()=>{
toTask.Abort();
},3100);

export default {
    data:{
        show:false,
    },
    props:
    {
        aaa:{
            type: String,
            default:()=>"未放數據",
            required: true,
           /* validator:(value:string)=>
            {
                console.log("aa project 取得驗證參數("+(value!="ok")+")");
                return value!="ok";
            }*/
        }
    } as indexView.Props,
    init:($t)=>{
        setTimeout(()=>{//3sec 後出現 open userset.html button
            $t.show=true;
        },3000);
        $t.data.user.load = '';//controller data
        $t.import.toLoad();
    },
    temp:($t)=>{
        
        /*init temp() run to temp*/
        return {
            userpage : Component($t).import(path=>path.aa.view_userset)
                .exportVue({//bind data for user page
                    main: $t.main,
                    data: $t.data.user
                })
        };
    },
    completed:($t)=>
    {
        pb.el.delay(e=>
        e.id("aa_index_closBt")//close userset.html button
        .frame(el=>el.animate({"duration":1,"delay":1,"count":1},
        {//旋轉震動
            "0%":{"transform": "rotateY(0deg)"},
            "60%":{"transform": "rotateY(-90deg)"},
            "62%":{"transform": "rotateY(80deg)" },
            "90%":{"transform": "rotateY(-90deg)" },
            "97%":{"transform": "rotateY(80deg)" },
            "98%":{"transform": "rotateY(-180deg)" },
            "100%":{"transform": "rotateY(-180deg)"},
        }),
        4//特效時長範圍
        ,"closeBt"//frame flagname
        ).toFrame("closeBt",3)//反回frame flagname = closeBt
        .remove()//移除動畫
        ,0.05);//延遲50ms 進入
        /*init temp() run to completed or not exist init*/
    }
} as vueComponentModel<indexView.Data,indexVueTemp>;
