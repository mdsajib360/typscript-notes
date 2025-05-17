# TypesScript Introduction and setup 

- TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing ...
- think typescript as a tool for development 

## setup typescript project & Start writing code in typescript 
 
 - step 1:  Initializing your project with npm {Install Node.js on your system if you haven't done so already.}
 ```
    npm init -y 
 ```
- Step 2: Installing Typescript
```
npm install typescript --save-dev 
```
- Step 3: Configuring Typescript
```
npx tsc --init
```

- Step 4: Creating Your First TypeScript File
 ```
// index.ts

const greeting: string = "Hello, TypeScript!";
console.log(greeting);
 ```

### Step to Run Application: Run the application using the following commands from the root directory of the project

```
npx tsc
node index.js
```