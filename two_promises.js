let promise_one = new Promise((resolve, reject) => { setTimeout(() => {resolve("Promise 1 resolved")}, 6000) })

let promise_two = new Promise((resolve, reject) => { setTimeout(() => {resolve("Promise 2 resolved")}, 3000) })

promise_one.then((successMessage) => { // successMessage is the value returned by resolve
    console.log("From callback " + successMessage)

    promise_two.then((successMessage) => {
        console.log("From callback " + successMessage)
    })
  })