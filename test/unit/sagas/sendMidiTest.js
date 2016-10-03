/**
 * sendMidiTest.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Oct 2016
 */
import { should } from "chai";
import { sendMidi } from "../../../app/sagas/sendMidi";

should();

// eslint-disable-next-line no-unused-expressions
describe("[sagas/sendMidi]", () => it("exists", () => sendMidi.should.be.ok));
