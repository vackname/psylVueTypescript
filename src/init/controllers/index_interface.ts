
interface head
{
    /** title */
    headTitle:string,
}

/**
 * data format
 */
export default interface index
{
    /** title */
    title:string,
    /** head 樣版數據 */
    head:head,
    /** 數據 樣版數據 */
    foot:{}
}