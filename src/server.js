const crypto = require('crypto');
const express = require('express');
const request = require('request-promise-native');

const app = express();
const appId = 'YOUR APPID';
const appSecret = 'YOUR APPSECRET';

app.get('/wx-jssdk-config', async (req, res) => {
  const { url } = req.query;
  const timestamp = Math.floor(Date.now() / 1000);
  const nonceStr = crypto.randomBytes(16).toString('hex');

  const jsapiTicket = await getJsapiTicket();
  console.log('jsapiTicket', jsapiTicket)

  const str = `jsapi_ticket=${jsapiTicket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
  const signature = crypto.createHash('sha1').update(str).digest('hex');

  res.json({
    appId,
    timestamp,
    nonceStr,
    signature,
  });
});

async function getJsapiTicket() {
  const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${await getAccessToken()}&type=jsapi`;
  const response = await request.get(url, { json: true });
  return response.ticket;
}

async function getAccessToken() {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
  const response = await request.get(url, { json: true });
  console.log('access_token', response.access_token)
  return response.access_token;
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
