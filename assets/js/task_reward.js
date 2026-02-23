const firebaseConfig = {
  apiKey: "AIzaSyBRsd_spphdiAQFhWxVTH04QjfQ9YVW64o",
  authDomain: "wayfair-90895.firebaseapp.com",
  databaseURL: "https://wayfair-90895-default-rtdb.firebaseio.com",
  projectId: "wayfair-90895",
  storageBucket: "wayfair-90895.firebasestorage.app",
  messagingSenderId: "467519952493",
  appId: "1:467519952493:web:2af581fe3c3ead11ed9164",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var totaluser = firebase.database().ref().child("task_reward");
var alluser = firebase.database().ref().child("task_reward");
var pendingLoan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');







var email = '';
var bonus = '';
var phone = '';
var falseone = '';
var falsetwo = '';

var status3 = '';
var morder = '';
var gender = 'd';




  var day1 = '';
   var day2 = '';
   var day3 = '';
   var day4 = '';
   var day5 = '';
   var day6 = '';
   var day7 = '';
   var task1= '';
   var task2 = '';
   var task3 = '';
   var task4 = '';
   var task5 = '';
   var task6 = '';
   var task7 = '';
   var regulator= '';
   var regulator2 = '';
   var task_status= '';



alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var ss = '';
      var ss2 = '';

      var val = data.val();

        if (val.status == "Active") {
        ss = "green"
      }

      else if (val.status == "Disable")
      {
        ss = 'red'
      }


      else {
        ss = 'blue'
      }

    


  

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
     
      content += '<td >' + val.email + '</td>';
      content += '<td >' + val.phone + '</td>';
     content += '<td >' + val.regulator + '</td>';

       content += '<td style="color:' + ss + ';font-weight: bold;">' + val.status + '</td>';
    
  


    


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" +
        '<a href="#" data-tip="delete" style="color: blue;" onclick=stats("' + data.key + '")><i class="fa fa-pencil"></i></a>' + 


      "</td>";


      content += '</tr>';






    });







    $('#atttbl_posts_body').html(content);


    let currentPage = 1;
    let rowsPerPage = 10;
    let totalPages;
    const pageNumbers = document.getElementById("pageNumbers");

    function paginateTable() {
      let table = document.getElementById("myTable");
      let rows = Array.from(table.rows).slice(1);
      totalPages = Math.ceil(rows.length / rowsPerPage);

      rows.forEach(row => row.style.display = "none");

      let start = (currentPage - 1) * rowsPerPage;
      let end = start + rowsPerPage;
      rows.slice(start, end).forEach(row => row.style.display = "");
      pageNumbers.innerHTML = "";
      createPageLink("<<", 1);
      createPageLink("<", currentPage - 1);

      let startPageNumber = currentPage < 5 ? 1 : (currentPage > totalPages - 2 ? totalPages - 4 : currentPage - 2);
      let endPageNumber = totalPages < 5 ? totalPages : (currentPage <= totalPages - 2 ? startPageNumber + 4 : totalPages);
      for (let i = startPageNumber; i <= endPageNumber; i++) {
        createPageLink(i, i);
      }
      createPageLink(">", currentPage + 1);
      createPageLink(">>", totalPages);

      setActivePageNumber();
      from.innerHTML = (currentPage - 1) * rowsPerPage + 1;
      to.innerHTML = currentPage === totalPages ? rows.length : (currentPage) * rowsPerPage;
      totalTableEntries.innerHTML = rows.length;

    }

    paginateTable();

    function changePage(e, pageNumber) {
      if ((pageNumber == 0) || (pageNumber == totalPages + 1)) return;
      e.preventDefault();
      currentPage = pageNumber;
      pageNumberInput.value = "";
      paginateTable();
    }

    function setActivePageNumber() {
      document.querySelectorAll("#pageNumbers a").forEach(a => {
        if (a.innerText == currentPage) {
          a.classList.add("active");
        }
      });
    }

    function createPageLink(linkText, pageNumber) {
      let pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.innerHTML = linkText;
      pageLink.addEventListener("click", function (e) {
        changePage(e, pageNumber);
      });
      pageNumbers.appendChild(pageLink);
    }

    goToPageButton.addEventListener("click", (e) => {
      changePage(e, pageNumberInput.value);
    });
  }


});





