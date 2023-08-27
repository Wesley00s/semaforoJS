const lightARed = document.querySelector('.lightARed');
const lightAYellow = document.querySelector('.lightAYellow');
const lightAGreen = document.querySelector('.lightAGreen');

const lightBRed = document.querySelector('.lightBRed');
const lightBYellow = document.querySelector('.lightBYellow');
const lightBGreen = document.querySelector('.lightBGreen');

const lightPRed = document.querySelector('.lightPRed');
const lightPGreen = document.querySelector('.lightPGreen');

const phases = document.querySelector(".phases");
const msg = document.querySelector('.pedestrian');

const btn = document.querySelector('.btn');
let control = false;

const toggleBlinking = (element, duration) => {
    let isVisible = true;
    const blinkInterval = setInterval(() => {
        if (isVisible) {
            element.classList.remove('visible');
            element.classList.add('hidden');
        } else {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
        isVisible = !isVisible;
    }, 250); // Piscar a cada 0.25 segundo

    setTimeout(() => {
        clearInterval(blinkInterval);
        element.classList.remove('hidden');
        element.classList.add('visible');
    }, duration);
};

const progressBar = document.querySelector('.progress-bar');

const timer = (seg) => {
    let i = seg;
    const interval = 1000; // Intervalo de atualização da barra (1 segundo)
    const totalDuration = seg * 1000; // Duração total em milissegundos

    const updateProgressBar = () => {
        const remainingTime = i * 1000; // Tempo restante em milissegundos
        const progress = ((totalDuration - remainingTime) / totalDuration) * 100;
        progressBar.style.width = `${progress}%`;

        i--;

        if (i >= 0) {
            setTimeout(updateProgressBar, interval);
        }
    };

    updateProgressBar();
};

const toggleLights = () => {
    
    setTimeout(() => {
        timer(15);

        phases.innerHTML = 'Fase 1 - (15s)';

        control = false;
        btn.disabled = false;
        msg.classList.remove('show');
        msg.classList.add('hidde');

        lightARed.classList.remove('visible');
        lightARed.classList.add('hidden');
        lightAYellow.classList.remove('visible');
        lightAYellow.classList.add('hidden');
        lightAGreen.classList.remove('hidden');
        lightAGreen.classList.add('visible');
        
        lightBRed.classList.remove('hidden');
        lightBRed.classList.add('visible');
        lightBYellow.classList.remove('visible');
        lightBYellow.classList.add('hidden');
        lightBGreen.classList.remove('visible');
        lightBGreen.classList.add('hidden');

        lightPRed.classList.remove('hidden');
        lightPRed.classList.add('visible');
        lightPGreen.classList.add('hidden');
        lightPGreen.classList.remove('visible');

        btn.addEventListener('click', () => {
            control = true;
            btn.disabled = true;
            msg.classList.remove('hidde');
            msg.classList.add('show');
        });
        
        setTimeout(() => {
            timer(2);
            phases.innerHTML = 'Fase 2 - (2s)';
            lightARed.classList.remove('visible');
            lightARed.classList.add('hidden');
            lightAYellow.classList.remove('hidden');
            lightAYellow.classList.add('visible');
            lightAGreen.classList.remove('visible');
            lightAGreen.classList.add('hidden');
            
            setTimeout(() => {
                timer(1);

                phases.innerHTML = 'Fase 3 - (1s)';
                lightARed.classList.add('visible');
                lightAYellow.classList.remove('visible');
                lightAYellow.classList.add('hidden');
                lightAGreen.classList.remove('visible');
                lightAGreen.classList.add('hidden');
                
                if (control) {
                    
                    setTimeout(() => {
                        timer(5);
                        phases.innerHTML = 'Fase 3A - (5s)';
                        lightPRed.classList.remove('visible');
                        lightPRed.classList.add('hidden');
                        lightPGreen.classList.remove('hidden');
                        lightPGreen.classList.add('visible');
                        
                        setTimeout(() => {
                            timer(5);
                            phases.innerHTML = 'Fase 3B - (5s)';
                            toggleBlinking(lightPRed, 5000);

                            setTimeout(() => { // PHASE 4
                                timer(10);
                                phases.innerHTML = 'Fase 4 - (10s)';
                                lightARed.classList.add('visible');
                                lightAYellow.classList.remove('visible');
                                lightAYellow.classList.add('hidden');
                                lightAGreen.classList.remove('visible');
                                lightAGreen.classList.add('hidden');
            
                                lightBRed.classList.remove('visible');
                                lightBRed.classList.add('hidden');
                                lightBYellow.classList.remove('vsisible');
                                lightBYellow.classList.add('hidden');
                                lightBGreen.classList.remove('hidden');
                                lightBGreen.classList.add('visible');
            
                                lightPRed.classList.remove('hidden');
                                lightPRed.classList.add('visible');
                                lightPGreen.classList.remove('visible');
                                lightPGreen.classList.add('hidden');

                                control = false;
                                btn.disabled = false;
                                msg.classList.remove('show');
                                msg.classList.add('hidde');

                                if (!control) {
                                    
                                    btn.addEventListener('click', () => {
                                        control = true;
                                        btn.disabled = true;
                                        msg.classList.remove('hidde');
                                        msg.classList.add('show');
                                    });
                                }
            
                                setTimeout(() => {
                                    timer(2);
                                    phases.innerHTML = 'Fase 5 - (2s)';
                                    lightARed.classList.remove('hidden');
                                    lightARed.classList.add('visible');
                                    lightAYellow.classList.remove('visible');
                                    lightAYellow.classList.add('hidden');
                                    lightAGreen.classList.remove('visible');
                                    lightAGreen.classList.add('hidden');
            
                                    lightBRed.classList.remove('visible');
                                    lightBRed.classList.add('hidden');
                                    lightBYellow.classList.remove('hidden');
                                    lightBYellow.classList.add('visible');
                                    lightBGreen.classList.remove('visible');
                                    lightBGreen.classList.add('hidden');
            
                                    setTimeout(() => {
                                        timer(1);
                                        phases.innerHTML = 'Fase 6 - (1s)';
                                        lightARed.classList.remove('visible');
                                        lightARed.classList.add('hidden');
                                        lightAYellow.classList.remove('hidden');
                                        lightAYellow.classList.add('visible');
                                        lightAGreen.classList.remove('visible');
                                        lightAGreen.classList.add('hidden');
            
                                        lightBRed.classList.remove('hidden');
                                        lightBRed.classList.add('visible');
                                        lightBYellow.classList.remove('visible');
                                        lightBYellow.classList.add('hidden');
                                        lightBGreen.classList.remove('visible');
                                        lightBGreen.classList.add('hidden');

                                        if (!control) {
                                            btn.addEventListener('click', () => {
                                                control = true;
                                                btn.disabled = true;
                                                msg.classList.remove('hidde');
                                                msg.classList.add('show');
                                            });
                                        }

                                        if (control) {
                                            setTimeout(() => {
                                                timer(5);
                                                phases.innerHTML = 'Fase 6A - (5s)';
                                                lightPRed.classList.remove('visible');
                                                lightPRed.classList.add('hidden');
                                                lightPGreen.classList.remove('hidden');
                                                lightPGreen.classList.add('visible');
                                                
                                                setTimeout(() => {
                                                    phases.innerHTML = 'Fase 6B - (5s)';
                                                    toggleBlinking(lightPRed, 6000);

                                                    setTimeout(() => {
                                                        
                                                        toggleLights();
                                                    }, 5000);
                                                    
                                                }, 5000);
                                            }, 5000);

                                        } else {
                                            toggleLights();
                                        }
                                    }, 2000); // PHASE 5
                                }, 10000); // PHASE 4
                            }, 5000); // PHASE 3                                    
                        }, 5000); // 3A
                    }, 5000);

                } else {
                    
                    setTimeout(() => { // PHASE 4
                        timer(10);
                        phases.innerHTML = 'Fase 4 - (10s)';
                        lightARed.classList.add('visible');
                        lightAYellow.classList.remove('visible');
                        lightAYellow.classList.add('hidden');
                        lightAGreen.classList.remove('visible');
                        lightAGreen.classList.add('hidden');
    
                        lightBRed.classList.remove('visible');
                        lightBRed.classList.add('hidden');
                        lightBYellow.classList.remove('vsisible');
                        lightBYellow.classList.add('hidden');
                        lightBGreen.classList.remove('hidden');
                        lightBGreen.classList.add('visible');
    
                        lightPRed.classList.remove('hidden');
                        lightPRed.classList.add('visible');
                        lightPGreen.classList.remove('visible');
                        lightPGreen.classList.add('hidden');
                        
                        btn.addEventListener('click', () => {
                            control = true;
                            btn.disabled = true;
                            msg.classList.remove('hidde');
                            msg.classList.add('show');
                        });
    
                        setTimeout(() => {
                            timer(2);
                            phases.innerHTML = 'Fase 5 - (2s)';
                            lightARed.classList.remove('hidden');
                            lightARed.classList.add('visible');
                            lightAYellow.classList.remove('visible');
                            lightAYellow.classList.add('hidden');
                            lightAGreen.classList.remove('visible');
                            lightAGreen.classList.add('hidden');
    
                            lightBRed.classList.remove('visible');
                            lightBRed.classList.add('hidden');
                            lightBYellow.classList.remove('hidden');
                            lightBYellow.classList.add('visible');
                            lightBGreen.classList.remove('visible');
                            lightBGreen.classList.add('hidden');
    
                            setTimeout(() => {
                                timer(1);
                                phases.innerHTML = 'Fase 6 - (1s)';
                                lightARed.classList.remove('visible');
                                lightARed.classList.add('hidden');
                                lightAYellow.classList.remove('hidden');
                                lightAYellow.classList.add('visible');
                                lightAGreen.classList.remove('visible');
                                lightAGreen.classList.add('hidden');
    
                                lightBRed.classList.remove('hidden');
                                lightBRed.classList.add('visible');
                                lightBYellow.classList.remove('visible');
                                lightBYellow.classList.add('hidden');
                                lightBGreen.classList.remove('visible');
                                lightBGreen.classList.add('hidden');

                                if (!control) {
                                    btn.addEventListener('click', () => {
                                        control = true;
                                        btn.disabled = true;
                                        msg.classList.remove('hidde');
                                        msg.classList.add('show');
                                    });
                                }

                                
                                if (control) {
                                    setTimeout(() => {
                                        timer(5);
                                        phases.innerHTML = 'Fase 6A - (5s)';
                                        lightPRed.classList.remove('visible');
                                        lightPRed.classList.add('hidden');
                                        lightPGreen.classList.remove('hidden');
                                        lightPGreen.classList.add('visible');
                                        
                                        setTimeout(() => {
                                            timer(5);
                                            phases.innerHTML = 'Fase 6B - (5s)';
                                            toggleBlinking(lightPRed, 6000);

                                            setTimeout(() => {
                                                
                                                toggleLights();
                                            }, 6000);
                                            
                                        }, 6000);
                                    }, 2000);
                                    
                                } else {
                                    toggleLights();
                                }
                            }, 3000); // PHASE 5
                        }, 11000); // PHASE 4
                    }, 1000); // PHASE 3
                }
            }, 3000); // PHASE 2
        }, 16000); // PHASE 1
    }, 2000); // PHASE 6
}    
toggleLights();

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btn.click();
    }
})