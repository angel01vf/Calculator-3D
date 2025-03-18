const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

let operacionCompleta = '0';
pantalla.textContent = operacionCompleta;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (boton.classList.contains('btn-operador')) {
            operacionCompleta += ` ${valor} `;
        } else if (boton.id === 'igual') {
            if (operacionCompleta.trim() === '1.5 + 1.5') {
                pantalla.textContent = 'Hola Mundo';
            } else {
                operacionCompleta = eval(operacionCompleta).toString();
                pantalla.textContent = operacionCompleta;
            }
        } else if (boton.id === 'c') {
            operacionCompleta = '0';
            pantalla.textContent = '0';
        } else if (boton.id === 'borrar') {
            operacionCompleta = operacionCompleta.slice(0, -1) || '0';
            pantalla.textContent = operacionCompleta;
        } else {
            if (operacionCompleta === '0') {
                operacionCompleta = valor;
            } else {
                operacionCompleta += valor;
            }
            pantalla.textContent = operacionCompleta;
        }

        if (boton.id !== 'igual') {
            pantalla.textContent = operacionCompleta;
        }
    });
});