function character(name,strength,health){

    this.name = name;
    this.strength = strength;
    this.health = health;

    this.attackBtn = document.querySelector(`#${this.name}-attack`);
    this.healthBtn = document.querySelector(`#${this.name}-make-health`);
    this.progress = document.querySelector(`.${this.name}-health span`);
    this.alive = document.querySelector(`#${this.name}-alive`);
}

character.prototype.attack = function(opponent){
    
    if(opponent.health > 0){
        opponent.health -=  this.strength;
        opponent.progress.style.width = `${opponent.health}%`;

        if (opponent.health <= 0) {
            opponent.attackBtn.remove();
            opponent.healthBtn.remove();
            opponent.alive.innerHTML = `${opponent.name} is dead`;
        }
    }
    
}

character.prototype.status = function(){
    console.log(`Name : ${this.name}`);
    console.log(`Streangth : ${this.strength}`);
    console.log(`Health : ${this.health}`);
}

character.prototype.makeHealth = function(){
    if (this.health < 100){
        this.health +=10;
        if (this.health > 100){
            this.health = 100;
        }
        this.progress.style.width = `${this.health}%`;

        
    }
}

let naruto = new character("naruto",10,100);
let sasuki = new character("sasuki",13,100);

naruto.attackBtn.addEventListener('click',function(){
    naruto.attack(sasuki);
})

naruto.healthBtn.addEventListener('click',function(){
    naruto.makeHealth();
})

sasuki.attackBtn.addEventListener('click',function(){
    sasuki.attack(naruto);
})

sasuki.healthBtn.addEventListener('click',function(){
    sasuki.makeHealth();
})