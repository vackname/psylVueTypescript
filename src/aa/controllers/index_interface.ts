interface user
{
    /** 數字陣列 */
    list:Array<number>,
    load:string
}

interface data
{
    /** user 數據 */
    user:user
}

export default interface index{
    data:data
}