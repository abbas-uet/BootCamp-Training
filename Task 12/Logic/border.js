const Border=function(x,y,w,h,type){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
    this.type=type;
    this.draw=function(){
        switch (type) {
            case 1:
                borderImage=new Image();
                borderImage.src="Logic/border.jpg";
                context.drawImage(borderImage,this.x,this.y,this.width,this.height);
                break;
            case 2:
                borderImage=new Image();
                borderImage.src="Logic/friut.png";
                context.drawImage(borderImage,this.x,this.y,this.width,this.height);
                break;
            default:
                break;
        }
    }
};