This package is testing package that build with support of 
https://javascript.plainenglish.io/how-to-create-a-typescript-npm-library-for-dummies-6633f2506a17
article however it gonna use to manage local storage on js

## summary

```bash
npm init -y

```
`src/index.ts` make index.ts file

```bash
tsc --init 
``` 
start typescript

```bash
npm install -D typescript
npm install -D tsup 
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

```bash
install -D @changesets/cli && npx changeset init
```
sementic versioning 

`changeset` config can be changed to 
```json
"access": "public"
```
if you wanted

```bash
npx changeset
``` 

make a new version

add workflow ymls for both release and main workflows


## Initial Publish to NPM
```bash
npm login --auth-type=legacy
npm publish 
```

to do this we need a unique name






