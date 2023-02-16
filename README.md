# vue3-wx-jssdk

## Basic Usage

The Weixin JS-JDK (also known as WeChat JS-SDK) is a JavaScript library provided by Weixin (also known as WeChat) that allows developers to access Weixin's APIs and add Weixin-specific functionality to their web applications.

To use the Weixin JS-JDK in your frontend project, you will need to follow these steps:

1. Register an account and create an application in Weixin's development platform. You will need to provide basic information about your application, such as its name, description, and URL.

2. Once your application is created, you can obtain an appID and appSecret, which are necessary for using the Weixin JS-JDK.

3. Download the Weixin JS-JDK library and include it in your web application's HTML file using a script tag:
```html
<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
```

4. Initialize the Weixin JS-JDK by calling the wx.config method with your appID and appSecret, as well as a list of the API functions that your application will use:
```js

wx.config({
  debug: true,
  appId: 'YOUR_APP_ID',
  timestamp: 123456789,
  nonceStr: 'YOUR_NONCE_STR',
  signature: 'YOUR_SIGNATURE',
  jsApiList: ['chooseImage', 'uploadImage', 'previewImage']
});
```


## With NodeJs

In a real project, it's generally not a good idea to hardcode the `nonceStr` and `signature` values in your frontend code, as this could expose your app secret and make it vulnerable to attacks. Instead, you should generate the `nonceStr` and `signature` values dynamically on your server, and then pass them to the frontend code when it's loaded.


One common approach is to create an API endpoint on your server that generates the `nonceStr` and `signature` values on demand, based on the current URL of the page. Your frontend code can then make a request to this API endpoint to obtain the `nonceStr` and `signature` values, and use them to initialize the Weixin JS-JDK.

**Express app**

`src/server.js`

## Intall Ngrok
```
brew install ngrok --cask
```

## Run Ngrok

The 8081 port is the port of your project 
```
ngrok http 8081
```


## Helpful Links
- [Ngrok installation.md](https://gist.github.com/milocosmopolitan/74f870e6f2ead8493d6b5bbba8cfb010)
- [How to debug WeChat JS-SDK locally](https://juejin.cn/post/6949067738526515237)
- [Test weichat public account](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)