import {mainData} from '../main_VueTemp';

export interface dataFormat
{
    layout:string
}

/** exportVue 注入數據端 */
export interface index{
    main:dataFormat,//data注入模板
    datamain:mainData
}

export interface indexTemp
{
    /** show/hidden 樣版 */
    show:boolean,
}