let count = document.getElementById("counter")
let follo = document.getElementById("Subscriber")

count = 1
setInterval(() => {
    if( count < 1000){
        count++
        counter.innerHTML = count;
    }
}, 1)

setTimeout(() => {
    Subscriber.innerHTML = "1000 Subscribers in Youtube!"
},5000)
