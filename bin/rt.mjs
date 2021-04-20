#! /usr/bin/env node
import {h2m} from "../src/index.mjs";
import fs from 'fs'

fs.readFile('./README.md', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    const text = data;
    const feat2 = "\n\n## 2. Solutions\n\n"
    const markdown = h2m(text) + feat2;

    fs.writeFile('./README.md', markdown, err => {
        if (err) {
            console.error(err)
            return
        }
        //文件写入成功。
        console.log("success!")
    })
})