function myFunction() {
  // get user input
  const userInput = document.getElementById("myInput").value.trim().toUpperCase();

  document.querySelectorAll('tr[name="bc"]').forEach((item) => {
    const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');

    if (tdTxt.indexOf(userInput) === -1) {
      item.style.display = "none"
    } else {
      item.style.display = "";
    }

  })
}



function myFunction2() {
  // get user input
  const userInput = document.getElementById("myInput").value.trim().toUpperCase();

  document.querySelectorAll('tr[name="bc"]').forEach((item) => {
    const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');

    if (tdTxt.indexOf(userInput) === -1) {
      item.style.display = "none"
    } else {
      item.style.display = "";
    }

  })
}






function reverseTable() {
  var table = document.getElementById("atttbl_posts_body");
  var rows = Array.from(table.rows).slice(1); // Get all rows except the header row

  // Reverse the rows array
  rows.reverse();

  // Re-add the rows in reverse order
  rows.forEach(function (row) {
    table.appendChild(row);
  });
}



function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}




function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);

  document.getElementById("rev").style.display = "none"

  ke2 = key;

  console.log(ke2);

  var ref51 = firebase.database().ref().child("task_reward").child(key);

 
  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      day1 = parseInt(snapshot4.val().day1);
                    day2 = parseInt(snapshot4.val().day2);
                    day3 = parseInt(snapshot4.val().day3);
                    day4 = parseInt(snapshot4.val().day4);
                    day5 = parseInt(snapshot4.val().day5);
                    day6 = parseInt(snapshot4.val().day6);
                    day7 = parseInt(snapshot4.val().day7);



                    task1 = snapshot4.val().task1;
                    task2 = snapshot4.val().task2;
                    task3 = snapshot4.val().task3;
                    task4 = snapshot4.val().task4;
                    task5 = snapshot4.val().task5;
                    task6 = snapshot4.val().task6;
                    task7 = snapshot4.val().task7;

                    email = snapshot4.val().email;
                    phone = snapshot4.val().phone;

               
                    task_status = snapshot4.val().status;
                    regulator = parseInt(snapshot4.val().regulator);

                   


    }

      if (task_status == "Active") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }


      else {
      document.getElementById("pstatus").style.color = 'red'
    }

    



    $('#day1').val(day1);
    $('#day2').val(day2);
    $('#day3').val(day3);
    $('#day4').val(day4);
    $('#day5').val(day5);
    $('#day6').val(day6);
    $('#day7').val(day7);
$('#pstatus').html(task_status);




  });




}

function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}




function validate341() {

  var day11 = document.getElementById("day1").value;
  var day12 = document.getElementById("day2").value;
  var day13 = document.getElementById("day3").value;
  var day14 = document.getElementById("day4").value;
  var day15 = document.getElementById("day5").value;
  var day16 = document.getElementById("day6").value;
  var day17 = document.getElementById("day7").value;


  if (day11 == "") {
    alert("Task must be filled out");
    return false;
  }

   if (day12 == "") {
    alert("Task must be filled out");
    return false;
  }
 

   if (day13 == "") {
    alert("Task must be filled out");
    return false;
  }
 

   if (day14 == "") {
    alert("Task must be filled out");
    return false;
  }
 

   if (day15 == "") {
    alert("Task must be filled out");
    return false;
  }
 

   if (day16 == "") {
    alert("Task must be filled out");
    return false;
  }
 

   if (day17 == "") {
    alert("Task must be filled out");
    return false;
  }
 
 

    if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }



  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("task_reward");






  if (didConfirm == true) {


    ref9.child(ke2).set({


 'status':gender,
                                 'day1':parseInt(day11),
                                 'day2':parseInt(day12),
                                 'day3':parseInt(day13),
                                 'day4':parseInt(day14),
                                 'day5':parseInt(day15),
                                 'day6':parseInt(day16),
                                 'day7':parseInt(day17),
                                 'regulator':regulator,
                                 'task1':task1,
                                 'task2':  task2,
                                 'task3': task3,
                                 'task4': task4,
                                 'task5': task5,
                                 'task6':task6,
                                 'task7':task7,
                                 'email':email,
                                 'phone':phone,



    }).then(() => {

      window.location = "task_reward.html";
    });


  






  } else {
    return false;
  }



}



function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  //  document.getElementById("det").style.display = "none"
  document.getElementById("rev").style.display = "block"
  document.getElementById("det3").style.display = "none"

}