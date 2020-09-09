class Form {
    constructor(){
        this.input= createInput('Name');
        this.button= createButton('Join');
        this.greeting= createElement('h3');
        this. Rbutton= createButton('Reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2, displayHeight/2-30);
        this.button.mousePressed (() => {
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount++;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-40 , displayHeight/2-80);
        });
        this.Rbutton.position(displayWidth-15, displayHeight-700)
        this.Rbutton.mousePressed(()=>{
          game.update(0);
          player.updateCount(0);
        });
    }
    displayRank (){
        clear();
        background(finishline);
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        var message= createElement('h3');
        message.html("Congratualation!! "+ player.name+ " on reaching the end of the race! Check your ranking below");
        message.position(displayWidth/2-40,displayHeight/2-80);
        var message1= createElement('h3');
        message.html("You rank is " + player.rank);
        message.position(displayWidth/2-40,displayHeight/2-40);
    }
}