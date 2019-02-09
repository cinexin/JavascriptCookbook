var sentence = "These are the items to buy: 'cherries', 'ranges', 'apples', 'bananas'. Is it ok?";
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start +1 );
var fruits = sentence.substring(start + 1, end).split(',');
fruits.forEach(function(element, index, array) {
    array[index] = element.trim();
});
console.log("List of items: " + fruits);