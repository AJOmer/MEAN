// users = [
//   {
//     fname: "Kermit",
//     lname: "the Frog",
//     languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//     interests: {
//       music: ["guitar", "flute"],
//       dance: ["tap", "salsa"],
//       television: ["Black Mirror", "Stranger Things"]
//     }
//   },
//   {
//     fname: "Winnie",
//     lname: "the Pooh",
//     languages: ["Python", "Swift", "Java"],
//     interests: {
//       food: ["honey", "honeycomb"],
//       flowers: ["honeysuckle"],
//       mysteries: ["Heffalumps"]
//     }
//   },
//   {
//     fname: "Arthur",
//     lname: "Dent",
//     languages: ["JavaScript", "HTML", "Go"],
//     interests: {
//       space: ["stars", "planets", "improbability"],
//       home: ["tea", "yellow bulldozers"]
//     }
//   }
// ]


// function userLanguages(users){
//   for(var i = 0; i < users.length; i++){
//     console.log(users[i].fname+" "+ users[i].lname+" "+"knows"+ " "+users[i].languages);
//     console.log(users[i].fname+ " "+ "is also interested in"+" "+ Object.values(users[i].interests));
//     // return(users[i].fname+ users[i].lname+"knows"+users[i].languages)
//   }
// }
// userLanguages(users)

var first = "vanilla latte";
var second = "cookie";
console.log(swap([first, second]));
function swap(items){
  first = items[1];
  var second = items[0];
  return[first, second];
}
console.log(first, second);