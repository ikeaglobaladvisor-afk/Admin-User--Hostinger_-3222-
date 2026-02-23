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


var totaluser = firebase.database().ref().child("mystery_box");
var alluser = firebase.database().ref().child("mystery_box");
var pendingLoan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');







var email = '';
var bonus = '';
var phone = '';
var falseone = '';
var falsetwo = '';

var status3 = '';
var morder = '';
var gender = 'd';



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
     content += '<td >' + val.bonus + '</td>';
     content += '<td >' + val.falseone + '</td>';
     content += '<td >' + val.falsetwo + '</td>';
     content += '<td >' + val.morder + '</td>';
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

  var ref51 = firebase.database().ref().child("mystery_box").child(key);

 
  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      email = snapshot4.val().email;
     phone = snapshot4.val().phone;
      bonus = snapshot4.val().bonus;

    falseone = snapshot4.val().falseone;
    falsetwo = snapshot4.val().falsetwo;
  
status3 = snapshot4.val().status;
morder = snapshot4.val().morder;



    }

      if (status3 == "Active") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }


      else {
      document.getElementById("pstatus").style.color = 'red'
    }

    



    $('#camount22').val(bonus);
    $('#camount25').val(morder);

 $('#camount23').val(falseone);
  $('#camount24').val(falsetwo);

 $('#pstatus').html(status3);


  });




}

function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}




function validate341() {

  var bonus2 = document.getElementById("camount22").value;
  var falseone2 = document.getElementById("camount23").value;
  var falseone3 = document.getElementById("camount24").value;
  var morder2 = document.getElementById("camount25").value;


  if (bonus2 == "") {
    alert("Mystery Bonus must be filled out");
    return false;
  }
  if (falseone2 == "") {
    alert("False One must be filled out");
    return false;
  }
    if (falseone3 == "") {
    alert("False Two must be filled out");
    return false;
  }


   if (morder2 == "") {
    alert("Order must be filled out");
    return false;
  }

    if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }



  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("mystery_box");






  if (didConfirm == true) {


    ref9.child(ke2).set({


    'bonus':bonus2,
    'email':email,
    'falseone':falseone2,
    'falsetwo':falseone3,
    'phone':phone,
    'status': gender,
    'morder':parseInt(morder2)



    }).then(() => {

      window.location = "mystery_box.html";
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