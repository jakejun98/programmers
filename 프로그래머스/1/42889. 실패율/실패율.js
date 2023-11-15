function solution(N, stages) {
    let count = 0;
    stages.sort((a, b) => a - b);
    let newStage = [];

    for (let i = 1; i <= N; i++) {
        count = 0;
        let totalPlayers = stages.length;

        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                count++;
            }
        }

        if (totalPlayers === 0) {
            newStage.push([i, 0]);
        } else {
            newStage.push([i, count / totalPlayers]);
        }

        stages = stages.filter(stage => stage !== i);
    }

    newStage.sort((a, b) => b[1] - a[1]);
    return newStage.map(x => x[0]);
}
