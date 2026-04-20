const students = [
  {name:"sumit kumar chaurasiya",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"nikhil dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"jay srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"dhananjay srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"harinarayan dwivedi",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"gyanedra singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"bhakar dwivedi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"hemant kushwah",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
{name:"jitendra chouhan",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"sanjan patle",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"raunak dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"anamika verma",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"jyoti dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"muskan lodhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"surbhi lodhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"suhani yaduwanshi",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"gaurav kushwaha",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"viakash kumar baudh",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"khushi roi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"sakshi bisen",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"sakshi kumari",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"poonam vaishy",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"harshita singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"jyotika singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}. 
  {name:"rama kushwaha",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"swati kumari",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"monika kashyap",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"diksha paradhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
];

let mode = localStorage.getItem("mode");
let user = localStorage.getItem("user");

let out = document.getElementById("output");

/* ALL STUDENTS */
if(mode === "all"){
  students.forEach(s=>{
    out.innerHTML += card(s,false);
  });
}

/* SINGLE STUDENT */
else if(mode === "single"){
  let found = students.find(s=>s.name === user);
  out.innerHTML = card(found,true);
}

function card(s,big){
  return `
  <div class="card glass fade ${big ? 'big':''}">
    <img src="${s.photo}">
    <h3>${s.name.toUpperCase()}</h3>
    <p>${s.class}</p>
    <p>Roll: ${s.roll}</p>
  </div>
  `;
}

function logout(){
  localStorage.clear();
  window.location.href="index.html";
}
