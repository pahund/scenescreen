/**
 * changeTempoTest.js
 *
 * Mocha unit test for Redux action changeTempo.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { should } from "chai";
import { CHANGE_TEMPO } from "../../app/actions";
import changeTempo from "../../app/actions/changeTempo";

should();

describe("[actions/changeTempo]", () => {
    describe("When I instantiate a changeTempo action", () => {
        let result;
        beforeEach(() => result = changeTempo(180));
        describe("the action object", () => {
            it(`has type ${CHANGE_TEMPO}`, () => result.type.should.equal(CHANGE_TEMPO));
            it("has the tempo I specified", () => result.tempo.should.equal(180));
        });
    });
});
