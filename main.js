let colors = [];
let w = 1500;
let h = 500;
let cellSize;
let fr = 2;
let [x,y]=[w/2,20];
let t = null;
let count =0;
let curr=null;
let searched;
let searching;
// Other functions like initializeGenerations(), findNextGen(), getRuleSet(), drawGen(), etc. should follow here

function setup() {
    totalGens = Math.floor(h / cellSize);
    createCanvas(w, h);
    background(200);
    //frameRate(fr);
    //console.log(t.search(7).toString())
    //console.log(t.search(5).getMinVal())
    //colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]; // Example colors
}
function mouseClicked() {
    let rnd = Math.round(random(100));
    if(t==null){
        t=new SearchTree(rnd);
        drawTree(t);
        return;
    }
    while(count<100&&t.search(rnd)!=null){
        rnd = Math.round(random(100));
    }
    t.add(rnd);
    drawTree(t);
    count++;
}
function keyPressed(){
    if (key === 's') {
        curr = t;
        if(curr!=null){
            searched = Math.round(random(100));
            searching=true;
        }
    }
}
function draw(){
    if(searching){
        drawSearchText();
        //drawSearch(curr,searched);
    }
}
function drawSearchText(){
    fill(255,30,30);
    rect(10,2,200,30);
    fill(0,0,0);
    textAlign(LEFT,CENTER);
    text("Searching for: "+searched,20,10);
}
function drawSearch(root,n){
    //Todo: add drawSearch
    // background(200);
    // if(n==root.val){
    //     fill(255,30,30);
    //     ellipse(root.pos[0],root.pos[1],30,20);
    //     fill(0,0,0);
    //     textAlign(CENTER,CENTER);
    //     text(root.val,root.pos[0],root.pos[1]);
    // }
    // let q =[];
    // q.push(t);
    // let layer = 0;
    // let h = t.getHeight();
    // while(q.length>0){
    //     let count = q.length;
    //     for(let i=0;i<count;i++){
    //         let temp = q.shift();
    //         if(temp.parent!=null){
    //             line(temp.pos[0],temp.pos[1],temp.parent.pos[0],temp.parent.pos[1]);
    //         }
            
    //         if(temp.left!=null)q.push(temp.left);
    //         if(temp.right!=null)q.push(temp.right);
    //     }
    //     layer++;
    // }
    // q.push(t);
    // layer = 0;
    // while(q.length>0){
    //     let count = q.length;
    //     for(let i=0;i<count;i++){
    //         let temp = q.shift();
    //         ellipse(temp.pos[0],temp.pos[1],30,20);
    //         textAlign(CENTER,CENTER);
    //         text(temp.val,temp.pos[0],temp.pos[1]);
    //         if(temp.left!=null)q.push(temp.left);
    //         if(temp.right!=null)q.push(temp.right);
    //     }
    //     layer++;
    // }
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
            temp.pos=[x+i*60-layer*20-h*15,y+layer*30]
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
            ellipse(temp.pos[0],temp.pos[1],30,20);
            fill(0,0,0);
            textAlign(CENTER,CENTER);
            text(temp.val,temp.pos[0],temp.pos[1]);
            if(temp.left!=null)q.push(temp.left);
            if(temp.right!=null)q.push(temp.right);
        }
        layer++;
    }
    console.log(t.toString());
}