/**
 * runSagas.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jul 2016
 */
import sendMidi from "../sagas/sendMidi";
import updateLayout from "../sagas/updateLayout";
import openFile from "../sagas/openFile";
import requestFileOpenDialog from "../sagas/requestFileOpenDialog";
import transport from "../sagas/transport";
import scheduleScene from "../sagas/scheduleScene";
import changeConfig from "../sagas/changeConfig";
import changePerformanceSettings from "../sagas/changePerformanceSettings";
import changeMidiSettings from "../sagas/changeMidiSettings";
import navigate from "../sagas/navigate";
import refreshMidiOutputList from "../sagas/refreshMidiOutputList";
import autopilot from "../sagas/autopilot";
import test from "../sagas/test";

export default (sagaMiddleware, store) => {
    sagaMiddleware.run(sendMidi, store.getState);
    sagaMiddleware.run(updateLayout);
    sagaMiddleware.run(openFile);
    sagaMiddleware.run(requestFileOpenDialog);
    sagaMiddleware.run(transport, store.getState);
    sagaMiddleware.run(scheduleScene, store.getState);
    sagaMiddleware.run(changeConfig, store.getState);
    sagaMiddleware.run(changePerformanceSettings, store.getState);
    sagaMiddleware.run(changeMidiSettings, store.getState);
    sagaMiddleware.run(navigate);
    sagaMiddleware.run(refreshMidiOutputList, store.getState);
    sagaMiddleware.run(autopilot, store.getState);
    sagaMiddleware.run(test);
};
