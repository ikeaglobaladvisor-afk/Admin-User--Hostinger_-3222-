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


var totaluser = firebase.database().ref().child("users");
var alluser = firebase.database().ref().child("user-account").orderByChild('id');
var pendingLoan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');




var total = '';
var ploan = '';

var stimage = '';
var stimage2 = '';
var stimage3 = '';
var sigImage = '';

var stimage4 = '';
var stimage5 = '';
var stimage6 = '';
var nmane = '';
var nnid = '';

var ke = '';


var phone = '';
var name = '';
var nid = '';
var content15 = '';

var balance = '';
var date = '';
var status = '';
var status2 = '';
var id = '';
var rdate = '';

var accnumber = '';
var bankname = '';
var branchname = '';
var username = '';




var friendnumber = '';
var nomineenumber = '';
var usernumber = '';



var email = '';
var passw = '';
var phone = '';
var icode = '';
var rdate = '';
var uid = '';
var my_code = '';
var icode = '';
var task = '';


var withps = '';
var withphon = '';


var gender = 'd';

var t_user = '';



alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var ss = '';

      var val = data.val();

      if (val.status == "Active") {
        ss = "green"
      }


      else {
        ss = 'red'
      }

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.email + '</td>';
      content += '<td >' + val.phone + '</td>';
      content += '<td >' + val.my_code + '</td>';
     
      content += '<td >' + val.icode + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + 
        '<a href="#" data-tip="delete" style="color: green;" onclick=stats("' + data.key + '")><i class="fa fa-eye"></i></a>' + 


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




function myclose() {
  // get user input
location.reload();

}






function validate() {



  console.log(ke)





  var mob = document.getElementById("mob").value;
  var name = document.getElementById("name").value;
  var nid2 = document.getElementById("nid2").value;



  var ref7 = firebase.database().ref().child("users");
  var ref8 = firebase.database().ref().child("id_verify");


  console.log(mob)
  console.log(name)
  console.log(nid2)

  console.log(pass)


  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref7.child(ke).set({
      "phone": mob,
      "balance": balance,
      'date': date,
      'status': status,
      'nid': nid2,
      'name': name,
      'password': pass,
      'bank': ubank,
      'id': id,
      'serial': userial


    });


    ref8.child(ke).set({
      'name': name,
      'nid': nid2,
      'status': status2,
      'rdate': rdate,
      'image': stimage,
      'image2': stimage2,
      'image3': stimage3,

    });







    location.reload();



  } else {
    return false;
  }





}

function validate2() {

  var accnumber = document.getElementById("bnumber").value;
  var bankname = document.getElementById("bname").value;
  var branchname = document.getElementById("bbranch").value;
  var username = document.getElementById("buname").value;


  var ref9 = firebase.database().ref().child("bank");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref9.child(ke).set({
      "accnumber": accnumber,
      "bankname": bankname,
      'branchname': branchname,
      'username': username,


    });








    location.reload();
    /*
    
      ref6.child(k).set({
        'name': itemName,
        'nid': itemQuantity,
        'status': 'active',
        'rdate': dat,
        'image': urlDownload,
        'image2': urlDownload2,
        'image3': urlDownload3,
    
      });
    
    
      addCategory.child(incomeDeta).push().set({
        "phone": phone,
        "balance": balance,
        'date': date,
        'status': status,
        'nid': itemQuantity,
        'name': itemName,
        'id': id,
    
      });
    
    
      */


  } else {
    return false;
  }





}

function validate3() {

  var friendnumber2 = document.getElementById("friendnumber").value;
  var nomineenumber2 = document.getElementById("nomineenumber").value;
  var usernumber2 = document.getElementById("usernumber").value;



  var ref10 = firebase.database().ref().child("mobile");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref10.child(ke).set({
      "friendnumber": friendnumber2,
      "nomineenumber": nomineenumber2,
      'usernumber': usernumber2,



    });


    location.reload();



  } else {
    return false;
  }





}



