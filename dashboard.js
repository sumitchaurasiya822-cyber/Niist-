const students = [
  {name:"sumit",photo:"https://via.placeholder.com/300",class:"CSE",roll:77},
  {name:"Nikhil Dubey",photo:"https://via.placeholder.com/300",class:"CSE",roll:41},
  {name:"Jay Srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:3},
  {name:"Dhananjay Srivastav",photo:"https://via.placeholder.com/300",class:"CSE",roll:4}
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
