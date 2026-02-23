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





var wallet = firebase.database().ref().child("bank")


var ke2 = '';
var phone = '';



var anumber = '';

var bank_name = '';

var barnch = '';

var bmobile = '';

var date = '';

var distric = '';

var uname = '';




wallet.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();






      //  document.getElementById("aa").style.color = 'rgb(230, 175, 35)'




      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.uname + '</td>';
      content += '<td >' + val.mobile + '</td>';
      content += '<td >' + val.bank_name + '</td>';
    
      content += '<td >' + val.anumber + '</td>';
      content += '<td >' + val.bmobile + '</td>';
     content += '<td >' + val.date + '</td>';
      content += '<td >' + val.barnch + '</td>';
       content += '<td >' + val.distric + '</td>';
  




        "</tr>";





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







function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det2").style.display = "block"
  document.getElementById("rev").style.display = "none"

  var arr = document.getElementsByName('x').value;

  console.log(key);



  ke2 = key;


var ref55 = firebase.database().ref().child("user-account").child(key);





   var ref5 = firebase.database().ref().child("bank").child(key);



   ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




     
      anumber = snapshot4.val().anumber;
      bank_name = snapshot4.val().bank_name;
      barnch = snapshot4.val().barnch;
      bmobile = snapshot4.val().bmobile;
      date = snapshot4.val().date;
      distric = snapshot4.val().distric;
       uname = snapshot4.val().uname;






    }








  });






  ref55.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      phone = snapshot4.val().phone;



    }








  });


}







function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  // document.getElementById("det").style.display = "none"
  document.getElementById("det4").style.display = "none"
  document.getElementById("det2").style.display = "none"
  document.getElementById("det3").style.display = "none"
  document.getElementById("rev").style.display = "block"

}
function findTotal() {
  var arr = document.getElementsByName('qty');

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value))
      tot += parseInt(arr[i].value);
  }
  document.getElementById('total3').value = tot - 4;

  console.log(tot);
};



function validate3() {






  var ref8 = firebase.database().ref().child("bank");

  var didConfirm = confirm("Are you sure You want to submit??");



  if (didConfirm == true) {


console.log('key  :'+ke2);
console.log('phone  :'+phone);

    ref8.child(ke2).set({
     'uname': uname,
                    'bmobile': bmobile,
                    'anumber': anumber,
                    'barnch': barnch,
                    'bank_name': bank_name,
                    'distric': distric,
                    'mobile':phone,
                    'date':date


    });



  } else {
    return false;
  }





}

function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

}

function stats5(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det4").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;


  var ref511 = firebase.database().ref().child("wallet").child(key);




  ref511.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      amount2 = snapshot4.val().amount;
      w_code = snapshot4.val().code;
      vdate2 = snapshot4.val().date;
      id = snapshot4.val().id;
      process = snapshot4.val().process;
      vstatus2 = snapshot4.val().status;
      uid = snapshot4.val().uid;
      name5 = snapshot4.val().uname;
      vphone2 = snapshot4.val().uphone;




      //  rate = snapshot4.val().rate;



      //  sec = snapshot4.val().section;





    }



    var ref541 = firebase.database().ref().child("loan").child(uid);

    ref541.on("value", function (snapshot4) {
      if (snapshot4.exists()) {

        name5 = snapshot4.val().uname;


        amount5 = snapshot4.val().amount;
        loan5 = snapshot4.val().loan;
        month5 = snapshot4.val().month;
        kisti5 = snapshot4.val().kisti;
        vdate5 = snapshot4.val().date;
        vstatus5 = snapshot4.val().status;
        vphone5 = snapshot4.val().uphone;
        id5 = snapshot4.val().id;
        uid5 = snapshot4.val().uid;
        code5 = snapshot4.val().code;
        act_loan5 = snapshot4.val().act_loan;

        rate5 = snapshot4.val().rate;
        lserial = snapshot4.val().serial;



        //  sec = snapshot4.val().section;

      }


      console.log(rate5)
    });
    if (vstatus2 == "Approve") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }
    else if (vstatus2 == "Reject") {
      document.getElementById("pstatus").style.color = 'red'
    }


    else {

      document.getElementById("pstatus").style.color = 'rgb(230, 175, 35)'
    }



    $('#pstatus').html(vstatus2);






  });

}



function validate341() {

  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan");
  var ref10 = firebase.database().ref().child("wallet");
  var ref11 = firebase.database().ref().child("withdraw2");

  var valu22 = parseInt(amount2);
  var valu23 = parseInt(process);

  var nloan = valu22 - valu23;


  if (didConfirm == true) {


    if (gender == 'Approve') {
      ref9.child(uid).set({
        "amount": nloan.toString(),
        "date": vdate5,
        'kisti': kisti5,
        'month': month5,
        'status': vstatus5,
        'uname': name5,
        'uphone': vphone5,
        'loan': loan5,
        'code': code5,
        'id': id5,
        'act_loan': act_loan5,
        'rate': rate5,
        'serial': lserial

      });


      ref10.child(ke2).set({

        "amount": nloan.toString(),

        'code': w_code,
        "date": vdate2,
        'id': id,
        'process': '0',

        'status': gender,
        'serial': wserial,
        'uid': uid,

        'uname': name5,
        'uphone': vphone2,

      });


      ref11.push().set({

        "withrow": process,


        "rdate": vdate2,


        'status': gender,

        'uid': uid,

        'uname': name5,
        'uphone': vphone2,





      });

    }
    else {



      ref10.child(ke2).set({

        "amount": amount2,

        'code': w_code,
        "date": vdate2,
        'id': id,
        'process': process,

        'status': gender,

        'uid': uid,

        'uname': name5,
        'uphone': vphone2,

      });
    }










    location.reload();





  } else {
    return false;
  }

}
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