/**
 * changeMidiOutputTest.js
 *
 * Mocha unit test for Redux action changeMidiOutput.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { should } from "chai";
import { CHANGE_MIDI_OUTPUT } from "../../../app/actions";
import changeMidiOutput from "../../../app/actions/changeMidiOutput";

should();

describe("[actions/changeMidiOutput]", () => {
    describe("When I instantiate a changeMidiOutput action", () => {
        let result;
        beforeEach(() => result = changeMidiOutput("foo"));
        describe("the action object", () => {
            it(`has type ${CHANGE_MIDI_OUTPUT}`, () =>
                result.type.should.equal(CHANGE_MIDI_OUTPUT));
            it("has the midi output ID I specified", () => result.midiOutputId.should.equal("foo"));
        });
    });
});
