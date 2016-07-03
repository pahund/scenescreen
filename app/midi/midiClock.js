/**
 * midiClock.js
 *
 * Based on midi-clock module by Matt McKegg.
 *
 * @see https://github.com/livejs/midi-clock
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jul 2016
 */
import { EventEmitter } from "events";
import tickerF from "./ticker";

module.exports = context => {
    const clock = new EventEmitter();

    const state = {
        tickLength: 60,
        nextTickAt: 0,
        position: 0,
        playing: false
    };

    const ticker = tickerF(context);

    ticker.on("tick", () => {
        if (state.playing) {
            state.position += 1;
            clock.emit("position", state.position);
        }
    });

    clock.setTempo = (tempo) => {
        state.tickLength = 60000 / (tempo * 24);
        ticker.setInterval(state.tickLength);
        clock.emit("tempo", tempo);
    };

    clock.start = () => {
        state.nextTickAt = 0;
        state.position = -1;
        clock.emit("start");
        state.playing = true;
    };

    clock.continue = () => {
        clock.emit("continue");
        state.playing = true;
    };

    clock.stop = () => {
        clock.emit("stop");
        state.playing = false;
    };

    return clock;
};
