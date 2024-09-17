import { useEffect, useId, useRef } from 'react';

export default function AsynxWave(params: any) {
    const id = useId();
    const requestRef = useRef<number | null>(null); // Stores requestAnimationFrame reference
    const tRef = useRef(0); // Stores the time variable to persist across renders

    useEffect(() => {
        const c = document.getElementById(id) as HTMLCanvasElement | null;
        if (!c) return;
        
        const w = c.width;
        const h = c.height;
        const u = Math.min(w, h);
        const ctx = c.getContext("2d")!;
        const steps = 20;
        const padding = params.padding !== undefined ? params.padding : 0.2;
        const f = (1 - padding) * u / 360;
        const o = padding * u / 2;

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.beginPath();
            ctx.lineWidth = 0.1 * u;
            ctx.lineCap = "round";
            ctx.strokeStyle = params.color || getComputedStyle(c!).getPropertyValue('--p');
            ctx.globalAlpha = 0.3;

            let y;
            for (let x = 0; x <= 360 / steps; x++) {
                y = 180.0 - Math.sin(0.75 * x * steps * Math.PI / 180 + tRef.current / 100) * 120;
                ctx.lineTo(y * f + o, x * steps * f + o);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.globalAlpha = 0.85;

            for (let x = 0; x <= 360 / steps; x++) {
                y = 180.0 - Math.cos(0.75 * x * steps * Math.PI / 180 + tRef.current / 100) * 120;
                if (x === 0) {
                    ctx.moveTo(y * f + o, x * steps * f + o);
                } else {
                    ctx.lineTo(y * f + o, x * steps * f + o);
                }
            }
            ctx.stroke();
            ctx.closePath();
            tRef.current++; // Increment time

            requestRef.current = window.requestAnimationFrame(draw);
        }

        draw();

        return () => {
            if (requestRef.current) {
                window.cancelAnimationFrame(requestRef.current); // Cleanup animation frame
            }
        };
    }, [params.color, params.padding]); // Dependencies for re-running effect if color/padding changes

    return (
        <canvas 
            id={id} 
            width="60" 
            height="60" 
            style={{ aspectRatio: 1 }} 
            {...params} 
        ></canvas>
    );
}



