const wakeUp = () => console.log('Acordando!');
const breakFest = () => console.log('Bora tomar café!');
const goodbye = () => console.log('Partiu dormir!');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(breakFest);
doingThings(goodbye);