function validate4() {

  var car2 = document.getElementById("car").value;
  var education2 = document.getElementById("edu").value;
  var family2 = document.getElementById("family").value;
  var home2 = document.getElementById("home").value;
  var job2 = document.getElementById("occo").value;
  var purpose2 = document.getElementById("purpose").value;
  var income2 = document.getElementById("income").value






  var ref101 = firebase.database().ref().child("education");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref101.child(ke).set({
      "car": car2,
      "education": education2,
      'family': family2,
      "home": home2,
      "income": income2,
      'job': job2,
      'purpose': purpose2,


    });


    location.reload();



  } else {
    return false;
  }





}





function validate8() {


  var name = document.getElementById("nname").value;
  var nid2 = document.getElementById("nnid2").value;




  var ref81 = firebase.database().ref().child("nominee");
  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {



    ref81.child(ke).set({
      'name': name,
      'nid': nid2,

      'image': stimage4,
      'image2': stimage5,
      'image3': stimage6,

    });







    location.reload();
    /*
    
      ref6.child(k).set({
        'name': itemName,
        'nid': itemQuantity,
        'status': 'active',
        'rdate': dat,
        'image': urlDownload,
        'image2': urlDownload2,
        'image3': urlDownload3,
    
      });
    
    
      addCategory.child(incomeDeta).push().set({
        "phone": phone,
        "balance": balance,
        'date': date,
        'status': status,
        'nid': itemQuantity,
        'name': itemName,
        'id': id,
    
      });
    
    
      */


  } else {
    return false;
  }





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
  document.getElementById("closw").style.display = "block";

  var arr = document.getElementsByName('x').value;

  console.log(arr);

  document.getElementById("rev").style.display = "none"

  ke2 = key;

  console.log(ke2);

   

  var ref51 = firebase.database().ref().child("user-account").child(key);

  var ref101 = firebase.database().ref().child("notification").child(key);

  var witpass = firebase.database().ref().child("withdrawpass").child(key);

 
  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      my_code = (snapshot4.val().my_code).toString();

      


    }

    
  


var icuser = firebase.database().ref().child("user-account").orderByChild('icode').equalTo(my_code);

    
icuser.once("value").then(function (snapshot) {

t_user = snapshot.numChildren();



  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var ss = '';

      var val = data.val();

 

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.email + '</td>';
      content += '<td >' + val.phone + '</td>';
      content += '<td >' + val.my_code + '</td>';
     
      content += '<td >' + val.icode + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + 
        '<a href="#" data-tip="delete" style="color: green;" onclick=stats("' + data.key + '")><i class="fa fa-eye"></i></a>' + 


      "</td>";


      content += '</tr>';






    });







    $('#atttbl_posts_body3').html(content);




  }

  $('#t_user').html(t_user);


});



    console.log(my_code)











  });



}




function validate34() {

  var noti = document.getElementById("noti").value;


  if (noti == "") {
    alert("Notification must be filled out");
    return false;
  }




  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("user-account");
  var ref10 = firebase.database().ref().child("notification");



  

  if (didConfirm == true) {


    ref9.child(ke2).set({
     

       'email': email,
      'passw': passw,
      'phone': phone,
      'icode': icode,
      'status': gender,
      'id': id,
      'rdate': rdate,
      'uid': uid,
      'task':task,
      'my_code': my_code



    });


    ref10.child(ke2).set({
      "nitification": noti,

      'uphone': phone,
     


    });



    

    location.reload();





  } else {
    return false;
  }

  

}



function validate340() {

  var noti = document.getElementById("camount21").value;


  if (noti == "") {
    alert("Password must be filled out");
    return false;
  }





  var didConfirm = confirm("Are you sure You want to submit??");
  var ref10 = firebase.database().ref().child("withdrawpass");




  

  if (didConfirm == true) {





    ref10.child(ke2).set({
      "withpass": noti,

      'phone': withphon,
     


    });



    

    location.reload();





  } else {
    return false;
  }

  

}