import Vue from "Vue"
import App from "./app.vue"
import './assets/styles/global.styl'

document.title = "任务清单-by suxin"
const root = document.createElement("div");
document.body.appendChild(root);

//添加viewport
var oMeta = document.createElement('meta');
oMeta.content = 'width=device-width, user-scalable=no, initial-scale=0.8, maximum-scale=1.0, minimum-scale=0.1';
oMeta.name = 'viewport';
document.getElementsByTagName('head')[0].appendChild(oMeta);

//添加icon
var icon = document.createElement("link");
icon.rel="icon";
icon.href="/public/favicon.ico";
document.head.appendChild(icon);

new Vue({
    render: (h) => h(App)
}).$mount(root);