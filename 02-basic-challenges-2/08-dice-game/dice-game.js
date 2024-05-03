function diceGameSimulation(rollingCount) {
    const results = [];
    const winner = [7, 11];
    const loser = [2, 3, 12];

    for (let i = 0; i < rollingCount; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();
        const sum = dice1 + dice2;
        const result = winner.includes(sum) ? 'win' : loser.includes(sum) ? 'lose' : 'roll again';

        results.push({ dice1, dice2, sum, result })
    }

    return results;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

module.exports = diceGameSimulation;
