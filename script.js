


const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const nameS =  words.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) +1
    
    return acc
}, {})

console.log(nameS)



const student = [
    {name: "feranmi", score: 15},
    {name: "Kaybee", score: 18},
    {name: "muiz", score: 10}
]
 student.forEach(sTudent => {
    console.log(sTudent)
 });
 const students =["Feranmi","Kaybee", "Muiz"]
 console.log(students.map(students => students.toUpperCase()))
 const below = student.filter((scores) => 
    scores.score <= 15);
 console.log(below)

 console.log(below.map((name) => name.toUpperCase))