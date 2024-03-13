// generate readme.md

import fs from "fs"

let readme = `
<p align="center">
  <img width="180" src="./fortea.png" alt="fortea logo">
</p>

<p align="center">A comprehensive TypeScript function library offering a wide range of utilities.</p>

# fortea

[![NPM version](https://img.shields.io/npm/v/fortea.svg?style=flat)](https://npmjs.com/package/fortea) [![NPM downloads](https://img.shields.io/npm/dm/fortea.svg?style=flat)](https://npmjs.com/package/fortea)

## Description

some tools for js, save your time for a cup of tea ☕️!
\`fortea\` is a comprehensive TypeScript function library offering a wide range of utilities, from basic type checking to
JSON querying and encoding transformations. Below is a detailed guide on how to use some of the key functions in this
library.

## Features

- lightweight, zero dependencies
- well tested, with huge test coverage
- easy to use, simple and clear API

## Install

\`\`\`bash
npm install fortea
\`\`\`

## Tools

`

function main(){
    const files = fs.readdirSync("./src")
    for(let i=0;i<files.length;i++){
        const name = files[i]
        if(name === "index.ts"){
            continue
        }
        readme += `- [${name.split(".")[0]}](https://github.com/irychen/fortea/blob/main/src/${name}/index.ts)\n`
    }
    fs.writeFileSync("./README.md", readme)
}


main()
