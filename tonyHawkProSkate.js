//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(speed, jump, balance, specialSkill, phrase){
    this.speed = speed
    this.jump = jump
    this.balance = balance
    this.specials = specialSkill
    this.phrase = phrase
    this.failedSkill = function(){
        console.log("Wahooo!!!")
    }
    this.landedSkill = function(){
        console.log("RIGHTTTT ON BB!")
    }
    this.trashTalk = function(){
        console.log("Do you even text your mom at night bro?")
    } 
    this.passingRiders = function(){
        console.log(`This be ${phrase}!!`)
    }
}

let kabobJoball = new ProSkater('fast', 'high', 'poor', 'kick flip', 'kalabungaa')
let JamieDanielle = new ProSkater('fast', 'high', 'high', 'being perfect', 'slayyyy monay')
