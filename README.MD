### Read Only Coinspot API

Forked from the [original SDK](https://github.com/rtw/npm-coinspot-api) which did not support read only at all, and has not been touched in 6 years.

#### Links & Resources
- Read only API documentation https://www.coinspot.com.au/api#rosummary
- Generate a **read only** API key https://www.coinspot.com.au/my/api

#### Example Usage

```js
var coinspot = require('coinspot-api');

var key = ''; // insert your key here
var secret = ''; // insert your secret here

var coinspotClient = new coinspot(key, secret);

// Simple balance check
coinspotClient.balances((e, data) => {
    console.log(data);
});

// Check balance by coin
// eg: 'BTC', 'LTC', 'DOGE' -- appears to be case insensitive
coinspotClient.balanceByCoin('BTC', (e, data) => {
    console.log(data);
});

// List deposits - note empty params
coinspotClient.deposits({}, (e, data) => {
    console.log(data);
});

// List deposits - with start and/or end date
// Note lowercase startdate/enddate
coinspotClient.deposits({ startdate: '2020-01-01'}, (e, data) => {
    console.log(data);
});

// List referral payments
coinspotClient.referralPayments((e, data) => {
    console.log(data);
});
```

#### Supported Calls

| Query                            | Supported  |
|----------------------------------|------------|
| List My Balances | ✅ **Yes** |
| List a Coins Balance | ✅ **Yes** |
| List Deposit History | ✅ **Yes** |
| List Withdrawal History | 🕑 Not yet |
| List Transaction History | 🕑 Not yet |
| List Coin Transaction History | 🕑 Not yet |
| List Open Transactions | 🕑 Not yet |
| List Coins Open Transactions | 🕑 Not yet |
| List Send & Receive Transactions | 🕑 Not yet |
| List My Affiliate Payments | 🕑 Not yet |
| List My Referral Payments | ✅ **Yes** |

#### Support
Bitcoin (Coinspot!) address: `1J1PbX42RYYk1auWe1ujGunM9cdP1xW4wF`

![Bitcoin Address](https://i.imgur.com/CHgxzrl.png)