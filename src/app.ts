import express from 'express';
import {GamePlay} from "./two-player-game/GamePlay";
const app = express();

app.listen(9000, ()=>{
    const gameplay = new GamePlay();
    gameplay.play();
})