Parse the data with JSON.parse(), and the data becomes a JavaScript object.

Array as JSON
When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

Parsing Dates
Date objects are not allowed in JSON.

Synatax
JSON.parse(text)



JSON.parse(text, reviver)


The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

Synatax
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)

//False and True
conditions that results to false
""
0
false
null=>signalize emptiness 
its better to use null than empty string or array 
undefined=>signalize emptiness 
NaN

Truthy or false
//this turns the array to a string
// myLeads = JSON.parse(myLeads)

// myLeads.push("www.myTrial.com")
// console.log(myLeads);

