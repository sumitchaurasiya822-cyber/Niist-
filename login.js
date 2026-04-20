const SECRET_CODE = function login() let val = document.getElementById("input").value.trim().toLowerCase();  const students = ["sumit kumar chaurasiya","nikhil dubey","jay srivastav","dhananjay srivastav","hemant kushwah","jitendra couhan","harinarayan dwivedi"," gyanendra singh","bhaskar dwivedi","niranjan","suhani yaduwanshi","muskan lodhi","surbhi lodhi","sakshi bisen","sakshi kumari","gaurav kushwaha","vikash baudh","stayam singh","sanjan patle","rahul","rama kushwaha","poonam vaishy","jyoti dubey","anamika verma","jyotika singh","harshita singh","diksha paradhi","anjali paradhi","mohit dwivedi","shivam","sumit pawar","raunak dubey","pranav gupta","aniket singh","khushi roi","ashish roi","rajveer singh","poorvi rawat","rishav patel","monika kashyap","swati kumari","himanshu thakre","nikunj nagoria",];

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
