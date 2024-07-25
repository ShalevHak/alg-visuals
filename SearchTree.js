class SearchTree{
    // /* #private */val;
    // /* #private */left;
    // /* #private */right;
    // parent;
    constructor(val,layer=1,parent=null,l=null,r=null/* ,x,y */){
        this./* #private */val=val;
        this./* #private */right=r;
        this./* #private */left=l;
        this.parent=parent;
        this.pos=[]
        this.layer=layer;
        this.index=null;

    }
    bfsIndexing=()=>{
        let q =[];
        q.push(this);
        while(q.length>0){
            let count = q.length;
            for(let i=0;i<count;i++){
                let temp = q.shift();
                temp.index=i;
                if(temp.left!=null)q.push(temp.left);
                if(temp.right!=null)q.push(temp.right);
                str +=` ${temp.val} `;
            }
        }
    }
    add=(val)=>{
        if(val==this./* #private */val)return;
        if(val<this./* #private */val){
            if(this./* #private */left!=null){
                this./* #private */left.add(val);
                return;
            }
            else{
                this./* #private */left=new SearchTree(val,this.layer+1,this);
                return;
            }
        }
        if(val>this./* #private */val){
            if(this./* #private */right!=null){
                this./* #privateR */right.add(val);
                return;
            }
            else{
                this./* #private */right=new SearchTree(val,this.layer+1,this);
                return;
            }
        }
    }
    getMinVal=()=>{
        if(this==null)return null;
        if(this.left==null&&this.right==null)return this.val;
        if(this.left==null)return this.right.getMinVal();
        return this.left.getMinVal();
    }
    search=(val)=>{
        if(val==this./* #private */val)return this;
        if(val<this./* #private */val){
            if(this./* #private */left!=null){
                return this./* #private */left.search(val);
            }
            return null;
        }
        if(val>this./* #private */val){
            if(this./* #private */right!=null){
                return this./* #privateR */right.search(val);
            }
            return null;
        }
    }
    // remove = (val)=>{
    //     let del = this.search(val);
    //     if(this==null||del==null)return;
    //     if(this.left!=null&&this.right!=null)return;
    //     if(this.right!=null){
    //         this.val=this.left.getMinVal();
    //         this.left.remove(this.val);
    //         return;
    //     }
    //     if(this.left!=null){
    //         this.val=this.right.getMinVal();
    //         this.right.remove(this.val);
    //     }
    // }
    getHeight=()=> {
        if (this === null) return 0;
        if(this.left==null&&this.right==null) return 1;
        if(this.left==null) return 1 + this.right.getHeight();
        if(this.right==null) return 1 + this.left.getHeight();
        return 1 + Math.max(this.left.getHeight(), this.right.getHeight());
      }
    toString =()=>{
        let str="tree: \n";
        let q =[];
        q.push(this);
        while(q.length>0){
            let count = q.length;
            for(let i=0;i<count;i++){
                let temp = q.shift();
                if(temp.left!=null)q.push(temp.left);
                if(temp.right!=null)q.push(temp.right);
                str +=` ${temp.val} `;
            }
            str+='\n';
        }
        return str;
    }
}