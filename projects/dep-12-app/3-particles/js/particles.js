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
        console.log(dy);
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