const Player=function (x,y) {
    this.x=x;
    this.y=y;
    this.width=20;
    this.height=20;

    this.xspeed=0;
    this.yspeed=0;
    this.maxspeed=3;
    this.friction=0.6;
    this.active=true;

    this.step=function () {
        if(this.active){

            if(leftKey&&rightKey ||!leftKey&&!rightKey){
                this.xspeed*=this.friction;
            }else if(leftKey){
                this.xspeed--;
            }else if(rightKey){
                this.xspeed++;
            }

            if(upKey){
                this.yspeed-=1;
            }
            if(!upKey){
                this.yspeed+=1;
            }
            //correct the Speed
            if(this.xspeed>this.maxspeed){
                this.xspeed=this.maxspeed;
            }else if(this.xspeed<-this.maxspeed){
                this.xspeed=-this.maxspeed;
            }
            if(this.yspeed>=this.maxspeed){
                this.yspeed=this.maxspeed;
            }else if(this.yspeed<=-this.maxspeed){
                this.yspeed=-this.maxspeed;
            }



            //handling the values to be not in decimals
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed);
              } else {
                this.xspeed = Math.ceil(this.xspeed);
              }
              if (this.yspeed > 0) {
               this.yspeed = Math.floor(this.yspeed);
              } else {
                this.yspeed = Math.ceil(this.yspeed);
              }


              //handling the Rectangles Collision
              let horizontalRect = {
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height
              }
              //Vertical Collision Rect
              let verticalRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
              }

            for(let i=0;i<borders.length;i++){
                let borderRect={
                    x:borders[i].x,
                    y:borders[i].y,
                    width:borders[i].width,
                    height:borders[i].height
                }
                if(checkInterSection(horizontalRect,borderRect)){
                    if(borders[i].type===2){
                        borders.splice(i,1);
                        score++;
                        htmlScore.innerHTML=score;
                    }
                    this.xspeed=0;
                }
                if(checkInterSection(verticalRect,borderRect)){
                    if(borders[i].type===2){
                        borders.splice(i,1);
                        score++;
                        htmlScore.innerHTML=score;
                    }
                    this.yspeed=0;
                }
            }
            this.x+=this.xspeed;
            this.y+=this.yspeed;
        }
    };


    this.draw=function() {
        playerImage=new Image();
        playerImage.src="Logic/player.png";
        context.drawImage(playerImage, this.x,this.y,this.width,this.height)
    };
}