let scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
};

function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML += `<p>${message}</p>`;
}

function OpeningCeremony(callback) {
    log("Opening Ceremony: Welcome to the Sports Day!");
    let countdown = 5;
    const interval = setInterval(() => {
        log(`Event starts in ${countdown} seconds...`);
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
}

function Race100M(callback) {
    setTimeout(() => {
        const times = {
            red: Math.random() * 10 + 10,
            blue: Math.random() * 10 + 10,
            green: Math.random() * 10 + 10,
            yellow: Math.random() * 10 + 10
        };
        log(`Race 100M results: ${JSON.stringify(times)}`);
        const winner = Object.keys(times).reduce((a, b) => times[a] < times[b] ? a : b);
        scores[winner] += 10; 
        log(`${winner} wins the 100m race!`);
        log(`Updated Scores: ${JSON.stringify(scores)}`);
        callback();
    }, 3000);
}

function LongJump(callback) {
    setTimeout(() => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];
        scores[selectedColor] += 5; 
        log(`${selectedColor} wins the Long Jump!`);
        log(`Updated Scores: ${JSON.stringify(scores)}`);
        callback();
    }, 2000);
}

function HighJump(callback) {
    const color = prompt("Enter the color with the highest jump (red, blue, green, yellow):");
    if (scores[color] !== undefined) {
        scores[color] += 7;
        log(`${color} wins the High Jump!`);
    } else {
        log("Invalid color entered or no input. No points awarded.");
    }
    log(`Updated Scores: ${JSON.stringify(scores)}`);
    callback();
}

function AwardCeremony() {
    log("Award Ceremony:");
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    log(`Winner of the Sports Day: ${winner} with ${scores[winner]} points!`);
    log(`Final Scores: ${JSON.stringify(scores)}`);
}

document.getElementById('startButton').addEventListener('click', () => {
    scores = { red: 0, blue: 0, green: 0, yellow: 0 }; 
    log("Starting Sports Day...");
    OpeningCeremony(() => {
        Race100M(() => {
            LongJump(() => {
                HighJump(() => {
                    AwardCeremony();
                });
            });
        });
    });
});