/**
 * rangeTest.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import { should } from "chai";
import range from "../../../../../app/midi/messageConverters/processors/range";

should();

const testCases = [
    {
        input1: {
            from: -50,
            to: 50
        },
        input2: -50,
        expected: 0
    },
    {
        input1: {
            from: -50,
            to: 50
        },
        input2: 0,
        expected: 64
    },
    {
        input1: {
            from: -50,
            to: 50
        },
        input2: 50,
        expected: 127
    },
    {
        input1: {
            from: -12,
            to: 12
        },
        input2: -12,
        expected: 0
    },
    {
        input1: {
            from: -12,
            to: 12
        },
        input2: 0,
        expected: 64
    },
    {
        input1: {
            from: -12,
            to: 12
        },
        input2: 12,
        expected: 127
    }
];

describe("[midi/messageConverters/processors/range]", () => {
    for (const { input1: { from, to }, input2, expected } of testCases) {
        describe(`When I create a range function with from = ${from} and to = ${to}`, () => {
            let func;
            beforeEach(() => func = range(from, to));
            describe(`and I call the function with input = ${input2}`, () => {
                let result;
                beforeEach(() => result = func(input2));
                describe("the result", () =>
                    it(`is ${expected}`, () => result.should.equal(expected))
                );
            });
        });
    }
});
