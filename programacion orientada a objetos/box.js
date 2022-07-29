
class Box{

constructor(x,y,w,h,newColor){
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.color=newColor;
}

display(){
   fill(this.color);
   rect(this.x, this.y, this.w, this.h); 
}


}