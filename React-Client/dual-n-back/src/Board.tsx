import * as _ from "lodash";
import Flash from "./Flash";

class Board {

    public onScoreChange?: (prevScore: number, nextScore: number) => void;

    private timerToken?: number;
    private onFlash?: (flash: Flash) => void;
    private readonly history: Flash[];
    private score: number;

    constructor(
        public readonly rows: number,
        public readonly columns: number
    ) {
        this.history = [];
        this.score = 0;
    }

    public start(onFlash: (flash: Flash) => void) {
        this.onFlash = onFlash;

        // window.setTimeout(() => {
        //     onFlash(this.next());
        // }, 10000);
        this.timerToken = window.setInterval(() => onFlash(this.next()), 2500);
    }

    public stop() {
        clearInterval(this.timerToken);
        delete this.onFlash;
        delete this.timerToken;
    }

    public samePosition() {
        if (this.history.length > 1 && _.isEqual(this.history[this.history.length - 1].position, this.history[this.history.length - 2].position)) {
            this.updateScore(100);
        } else {
            this.updateScore(-50);
        }
    }

    public sameSound() {
        if (this.history.length > 1 && _.isEqual(this.history[this.history.length - 1].sound, this.history[this.history.length - 2].sound)) {
            this.updateScore(100);
        } else {
            this.updateScore(-50);
        }
    }

    private next() {
        const p: number = 15;
        const nextFlash: any = {};

        if (this.history.length > 0 && this.randomInRange(1, 100) <= p) {
            nextFlash.position = this.history[this.history.length - 1].position;
        } else {
            const randomRow = this.randomInRange(0, this.rows - 1);
            const randomColumn = this.randomInRange(0, this.columns - 1);
            nextFlash.position = [randomRow, randomColumn];
        }

        if (this.history.length > 0 && this.randomInRange(1, 100) <= p) {
            nextFlash.sound = this.history[this.history.length - 1].sound;
        } else {
            const randomSound = this.randomInRange(1, 9);
            nextFlash.sound = randomSound;
        }

        this.history.push(nextFlash);
        return nextFlash;
    }

    private updateScore(delta: number) {
        const newScore: number = this.score + delta;
        if (this.onScoreChange) {
            this.onScoreChange(this.score, newScore);
        }
        this.score = newScore;
    }

    private randomInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default Board;
