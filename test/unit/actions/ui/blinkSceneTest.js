/**
 * blinkSceneTest.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { should } from "chai";
import { BLINK_SCENE } from "../../../../app/actions";
import blinkScene from "../../../../app/actions/ui/blinkScene";

should();

describe("[actions/blinkScene]", () => {
    describe("When I instantiate a “blink scene” action", () => {
        let result;
        beforeEach(() => result = blinkScene(1, true));
        describe("the action object", () => {
            it(`has type ${BLINK_SCENE}`, () => result.type.should.equal(BLINK_SCENE));
            it("has the blinking flag I specified", () => result.blinking.should.be.ok);
            it("has the scene index I specified", () => result.sceneIndex.should.equal(1));
        });
    });
});
