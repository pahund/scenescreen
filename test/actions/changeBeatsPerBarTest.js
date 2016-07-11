/**
 * changeBeatsPerBarTest.js
 *
 * Mocha unit test for Redux action changeBeatsPerBar.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { should } from "chai";
import { CHANGE_BEATS_PER_BAR } from "../../app/actions";
import changeBeatsPerBar from "../../app/actions/changeBeatsPerBar";

should();

describe("[actions/changeBeatsPerBar]", () => {
    describe("When I instantiate a changeBeatsPerBar action", () => {
        let result;
        beforeEach(() => result = changeBeatsPerBar(3));
        describe("the action object", () => {
            it(`has type ${CHANGE_BEATS_PER_BAR}`, () =>
                result.type.should.equal(CHANGE_BEATS_PER_BAR));
            it("has the beats per bar value I specified", () => result.beatsPerBar.should.equal(3));
        });
    });
});
