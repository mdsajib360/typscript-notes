# TypesScript Introduction and setup 

- TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing ...
- think typescript as a tool for development 

## setup typescript project & Start writing code in typescript 
 
 - step 1:  Initializing your project with npm
 ```
    npm init -y 
 ```
- Step 3: Installing Typescript
```
npm install typescript --save-dev 
```
- Step 4: Configuring Typescript
```
npx tsc --init
```

- Step 5: Creating Your First TypeScript File
 ```
// index.ts

const greeting: string = "Hello, GeeksforGeeks!";
console.log(greeting);
 ```

### Step to Run Application: Run the application using the following commands from the root directory of the project

```
npx tsc
node index.js
```