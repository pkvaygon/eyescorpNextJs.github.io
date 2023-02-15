import React, { useEffect, useRef } from 'react';


const CanvasText = () => {
    let mouse = {
        x: undefined,
        y: undefined,
        radius: 200,
    };
    const mouseMove = (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    };
    const canvasText = useRef(null);
    useEffect(() => {
        const canvas = canvasText?.current;
        const ctxC2 = canvas.getContext('2d'); 
        console.log(window.innerWidth, '&', window.innerHeight);
        // alert( Math.min(window.screen.availWidth, window.innerWidth))
        // ctxC2.canvas.width =  Math.min(window.screen.availWidth, window.innerWidth) - 18;
        ctxC2.canvas.width =  730;
        ctxC2.canvas.height = window.innerHeight ;
        let adjustX = -10;
        let adjustY = -30;
        let TextRaf, TextOn = false;
    
        let particleText = [];
    
        ctxC2.fillStyle = 'white';
        ctxC2.font = '12px Verdana'; //Verdana Silkscreen
        ctxC2.fillText('EyesCorp', 20,60,canvas.width);
        // ctxC2.strokeStyle = 'white';
        // ctxC2.strokeRect(0,0,100,100);
        const textCoordinates = ctxC2.getImageData(0,0,200,100);
    
        canvas.addEventListener('mouseover', () =>{
            window.addEventListener('mousemove', mouseMove);
        });
        canvas.addEventListener('mouseout', () => {
            window.removeEventListener('mousemove', mouseMove);
            mouse.x = undefined;
            mouse.y = undefined;
        });
        class TextParts {
            constructor(x,y, size) {
                this.x = x;
                this.y = y;
                this.baseX = Math.floor(x);
                this.baseY = Math.floor(y);
                this.size =  3;
                this.density = (Math.random() * 30) + 1; // moving speed
            }
            draw(){
                ctxC2.fillStyle = 'white';
                ctxC2.beginPath();
                ctxC2.arc(this.x,this.y,this.size, 0,Math.PI * 2);
                ctxC2.closePath();
                ctxC2.fill();
            }
            update(){
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                if (distance < mouse.radius){
                    // this.size = 5;
                    ctxC2.fillStyle = 'black'
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    this.size = 3;
                    if (this.x !== this.baseX){
                        let dx = this.x - this.baseX;
                        this.x -= dx/10;
                    }
                    if (this.y !== this.baseY){
                        let dy = this.y - this.baseY;
                        this.y -= dy/10;
                    }
                }
            }
        }
    
    
        function initText() {
            particleText = [];
            for (let y = 0, y2 = textCoordinates.height; y < y2 ; y++){
                for (let x = 0, x2 = textCoordinates.width; x < x2; x++){
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){
                        let  positionX = x + adjustX;
                        let  positionY = y + adjustY;
                        particleText.push(new TextParts(positionX * 10,positionY * 10));
                    }
                }
            }
        }
        initText();
    
    
        function animateText() {
            if (TextOn){
                ctxC2.clearRect(0,0,canvas.width,canvas.height);
                for (let i = 0; i < particleText.length; i++){
                    particleText[i].draw();
                    particleText[i].update();
                }
                connectText();
                TextRaf = requestAnimationFrame(animateText);
            }
    
        }
        animateText();
        let stopTextAnimate;
        canvas.addEventListener("mouseout", () => {
            stopTextAnimate = setTimeout(() => {
                TextRaf = window.cancelAnimationFrame(TextRaf);
                TextOn = false;
            }, 1250);
        });
        canvas.addEventListener("mouseover", () => {
            TextRaf = window.requestAnimationFrame(animateText);
            TextOn = true;
            clearTimeout(stopTextAnimate)
        });
    
        function connectText() {
            let opacityValue = 1;
            for (let a = 0; a < particleText.length; a++){
                for (let b = a; b < particleText.length; b++){
                    let dx = particleText[a].x - particleText[b].x;
                    let dy = particleText[a].y - particleText[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
    
                    if (distance < 10){
                        // opacityValue = 0.1;
                        opacityValue = 1 - (distance/23);
                        ctxC2.strokeStyle = 'rgba(155,125,55,' + opacityValue + ')';
                        ctxC2.lineWidth = 1;
                        ctxC2.beginPath();
                        ctxC2.moveTo(particleText[a].x, particleText[a].y);
                        ctxC2.lineTo(particleText[b].x, particleText[b].y);
                        ctxC2.stroke();
                    }
                }
            }
        }
    },[])


    return (<canvas ref={canvasText} id="canvasText"></canvas>);
};

export default CanvasText;