// Example
var state1 = prompt('Please enter your word')
alert(state1 + ' Have  ' + state1.length + '  charcters');

// compare between another statement
var state2 = prompt('please your word')
var state3 = prompt('please your second word');
if(state2.length > state3.length){
    alert('the charctors of '+ state2.length + ' greater than ' + state3.length + ' charctor')

}
else if (state3.length > state2.length){
    alert('the charctors of '+ state3.length + ' greater than ' + state2.length + ' charctor')
}