console.log('async')

// set timeout
function someCallback() {
	console.log('Hi everybody 👋')
}

const id = setTimeout(function () {
	console.log('Hi everybody 👋')
}, 2000)
console.log('this runs first ⏰')
// here we want to cancel the timeout
// console.log(id)
clearTimeout(id)


let counter = 1
let timeoutId;
function callback() {
	console.log(counter)
	timeoutId = setTimeout(callback, 1000)
	counter++
	// stop if the counter is higher than 3
	if (counter > 3) {
		clearTimeout(timeoutId)
	}
}
// callback()

// a better way to build a counter
// setInterval
let i = 1
setInterval(function () {
	console.log(i)
	i++
}, 1000)