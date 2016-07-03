/**
 * ticker.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jul 2016
 */
import { EventEmitter } from "events";

module.exports = audioContext => {
    const ticker = new EventEmitter();

    let pos = 0;
    let length = 25;

    function time() {
        if (audioContext) {
            return audioContext.currentTime * 1000;
        }
        if (global.process && process.hrtime) {
            const t = process.hrtime();
            return (t[0] + (t[1] / Math.pow(10, 9))) * 1000;
        }
        return Date.now();
    }

    function tick() {
        if (!pos) {
            pos = time();
        }
        pos += length;
        ticker.emit("tick");
        setTimeout(tick, pos - time());
    }

    ticker.setInterval = tempo => length = parseInt(tempo, 10) || 25;

    tick();

    return ticker;
};
