// nmubers and maths
const a =10
const b =12
const c =8
// using the equation below find  d  d= a*b + b*c / a* c
let d= ((a*b) + (b*c))/(a*c)
console.log(Math.round(d));

// string & concatenation
const first_Name = "Amiebi"
const last_Name = "Sime"
const Middle_Name = "Edison"
 console.log(first_Name + " " + Middle_Name + ' ' +last_Name );

// undefine
let cat_can
let dog_can
let lion_can
console.log( cat_can, dog_can, lion_can);

// booleans
let Edison_was_not_in_class = true
let Edison_was__in_class = false
 console.log(Edison_was_not_in_class, Edison_was__in_class);


// arrsays

const names =[ "Amos", "Caroline", "Asime", "Claire", "lorrita", "suceess", "Edison"] 
const Numbers =[ 1, 2,3,4,5,6,7,8,9,10]
const Array_objects= [ 
   Student_one = { 
  Name: "Rachael Sea",
  score: 90,
  Phone: 08063755849,
  DOB:01-12-2006
 },

  Student_two= { 
  Name: "John Wall",
  score: 70,
  Phone: 08063755356,
  DOB:21-08-2004
 },

  Student_three= { 
  Name: "Stream lilly",
  score: 50,
  Phone: 08063755347,
  DOB:11-06-2003
 },

 Student_Four= { 
  Name: "Green Prince",
  score: 40,
  Phone: 0806370008,
  DOB:08-07-2005
 }
]
console.log(names.length);
console.log(names[3]);
console.log(Numbers)
console.log(Student_Four);





//  object
 const class_one= { 
  Name: "Rachael Sea",
  score: 90,
  Phone: 08063755849,
  DOB:01-12-2006
 }

 const class_Two= { 
  Name: "John Wall",
  score: 70,
  Phone: 08063755356,
  DOB:21-08-2004
 }

 const class_three= { 
  Name: "Stream lilly",
  score: 50,
  Phone: 08063755347,
  DOB:11-06-2003
 }

 const class_Four= { 
  Name: "Green Prince",
  score: 40,
  Phone: 0806370008,
  DOB:08-07-2005
 }
 console.log(class_three,class_Two,class_Four,class_one)
 console.log(class_three.Phone);


//  if and else statement

if(class_three.score >= 50){
  console.log("Congratulation you pass in class three");
}
else if(class_Four.score >= 50){
console.log("Congratulation you pass in class four");
}
else if(class_Two.score >= 50){
  console.log("Congratulation you pass in class two");
  }
  else if(class_one.score >= 50){
    console.log("Congratulation you pass in class one");
    }
    else{
      console.log("Sorry yon cant Progress to the next class");
    }
    
  
