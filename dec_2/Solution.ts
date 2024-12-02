// https://adventofcode.com/2024/day/2
type NumberDictionary<T> = {
    [key: number]: T;
};
class Solution {
    constructor() {
        // Initialization if needed
    }

    public solution1(input: Array<Array<number>>): void {
        let numSafe: number = 0;
        input.forEach((level) => {
            const increasing: boolean = level[1] > level[0];

            for (let i = 0; i < level.length - 1; i++) {
                //return if not difference between 1 and 3
                const diff = level[i+1] - level[i]
                const diffAbs = Math.abs(diff)
                if (!(diffAbs >= 1 && diffAbs <= 3)) return;

                if (increasing && diff < 0) return;
                if (!increasing && diff > 0) return;
            }

            numSafe++;
        })

        console.log(`${numSafe} Safe`);
        //2, 490
    }



    public solution2(input: Array<Array<number>>): void {
        let numSafe: number = 0;
        input.forEach((level) => {
            let solution = this.isLevelSafe(level);
            if (solution.valid) numSafe++;
            else {
                const newLevels: Array<Array<number>> = [];
                newLevels.push(level.toSpliced(solution.index, 1));
                newLevels.push(level.toSpliced(solution.index+1, 1));
                if (solution.index != 0) newLevels.push(level.toSpliced(solution.index-1, 1));

                if (newLevels.some((i) => this.isLevelSafe(i).valid)) {
                    numSafe++;
                }
            }
        })

        console.log(`${numSafe} Safe`);
        //4, 536
    }

    private isLevelSafe(level: Array<number>): {valid: boolean, index: number} {
        const increasing: boolean = level[1] > level[0];

        for (let i = 0; i < level.length - 1; i++) {
            const diff = level[i+1] - level[i]
            const diffAbs = Math.abs(diff)

            //return if not difference between 1 and 3, decrease in increasing run, or increase in decreasing run
            if ((!(diffAbs >= 1 && diffAbs <= 3)) || (increasing && diff < 0) || (!increasing && diff > 0)) return {valid: false, index: i};
        }

        return {valid: true, index: -1};
    }
}

// Create an instance of Solution and call the main method
const solution = new Solution();

const input: Array<Array<number>> = [
    [7,6,4,2,1],
    [1,2,7,8,9],
    [9,7,6,2,1],
    [1,3,2,4,5],
    [8,6,4,4,1],
    [1,3,6,7,9]
]


solution.solution2(input);