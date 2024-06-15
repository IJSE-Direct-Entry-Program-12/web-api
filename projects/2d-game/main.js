const characterElm = document
    .querySelector('#character');

await new Promise((resolve)=>{
    document.querySelector("#start-screen > button")
        .addEventListener('click', async ()=>{
            await document.querySelector("html").requestFullscreen({
                navigationUI: 'hide'
            });
            document.querySelector("#start-screen").remove();
            resolve();
        });
});

await new Promise(function (resolve) {

    const images = ['/image/BG.jpg',
        '/image/tile/Tile (1).png',
        '/image/tile/Tile (2).png',
        '/image/tile/Tile (3).png',
        ...Array(10).fill('/image/character')
            .flatMap((v, i) => [
                `${v}/Jump__00${i}.png`,
                `${v}/Idle__00${i}.png`,
                `${v}/Run__00${i}.png`
            ])
    ];
    for (const image of images) {
        const img = new Image();
        img.src = image;
        img.addEventListener('load', progress);
    }

    const barElm = document.getElementById('bar');
    const totalImages = images.length;

    function progress(){
        images.pop();
        barElm.style.width = `${100 / totalImages * (totalImages - images.length)}%`
        if (!images.length){
            setTimeout(()=>{
                document.getElementById('overlay').classList.add('hide');
                resolve();
            }, 1000);
        }
    }
});

let dx = 0;                     // Run
let i = 0;                      // Rendering
let t = 0;
let run = false;
let jump = false;
let angle = 0;
let tmr4Jump;
let tmr4Run;
let previousTouch;

/* Rendering Function */
setInterval(() => {
    if (jump) {
        characterElm.style.backgroundImage =
            `url('/image/character/Jump__00${i++}.png')`;
        if (i === 10) i = 0;
    } else if (!run) {
        characterElm.style.backgroundImage =
            `url('/image/character/Idle__00${i++}.png')`;
        if (i === 10) i = 0;
    } else {
        characterElm.style.backgroundImage =
            `url('/image/character/Run__00${i++}.png')`;
        if (i === 10) i = 0;
    }
}, 1000 / 30);

// Initially Fall Down
const tmr4InitialFall = setInterval(() => {
    const top = characterElm.offsetTop + (t++ * 0.2);
    if (characterElm.offsetTop >= (innerHeight - 128 - characterElm.offsetHeight)) {
        clearInterval(tmr4InitialFall);
        return;
    }
    characterElm.style.top = `${top}px`
}, 20);

// Jump
function doJump() {
    if (tmr4Jump) return;
    i = 0;
    jump = true;
    const initialTop = characterElm.offsetTop;
    tmr4Jump = setInterval(() => {
        const top = initialTop - (Math.sin(toRadians(angle++))) * 150;
        characterElm.style.top = `${top}px`
        if (angle === 181) {
            clearInterval(tmr4Jump);
            tmr4Jump = undefined;
            jump = false;
            angle = 0;
            i = 0;
        }
    }, 1);
}

// Utility Fn (Degrees to Radians)
function toRadians(angle) {
    return angle * Math.PI / 180;
}

// Run
function doRun(left) {
    if (tmr4Run) return;
    run = true;
    i = 0;
    if (left) {
        dx = -10;
        characterElm.classList.add('rotate');
    } else {
        dx = 10;
        characterElm.classList.remove('rotate');
    }
    tmr4Run = setInterval(() => {
        if (dx === 0) {
            clearInterval(tmr4Run);
            tmr4Run = undefined;
            run = false;
            i = 0;
            return;
        }
        const left = characterElm.offsetLeft + dx;
        if (left + characterElm.offsetWidth >= innerWidth ||
            left <= 0) {
            if (left <= 0){
                characterElm.style.left = '0';
            }else{
                characterElm.style.left = `${innerWidth - characterElm.offsetWidth - 1}px`
            }
            dx = 0;
            return;
        }
        characterElm.style.left = `${left}px`;
    }, 20);
}

// Event Listeners
addEventListener('keydown', (e) => {
    switch (e.code) {
        case "ArrowLeft":
        case "ArrowRight":
            doRun(e.code === "ArrowLeft");
            break;
        case "Space":
            doJump();
    }
});

addEventListener('keyup', (e) => {
    switch (e.code) {
        case "ArrowLeft":
        case "ArrowRight":
            dx = 0;
    }
});

const resizeFn = ()=>{
    characterElm.style.top = `${innerHeight - 128 - characterElm.offsetHeight}px`;
    if (characterElm.offsetLeft < 0){
        characterElm.style.left = '0';
    }else if (characterElm.offsetLeft >= innerWidth ){
        characterElm.style.left = `${innerWidth - characterElm.offsetWidth - 1}px`
    }
}

addEventListener('resize', resizeFn);
/* Fix screen orientation issue in mobile devices */
screen.orientation.addEventListener('change', resizeFn);

characterElm.addEventListener('touchmove', (e)=>{
    if (!previousTouch){
        previousTouch = e.touches.item(0);
        return;
    }
    const currentTouch = e.touches.item(0);
    doRun((currentTouch.clientX - previousTouch.clientX) < 0);
    if (currentTouch.clientY < previousTouch.clientY) doJump();
    previousTouch = currentTouch;
});

characterElm.addEventListener('touchend', (e)=>{
    previousTouch = null;
    dx = 0;
});