class SearchTree{
    /* #private */Val;
    /* #private */Left;
    /* #private */Right;
    constructor(val,l=null,r=null){
        this./* #private */Val=val;
        this./* #private */Right=r;
        this./* #private */Left=l;
    }
    Add=(val)=>{
        if(val==this./* #private */Val)return;
        if(val<this./* #private */Val){
            if(this./* #private */Left!=null){
                this./* #private */Left.Add(val);
                return;
            }
            else{
                this./* #private */Left=new SearchTree(val);
                return;
            }
        }
        if(val>this./* #private */Val){
            if(this./* #private */Right!=null){
                this./* #privateR */ight.Add(val);
                return;
            }
            else{
                this./* #private */Right=new SearchTree(val);
                return;
            }
        }
    }
    Remove = (parent)=>{
        parent
    }
}