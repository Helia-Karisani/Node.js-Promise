# Node.js-Promise
## What You will see here:

- **Calling a second promise after the first one resolves**.
- **Executing promises sequentially**, ensuring each runs only after the previous one completes.
- **An example on await and async**

## About This Example

This example demonstrates how **async** and **await** simplify asynchronous programming in JavaScript.  
An **async function (`myAsyncFunction`)** performs a conditional check, returning a success message if the condition is true or throwing an error otherwise.  
Another function, **`executeAsyncFunction`**, uses **await** to call it and handles both success and error cases using a **try-catch block**.  
This approach offers a **clearer and more readable alternative** to traditional **promise chaining with `.then()` and `.catch()`**.

