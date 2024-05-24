let data =[
    {
        name: "Lauren",
        age: "26"

    },
    {
        name: "Brandon",
        age: "37"   
    },
    {
        name: "Raymond",
        age: "80"
    },
    {
        name: "Ericka",
        age: "28"
    },
    {
        name: "Jane",
        age: "48"  
    },
    {
        name: "Andreah",
        age: "35"
    },
    {
        name: "Weseley",
        age: "20"
    },
{
        name: "Charlie",
        age: "53"

    },

];

const info = document.querySelector('#info')

let details = data.map(function(item){
  return'<div>' + item.name +' '+ 'is ' + item.age +
  ' years old'+' </div>';
});


info.innerHTML = details.join('\n');