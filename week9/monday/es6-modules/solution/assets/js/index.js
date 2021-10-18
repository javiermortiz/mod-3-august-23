//!!START SILENT
import Game from './game.js';
import { demo } from './game.js';

console.log(demo);

//!!END
window.onload = () => {
    const game = new Game();
    game.start();
};
