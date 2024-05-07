This package is testing package that build with support of 
https://javascript.plainenglish.io/how-to-create-a-typescript-npm-library-for-dummies-6633f2506a17
article however it gonna use to manage local storage on js

##summary

```bash
npm init -y

```
`src/index.ts` make index.ts file

```bash
tsc --init 
``` 
start typescript

```bash
npm install tsup 
```
install tsup to make our code in library format

```json
"scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts", 
  },
```
define build script

```bash
npm run build
```
build in dist folder



