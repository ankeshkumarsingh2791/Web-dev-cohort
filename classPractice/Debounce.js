function debounce (fn, delay){
    // console.log(arguments)
    // console.log(parameter) parameter is not defined 

    let myRequest;
    return function(...args){
        clearTimeout(myRequest)
        myRequest = setTimeout( () => {
             fn.apply(this, args)
            
        }, delay);

    }
}

function greet(name){
    console.log(`Hello ${name}`)
}

// debounce(greet("Ankesh"), 3000) Hello Ankesh

// debounce(() =>greet("Ankesh"), 3000) = o/p [Arguments] { '0': [Function (anonymous)], '1': 3000 } 

const userDebounce = debounce(() => greet("Ankesh"), 3000) // function ek reference return kr rha hai esliye usko hum ek variable me store krte hai
userDebounce()


// now thro-Taling

const throtaling = (fn, delay) => {
    // console.log(parameter) parameter is not defined
    let myId = null;
    return (...args) => {
        if(myId === null){
            fn(...args);
            myId = setTimeout( () => {
                myId = null
            }, delay)
        }
    }
}

function hell0 (name){
    console.log("Hello 22" ,name)
}

 const ans =throtaling(()=> hell0("Ankesh 1"), 8000)
 ans()
 ans()
 ans()
 ans()

