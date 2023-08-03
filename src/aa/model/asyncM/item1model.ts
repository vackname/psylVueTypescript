import {pb,importLoad} from "../../../models/vueSDK";
import asyncLoadView_VueTemp from '../../view/asyncLoadView_VueTemp';

/** temp this */
let $t:any | undefined;
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

