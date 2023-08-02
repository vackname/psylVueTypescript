import {pb,importLoad} from "../../../models/vueSDK";

/** temp this */
let $t:any | undefined;
/** psyl public api */
/** psyl ajax api */
/** class this */
let self:model;
/** example model item1 */
export default class model{
    constructor($tObj:any) 
    {
        $t = $tObj;
        self = this;
    }

    testFun = (test:boolean)=>
    {
        return test;
    };
};

