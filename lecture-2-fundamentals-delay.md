# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example

setTimeout(function(){
    console.log('hello');
}, 3000); //this is 3000 miliseconds (3 seconds), after the 3 seconds the console will print HELLO
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
setInterval (function(){
    console.log ('here');
}, 1000);
const myTimer = setInterval(function(){
    console.log ('here');
}, 1000);

//to clear an interval/stop, you need an assigned variable//

clearInterval(myTimer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared. <'variable needs to be assigned'>

```js
// Example
clearInterval('variableName')
```

---


