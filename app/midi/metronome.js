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
import defaultConfig from "../config/defaultConfig";

class Metronome {
    constructor({
        tempo = defaultConfig.tempo,
        bars = defaultConfig.bars,
        beatsPerBar = defaultConfig.beatsPerBar,
        resolution = defaultConfig.resolution,
        scheduleOffset = defaultConfig.scheduleOffset
    } = defaultConfig) {
        this.tempo = tempo;
        this.bars = bars;
        this.beatsPerBar = beatsPerBar;
        this.resolution = resolution;

        // value -1: trigger scheduled calls just a little ahead of time to avoid clicks
        this.scheduleOffset = scheduleOffset;

        this.ticks = 0;
        this.beat = 1;
        this.bar = 1;
        this.events = {};
        this.scheduledCalls = new Map();

        this.worker = new MetronomeWorker();

        this.worker.addEventListener("message", () => {
            if (this.ticks % 24 === 0) {
                this.trigger("beat", this.bar, this.beat);
                if (this.beat % this.beatsPerBar === 0) {
                    this.bar++;
                    if (this.bar > this.bars) {
                        this.bar = 1;
                    }
                }
                this.beat++;
                if (this.beat > this.beatsPerBar) {
                    this.beat = 1;
                }
            }
            this.trigger("position", this.ticks);
            const scheduledCallKey = this.ticks % (this.bars * this.beatsPerBar * this.resolution);
            const scheduledCall = this.scheduledCalls.get(scheduledCallKey);
            if (scheduledCall) {
                scheduledCall();
                this.scheduledCalls.delete(scheduledCallKey);
            }
            this.ticks++;
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
    }l

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
        this.bar = 1;
        this.beat = 1;
    }

    setTempo(tempo) {
        this.tempo = tempo;
        this.worker.postMessage({
            action: SET_TEMPO,
            tempo: this.tempo,
            resolution: this.resolution
        });
    }

    schedule(bar, beat, func) {
        let tick = (bar - 1) * (beat - 1) * this.resolution;
        tick += this.scheduleOffset;
        if (tick < 0) {
            tick = this.bars * this.beatsPerBar * this.resolution + tick;
        }
        this.scheduledCalls.set(tick, func);
    }
}

export default Metronome;
