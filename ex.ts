// import { Url, UrlWithStringQuery } from "url"
// import fetch from "node-fetch";
// import http from 'http';

// const txturl : string ='/home/webelight-h-056/Desktop/Es6/Typescript/typescript/9sep/sample.txt.txt'
import fetch from 'node-fetch'
// globalThis.fetch = fetch


fetch('sample.txt')
.then(r=>console.log(r.text()))
.then((d)=>console.log(d))


fetch('temp.json')
.then(r=>r.json())
.then(d=>console.log(d)
)
