const CryptoJS = require('crypto-js');

let accessToken = 'EAAED5nLqodwBAEay5GUF90bOZADR0WZBqnyHcC3P2LPNiSy3LIA434qFMsJyE4vlBY1E71dlN53ReqqSXKZBBuXwu3im2jRp4dSVwRqE8UFGZCXSHCYUm30nliVZBlSveOAeZANH0dlN6u176zqSdd17i0HJf2hnju2ALFFIMxaBYTRZBOZBwMNttDrsRQM1g6c1HYuxSCdcSAZDZD'
let clientSecret = '287210ceed5cefcc054fbff747f93fc8'

let appsecret_proof =CryptoJS.HmacSHA256(accessToken, clientSecret).toString(CryptoJS.enc.Hex);

console.log('appsecret_proof', appsecret_proof)