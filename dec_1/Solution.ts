// https://adventofcode.com/2024/day/1
type NumberDictionary<T> = {
    [key: number]: T;
};
class Solution {
    constructor() {
        // Initialization if needed
    }

    public solution1(in1: number[], in2: number[]): void {
        in1.sort((a, b) => a - b);
        in2.sort((a, b) => a - b);

        let sum: number = 0;
        for (let i = 0; i < in1.length; i++) {
            sum += Math.abs(in1[i] - in2[i]);
        }

        console.log(sum);
        //11,1882714
    }

    public solution2(in1: number[], in2: number[]): void {
        let map: NumberDictionary<number> = {};

        for (let i = 0; i < in2.length; i++) {
            if (!map[in2[i]]) {
                map[in2[i]] = 1;
                continue;
            }

            map[in2[i]] += 1;
        }

        let sum : number = 0;
        for (let i = 0; i < in1.length; i++) {
            if (map[in1[i]]) sum += in1[i] * map[in1[i]];
        }

        console.log(sum);
        //31,19437052
    }
}

// Create an instance of Solution and call the main method
const solution = new Solution();

const in1: Array<number> = [3, 4, 2, 1, 3, 3]
const in2: Array<number> = [4, 3, 5, 3, 9, 3]

solution.solution1(in1, in2);
solution.solution2(in1, in2);