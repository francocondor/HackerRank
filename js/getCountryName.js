/*const https = require('https');

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    // alpha2Code
    var options = {
        host: 'jsonmock.hackerrank.com',
        port: 443,
        // path: '/api/countries?page=2',
        method: 'GET',
        json: true
    };
    var search = 0;
    for(let i = 1; i <= 25;i++){
        console.log({i});
        options.path = '/api/countries?page='+i;
        // console.log(options);
        
        var req = await https.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                let obj2 = JSON.parse(chunk); 
                // console.log(obj2["data"]);
                let l = obj2["data"].length;
                for(let j=0; j<l ; j++){
                    if(obj2["data"][j].alpha2Code == code){
                        search = 1;
                        console.log(j,obj2["data"][j].name);
                        return obj2["data"][j].name
                    }
                    
                }
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
        req.end();
    }
}

// var result = getCountryName('AF');
// console.log(result);
// getCountryName('AF').then(val => console.log({val}))

let country = "AF";
getCountryName(country).then(obj => {
    if (obj) {
        console.log("The capital of " + country + " is " + obj.capital);
    } else {
        console.log("Could not find " + country);
    } 
});*/


// const nodeFetch = require('node-fetch')



// async function findCountry(code) {
//     for (let page = 1; page < 26; page++) {
//         console.log("page = " + page); // for debugging only
//         let response = await nodeFetch("https://jsonmock.hackerrank.com/api/countries?page=" + page);
//         let {data} = await response.json();
//         let obj = data.find(obj => obj.alpha2Code == code);
//         if (obj) return obj.name;
//     }
// }

// let country = "AF";
// findCountry(country).then(obj => {
//     if (obj) {
//         console.log("The capital of " + country + " is " + obj.name);
//     } else {
//         console.log("Could not find " + country);
//     } 
// });


const axios = require('axios');

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    
    // let response = await nodeFetch("https://jsonmock.hackerrank.com/api/countries?page=" + page);
    for (let page = 1; page < 26; page++) {
        const response = await axios.get("https://jsonmock.hackerrank.com/api/countries?page=" + page);
        var values = response["data"].data;
        let obj = values.find(obj => obj.alpha2Code == code);
        if (obj) return obj.name;
    }
    
}


async function resultado() {
    const name = await getCountryName("AF");
    console.log({name})
  
    // ws.write(`${name}\n`);
  
}

resultado();
// let code = ;
// const name = getCountryName(code);