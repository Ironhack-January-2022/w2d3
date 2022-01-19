# Async and Callbacks

JavaScript is a synchronous language with some asynchronous behaviours, it is executed line by line and the next line is only executed when the current line is finished.

Synchronous in this regard means one line after the other.
JavaScript is single threaded - only one thing can be done at a time.

If at a certain line there is some very time consuming code running it would stop the execution of the lines below - that would be very bad 😩
For operations that take an unpredictable amount of time we use async functionality.

#### Potentially blocking operations

* Database Access

* Calling an API (like Google Maps or your own server)

* Encryption 

* Filesystem 

* Compression

Then the async function runs in the background and the rest of the code can continue to execute. 

### Example - fast enough (or inexpensive) so we don't have to make it asynchronous

```js
function getFirstElementOfArray (array) {
    return array[0];
  }
  const array = ["Madrid", "Barcelona", "Miami"];
  const firstElement = getFirstElementOfArray(array);
  console.log(firstElement); // <== Madrid
```

### Hypothetical example - this would take time and textSize would be undefined

This function would have to be async to prevent textsize to be undefined
```js
 function readFile (file) {
     // read the file - or some other expensive operation
     return contentFile.length;
   }

   const textSize = readFile("odyssey.txt");
   console.log(textSize); // => undefined
```