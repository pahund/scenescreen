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

export default (sagaMiddleware, store) => {
    sagaMiddleware.run(sendMidi, store.getState);
    sagaMiddleware.run(updateLayout);
    sagaMiddleware.run(openFile);
    sagaMiddleware.run(requestFileOpenDialog);
    sagaMiddleware.run(transport, store.getState);
};
