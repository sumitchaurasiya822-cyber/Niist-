const SECRET_CODE = "cse2025";

function login(){

  let val = document.getElementById("input").value.trim().toLowerCase();

  const students = ["sumit","rahul","aman","neha"];

  if(val === SECRET_CODE){
    localStorage.setItem("mode","all");
    window.location.href = "dashboard.html";
  }

  else if(students.includes(val)){
    localStorage.setItem("mode","single");
    localStorage.setItem("user",val);
    window.location.href = "dashboard.html";
  }

  else{
    alert("❌ Access Denied");
  }
}