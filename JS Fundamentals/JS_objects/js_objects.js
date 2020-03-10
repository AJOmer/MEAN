let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function info(arr){
	for(var i = 0; i< arr.length; i++){
		console.log("Name: "+ arr[i].name+ ","+ " cohort: "+ arr[i].cohort)
	}
}

info(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


function employees(obj){
	for(let categories in obj){
		console.log(categories.toUpperCase());
		for(var i = 0; i < obj[categories].length; i++){
			var count = obj[categories][i].last_name.length + users[categories][i].first_name.length;
			console.log(i+1 + " - "+ users[categories][i].last_name.toUpperCase()+", "+ users[categories][i].first_name.toUpperCase()+ " - " + count)
		}
	}
}

employees(users);