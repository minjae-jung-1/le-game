class dKeys{
    constructor(){
    }
     draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

            ctx.beginPath();  
            //t1
            ctx.moveTo(75, 70);
            ctx.lineTo(100, 95);
            ctx.lineTo(100, 45);
            //t2
            ctx.moveTo(150, 45);
            ctx.lineTo(175, 70);
            ctx.lineTo(150, 95);
            //t3
            ctx.moveTo(100,45);
            ctx.lineTo(150,45)
            ctx.lineTo(125,24)
            //t4
            ctx.moveTo(100,95);
            ctx.lineTo(150,95);
            ctx.lineTo(125,24);

            ctx.fill();
          
        }
    }
}
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.lineWidth = 10;

// ctx.strokeRect(75, 140, 150, 110);

let directions = new dKeys();

directions.draw();
