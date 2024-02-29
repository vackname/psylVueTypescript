import {pb,importLoad,task} from "../../../models/vueSDK";
import mainIndexTemp from "../../view/index_VueTemp";

/** temp this */
let $t:mainIndexTemp | undefined;
/** class this */
let self:model;
/** example model item1 */
export default class model{
    constructor($tObj:mainIndexTemp) 
    {
        $t = $tObj;
        self = this;
    }

    run = ()=>
    {
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
    };
};