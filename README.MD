### Read Only Coinspot API

Forked from the [original SDK](https://github.com/rtw/npm-coinspot-api) which did not support read only at all, and has not been touched in 6 years.

#### Links & Resources
- Read only API documentation https://www.coinspot.com.au/api#rosummary
- Generate a **read only** API key https://www.coinspot.com.au/my/api

#### Example Usage

```
var coinspot = require('coinspot-api');

var secret = ''; // insert your secret here
var key = ''; // insert your key here

var client = new coinspot(key, secret);

coinspotClient.balances((e, data) => {
    console.log(data);
});
```

#### Supported Calls

| Query                            | Supported  |
|----------------------------------|------------|
| List My Balances | ✅ **Yes** |
| List a Coins Balance | 🕑 Not yet |
| List Deposit History | 🕑 Not yet |
| List Withdrawal History | 🕑 Not yet |
| List Transaction History | 🕑 Not yet |
| List Coin Transaction History | 🕑 Not yet |
| List Open Transactions | 🕑 Not yet |
| List Coins Open Transactions | 🕑 Not yet |
| List Send & Receive Transactions | 🕑 Not yet |
| List My Affiliate Payments | 🕑 Not yet |
| List My Referral Payments | 🕑 Not yet |

#### Support
Bitcoin (Coinspot!) address: `1J1PbX42RYYk1auWe1ujGunM9cdP1xW4wF`

![Bitcoin Address](https://i.imgur.com/CHgxzrl.png)