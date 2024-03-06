//Create a dog object that has four properties and three methods

function WhichPuppers(breed, color, furLength, temperment){
    this.breed = breed
    this.color = color
    this.furLength = furLength
    this.temperment = temperment
    this.bark = function(){
        console.log('WOOF WOOFFFFFF')
    }
    this.jump = function(){
        console.log('hop hop')
    }
    this.fetch = function(){
        console.log('zoomie zoooooOooom!')
    }
};

let diego = new WhichPuppers('dalmation', 'spotted', 'short', 'hyper')
let frankie = new WhichPuppers('doodle', 'golden', 'long curly', 'chaotic')
let leon = new WhichPuppers('sheppard', 'brown', 'coarse', 'chill')
