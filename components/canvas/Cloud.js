import React, { useEffect, useRef } from 'react';

const Cloud = () => {
    let mouse = {
        x: undefined,
        y: undefined,
        radius: 200,
    };
    const mouseMove = (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    };
    const canvasCloud = useRef(null)
    useEffect(() => {
        const canvas = canvasCloud.current;
        const ctxC1 = canvas.getContext('2d');
        ctxC1.canvas.width = window.innerWidth;
        ctxC1.canvas.height = window.innerHeight - 200;
        let cloudRaf, cloudOn = false;
    
        let particleArray = [];
        const colours = [
            // 'white',
            'rgba(255,255,255,0.3)',
            // 'rgba(173,216,230,0.8)',
            // 'red',
            // 'rgba(211,211,211,0.8)',
            // 'black'
        ];
        const maxSize = 20;
        const minSize = 0;
        const mouseRadius = 60;
        
        window.addEventListener('mousemove', mouseMove);
    
        canvas.addEventListener('mouseover', () =>{
            window.addEventListener('mousemove', mouseMove);
        });
        canvas.addEventListener('mouseout', () => {
           window.removeEventListener('mousemove', mouseMove);
            mouse.x = undefined;
            mouse.y = undefined;
        });
    
        class Clouds {
            constructor(x, y, directionX, directionY, size, colour){
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.colour = colour;
            }
        }
        // add draw method to clouds prototype
        Clouds.prototype.draw = function () {
            ctxC1.beginPath();
            ctxC1.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
            // ctxC1.fillRect(this.x, this.y, this.size, this.size);
            // ctxC1.fillStyle = 'black';
            ctxC1.fillStyle = this.colour;
            // ctxC1.strokeStyle = 'red';
            ctxC1.fill();
            // ctxC1.stroke();
        };
        Clouds.prototype.update = function () {
          if (this.x + this.size * 2 > canvas.width ||
              this.x - this.size * 2 < 0 ) {
                this.directionX = -this.directionX
            }
          if (this.y + this.size * 2 > canvas.height ||
              this.y - this.size * 2 < 0 ) {
                this.directionY = -this.directionY
            }
          this.x += this.directionX;
          this.y += this.directionY;
    
          // mouse interactivity
            if (mouse.x - this.x < mouseRadius &&
                mouse.x - this.x > -mouseRadius &&
                mouse.y - this.y < mouseRadius &&
                mouse.y - this.y > -mouseRadius) {
                if (this.size < maxSize) {
                    this.size += 5;
                }
            }
            else if (this.size > minSize){
                this.size -= 0.1;
            }
            if (this.size < 0) {
                this.size = 0;
            }
            this.draw()
        };
        // create clouds array
        function initCloud() {
            particleArray = [];
            for (let i = 0; i < 1000; i++){
                let size = 0;
                let x = (Math.random() * ((innerWidth - size *2) - (size *2)) + size *2 );
                let y = (Math.random() * ((innerHeight - size *2) - (size *2)) + size *2 );
                let directionX = (Math.random() * 0.2) - .1;
                let directionY = (Math.random() * 0.2) - .1;
                let color = colours[Math.floor(Math.random() * colours.length)]
    
                particleArray.push(new Clouds(x, y, directionX, directionY, size, color))
            }
        }
    
        function animateClouds() { // ОПТИМИЗАЦИЯ
            // if (cloudOn){
                cloudRaf = requestAnimationFrame(animateClouds);
                ctxC1.clearRect(0,0,innerWidth, innerHeight);
                for (let i = 0; i < particleArray.length; i++){
                    particleArray[i].update();
                }
            // }
    
        }
        initCloud();
        animateClouds();
        // canvas.addEventListener("mouseover", () => {
        //     cloudRaf = window.requestAnimationFrame(animateClouds);
        //     cloudOn = true;
        // });
        // canvas.addEventListener("mouseout", () => {
        //     window.cancelAnimationFrame(cloudRaf);
        //     cloudOn = false;
        // });
    
        window.addEventListener('resize', () => {
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
           initCloud()
        });
    
      return () => {
        null
      }
    }, [])


    return (<canvas ref={canvasCloud} id="canvasCloud"></canvas>);
};

export default Cloud;