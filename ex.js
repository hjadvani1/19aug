"use strict";
// import { Url, UrlWithStringQuery } from "url"
// import fetch from "node-fetch";
// import http from 'http';
exports.__esModule = true;
// const txturl : string ='/home/webelight-h-056/Desktop/Es6/Typescript/typescript/9sep/sample.txt.txt'
var node_fetch_1 = require("node-fetch");
// globalThis.fetch = fetch
node_fetch_1["default"]('sample.txt')
    .then(function (r) { return console.log(r.text()); })
    .then(function (d) { return console.log(d); });
node_fetch_1["default"]('temp.json')
    .then(function (r) { return r.json(); })
    .then(function (d) { return console.log(d); });
