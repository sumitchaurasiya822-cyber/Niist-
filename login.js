const SECRET_CODE = "cse2025";

function login(){

 let val = document.getElementById("input").value.trim().toLowerCase();  const students = ["sumit Kuamr Chaurasiya","Nikhil Dubey","Jay Srivastav","Dhananjay Srivastav","Hemant Kushwah","Jitendra Chouhan,"Harinarayan Dwivedi"," Gyanendra Singh","Bhaskar Dwivedi","Niranjan","Suhani Yaduwanshi","Muskan Lodhi","Surbhi Lodhi","Sakshi Bisen","Sakshi Kumari","Gaurav kushwaha","Vikash Baudh","Stayam Singh","Sanjan Patle","Rahul","Rama Kushwaha","Poonam Vaishy","Jyoti Dubey","Anamika Verma","Jyotika Singh","Harshita Singh","Diksha Paradhi","Anjali Paradhi",Mohit Dwivedi","Shivam","Sumit Pawar","Raunak Dubey","Pranav Gupta","Aniket Singh","Khushi Roi","Ashish Roi","Rajveer Singh","Poorvi Rawat"Rishav Patel","Monika Kashyap","Swati Kumari","Himanshu Thakre","Nikunj Nagoria",];

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
