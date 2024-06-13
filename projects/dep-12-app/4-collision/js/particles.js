import {cursorElm} from './cursor.js'

for (let i = 0; i < 50; i++) {

    const particle = document
        .createElement('div');

    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    particle.style.backgroundColor = `rgb(${r},${g},${b})`;
    particle.style.position = 'absolute';

    const size = 20 + Math.random() * 30;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const left = (innerWidth - size) * Math.random();
    const top = (innerHeight - size) * Math.random();
    particle.style.left = `${left}px`;
    particle.style.top = `${top}px`;
    particle.style.borderRadius = `${Math.random() * 100}%`;
    particle.style.transform = `rotate(${Math.random() * 360}deg)`

    document.body.append(particle);

    let dx = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);
    let dy = 8 + Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);

    setInterval(() => {
        const left = particle.offsetLeft + dx;
        const top = particle.offsetTop + dy;

        const x1 = cursorElm.offsetLeft + cursorElm.offsetWidth / 2;
        const y1 = cursorElm.offsetTop + cursorElm.offsetHeight / 2;

        const x2 = left + particle.offsetWidth / 2;
        const y2 = top + particle.offsetHeight / 2;

        const yDiff = y2 - y1;
        const xDiff = x2 - x1;

        const d = Math.abs(Math.hypot(yDiff, xDiff));
        const r1 = cursorElm.offsetWidth / 2;
        const r2 = particle.offsetWidth / 2;

        if (d <= (r1 + r2)){
            dx = -dx;
            dy = -dy;
            return;
        }

        if (top + particle.offsetHeight >= innerHeight || top <= 0) {
            dy = -dy;
            return;
        }
        if (left + particle.offsetWidth >= innerWidth || left <= 0) {
            dx = -dx;
            return;
        }
        particle.style.left = `${left}px`;
        particle.style.top = `${top}px`;
    }, 50);

}