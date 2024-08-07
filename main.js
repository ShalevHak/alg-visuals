let colors = [];
let w = 1500;
let h = 1500;
let cellSize;
let fr = 2;
let [x,y]=[w/2,20];
let t = null;
let count =0;
let curr=null;
let searched;
let searching;
let str;
let size = 2;

function setup() {
    createCanvas(w, h);
    background(200);
    frameRate(fr);
}
document.getElementById("search_btn").addEventListener("click",searchOnClick);
function searchOnClick(){
    curr = t;
    if(curr!=null){
        searched =Math.round(random(100));
        searching=true;
        searched=document.getElementById("search_input").value;
        str ="Searching for: "+searched;
    }
}
function keyPressed(){
    let rnd =Math.round(random(100));
    count++;
    searching=false;
    if(t==null){
        t=new SearchTree(rnd);
        return;
    }
    while(count<100&&t.search(rnd)!=null){
        rnd = Math.round(random(100));
    }
    t.add(rnd);
    count++;
}
function draw(){
    if(t==null)return;
    if(searching){
        drawSearchText(str);
        if(str=="Searching for: "+searched) str=drawSearch(curr,searched);
        //drawSearchText(str);
    }
    else{
        drawTree(t);
        drawSearchText("Tree: ");
    }
}
function drawSearchText(str){
    textSize(30)
    fill(255,30,30);
    rect(10,2,300,60);
    fill(0,0,0);
    textAlign(LEFT,CENTER);
    text(str,20,20);
}
function drawSearch(root,n){
    //Todo: add drawSearch
    drawTree(t);
    drawSearchText(str);
    if(root==null){
        return searched+" not found...";
    }
    if(n==root.val){
        textSize(20*size)
        fill(255,30,30);
        ellipse(root.pos[0],root.pos[1],30*size,20*size);
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        text(root.val,root.pos[0],root.pos[1]);
        return "Found "+ searched +"!";
    }
    else if(n<root.val){
        textSize(12*size)
        fill(0,50,255);
        ellipse(root.pos[0]-25*size,root.pos[1],20*size,10*size);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(n,root.pos[0]-25*size,root.pos[1]);
        curr=root.left;
    }
    else{
        textSize(12*size)
        fill(0,255,50);
        ellipse(root.pos[0]+25*size,root.pos[1],20*size,10*size);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(n,root.pos[0]+25*size,root.pos[1]);
        curr=root.right;
    }
    return "Searching for: "+searched;
}
function drawTree(t){
    background(200);
    let q =[];
    q.push(t);
    let layer = 0;
    let h = t.getHeight();
    while(q.length>0){
        let count = q.length;
        for(let i=0;i<count;i++){
            let temp = q.shift();
            temp.pos=[x+(i*60-layer*20-h*15)*size,y+layer*30*size]
            if(temp.parent!=null){
                line(temp.pos[0],temp.pos[1],temp.parent.pos[0],temp.parent.pos[1]);
            }
            
            if(temp.left!=null)q.push(temp.left);
            if(temp.right!=null)q.push(temp.right);
        }
        layer++;
    }
    q.push(t);
    layer = 0;
    while(q.length>0){
        let count = q.length;
        for(let i=0;i<count;i++){
            let temp = q.shift();
            fill(255,255,255);
            ellipse(temp.pos[0],temp.pos[1],30*size,20*size);
            fill(0,0,0);
            textSize(20*size)
            textAlign(CENTER,CENTER);
            text(temp.val,temp.pos[0],temp.pos[1]);
            if(temp.left!=null)q.push(temp.left);
            if(temp.right!=null)q.push(temp.right);
        }
        layer++;
    }
    console.log(t.toString());
}