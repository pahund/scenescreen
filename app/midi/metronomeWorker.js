/**
 * metronomeWorker.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
export const START = "START";
export const STOP = "STOP";
export const SET_TEMPO = "SET_TEMPO";

let frequency = null;
let timer = null;
let tempo = 120;
let resolution = 24;
let running = false;

function messageHandler(e) {
    switch (e.data.action) {
        case START:
            tempo = e.data.tempo || tempo;
            resolution = e.data.resolution || resolution;
            frequency = (60000 / tempo) / resolution;
            running = true;
            timer = setInterval(() => self.postMessage({}), frequency);
            break;
        case STOP:
            if (running) {
                self.clearInterval(timer);
                running = false;
            }
            break;
        case SET_TEMPO:
            tempo = e.data.tempo || 120;
            resolution = e.data.resolution || 24;
            if (running) {
                self.clearInterval(timer);
                frequency = (60000 / tempo) / resolution;
                timer = setInterval(() => self.postMessage({}), frequency);
            }
            break;
        default:
    }
}

self.addEventListener("message", messageHandler);
