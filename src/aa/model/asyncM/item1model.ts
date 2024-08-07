import {pb,importLoad} from "../../../models/vueSDK";
import asyncLoadViewTemp from '../../view/asyncLoadView_VueTemp';

/** temp this */
let $t:asyncLoadViewTemp;
/** class this */
let self:model;
/** example model item1 */
export default class model{
    constructor($tObj:asyncLoadViewTemp) 
    {
        $t = $tObj;
        self = this;
    }

    testFun = (test:boolean)=>
    {
        return test;
    };
};

