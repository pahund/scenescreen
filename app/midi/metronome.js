/*!
 * Metronome.js
 *
 * A reliable metronome using HTML5 Web Workers to maintain the tick
 * interval even when the parent thread is run in the background.
 *
 * For details, see:
 * http://pivotallabs.com/chrome-and-firefox-throttle-settimeout-setinterval-in-inactive-tabs/
 *
 * Copyright 2012 Nick Thompson
 * MIT License
 */
import MetronomeWorker from "worker!./metronomeWorker"; // eslint-disable-line import/no-duplicates
import {
    START,
    STOP,
    SET_TEMPO
} from "./metronomeWorker"; // eslint-disable-line import/no-duplicates

class Metronome {
    constructor(tempo = 120, resolution = 24) {
        this.tempo = tempo;
        this.resolution = resolution;
        this.ticks = 0;
        this.events = {};

        this.worker = new MetronomeWorker();

        this.worker.addEventListener("message", () => {
            this.ticks++;
            this.trigger("position", this.ticks);
            this.trigger(this.ticks);
        });
    }

    on(e, listener) {
        this.events[e] = this.events[e] || [];
        this.events[e].push(listener);
    }

    removeListener(e, listener) {
        if (e in this.events) {
            this.events[e].splice(this.events[e].indexOf(listener), 1);
        }
    }

    trigger(eventName, ...args) {
        if (this.events[eventName] === undefined) {
            return;
        }
        for (const event of this.events[eventName]) {
            event.apply(this, args);
        }
    }

    start() {
        this.worker.postMessage({
            action: START,
            tempo: this.tempo,
            resolution: this.resolution
        });
    }

    stop() {
        this.worker.postMessage({
            action: STOP
        });
    }

    reset() {
        this.ticks = 0;
    }

    setTempo(tempo) {
        this.tempo = tempo;
        this.worker.postMessage({
            action: SET_TEMPO,
            tempo: this.tempo,
            resolution: this.resolution
        });
    }
}

export default Metronome;
