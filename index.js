const hmac = require("crypto").createHmac;
const https = require('https');

function coinspot(key, secret) {
    const self = this;
    self.key = key;
    self.secret = secret;

    const request = (path, postdata, callback) => {
        const nonce = new Date().getTime();

        var postdata = postdata || {};
        postdata.nonce = nonce;

        const stringmessage = JSON.stringify(postdata);
        const signedMessage = new hmac("sha512", self.secret);

        signedMessage.update(stringmessage);

        const sign = signedMessage.digest('hex');

        const options = {
            rejectUnauthorized: false,
            method: 'POST',
            host: 'www.coinspot.com.au',
            port: 443,
            path,
            headers: {
                'Content-Type': 'application/json',
                'sign': sign,
                'key': self.key
            }
        };

        const req = https.request(options, resp => {
            let data = '';
            resp.on('data', chunk => {
                data += chunk;
            });
            resp.on('end', chunk => {
                const jsonData = JSON.parse(data);
                callback(null, jsonData);
            });
        }).on("error", e => {
            callback(e, data);
        });

        req.write(stringmessage);
        req.end();
    };

    self.balances = callback => {
        request('/api/ro/my/balances', {}, callback);
    }

    self.balanceByCoin = (cointype, callback) => {
        request(`/api/ro/my/balance/${cointype}`, {}, callback);
    }

    self.deposits = (params, callback) => {
        request(`/api/ro/my/deposits`, params, callback);
    }

    self.referralPayments = callback => {
        request('/api/ro/my/referralpayments', {}, callback);
    }

}

module.exports = coinspot