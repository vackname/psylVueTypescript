/** url add middleware*/
export interface runFUnction
{
    /** @param fun ($t_app=vue bind html(#app)->this(root))js function convert to string */
    (fun:string):void
}

/** url catch url middleware code */
export interface runFUnctionStr
{
    /** @param fun ($t_app=vue bind html(#app)->this(root))js function convert to string */
    (fun:string):String
}
 