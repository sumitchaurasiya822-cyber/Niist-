const students = [
  {name:"Sumi Kuamar Chaurasiya",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Nikhil Dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Jay Srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Dhananjay Srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"Harnarayan Dwivedi",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Gyanedra Singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Bhakar Dwivedi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Hemant Kushwah",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
{name:"Jitendra Chouhan",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Sanjan Patle",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Raunak Dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Anamika Verma",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"Jyoti Dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Muskan Lodhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Surbhi Lodhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Suhani Yaduwanshi",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"Gaurav Kushwaha",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Viakash Kumar Baudh",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Khushi Roi",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Sakshi Bisen",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
  {name:"Sakshi Kumari",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Poonam Vaishy",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Harshita Singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Jyotika Singh",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}. 
  {name:"Rama Kushwaha",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Swati kuamari",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Monika Kashyap",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Diksha Paradhi",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
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
