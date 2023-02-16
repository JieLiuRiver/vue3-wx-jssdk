export {};
import wx from "weixin-js-sdk";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $wechat: wx;
  }
}