/**
 * changeBarsTest.js
 *
 * Mocha unit test for Redux action changeBars.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { should } from "chai";
import { CHANGE_BARS } from "../../../app/actions";
import changeBars from "../../../app/actions/performanceSettings/changeBars";

should();

describe("[actions/changeBars]", () => {
    describe("When I instantiate a changeBars action", () => {
        let result;
        beforeEach(() => result = changeBars(4));
        describe("the action object", () => {
            it(`has type ${CHANGE_BARS}`, () => result.type.should.equal(CHANGE_BARS));
            it("has the bars value I specified", () => result.bars.should.equal(4));
        });
    });
});
