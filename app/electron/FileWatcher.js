/**
 * FileWatcher.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 15 Jul 2016
 */
import chokidar from "chokidar";

const PATH = Symbol("path");
const WATCHER = Symbol("watcher");
const ON_CHANGE = Symbol("on change");
const ON_ERROR = Symbol("on error");

export default class {
    constructor(onChange, onError) {
        this[ON_CHANGE] = onChange;
        this[ON_ERROR] = onError;
        this[WATCHER] = null;
        this[PATH] = null;
    }

    get path() {
        return this[PATH];
    }

    set path(newPath) {
        if (!this[WATCHER]) {
            this[WATCHER] = chokidar.watch(newPath, { persistent: true });
            this[WATCHER].on("change", this[ON_CHANGE]);
            this[WATCHER].on("error", this[ON_ERROR]);
        } else {
            this[WATCHER].unwatch(this.path);
            this[WATCHER].add(newPath);
        }
        this[PATH] = newPath;
    }
}
