'use strict';

const fs = require('fs');
const axios = require('axios');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
    var sum = 0;
    for (let page = 1; page < 26; page++) {
        let url = "https://jsonmock.hackerrank.com/api/football_matches?year=" + year+"&team1="+team+"&page=" + page;
        const response = await axios.get(url);
        let values = response["data"].data;
        sum += values.reduce((partialSum, a) => partialSum + parseInt(a.team1goals), 0);
        if(page == response["data"].total_pages){
            break;
        }
    }
    for (let page = 1; page < 26; page++) {
        let url = "https://jsonmock.hackerrank.com/api/football_matches?year=" + year+"&team2="+team+"&page=" + page;
        const response = await axios.get(url);
        let values = response["data"].data;
        sum += values.reduce((partialSum, a) => partialSum + parseInt(a.team2goals), 0);
        if(page == response["data"].total_pages){
            break;
        }
    }
    return sum;
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const team = readLine();

    const year = parseInt(readLine().trim(), 10);

    const result = await getTotalGoals(team, year);

    ws.write(result + '\n');

    ws.end();
}
