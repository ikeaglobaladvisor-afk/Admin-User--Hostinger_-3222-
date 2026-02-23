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



var alluser = firebase.database().ref().child("user-account").orderByChild('id');

var email = '';
var passw = '';
var phone = '';
var icode = '';
var rdate = '';
var uid = '';
var my_code = '';
var icode = '';
var task = '';




var pre_balance = '0';
var post_balance = '0';
var t = '';
var t2 = '';

var pbalance = '';

var user_balance = '';

var balance_record = '';
var total_balance = '';
var total_deposit = '';


var out_fubnd= '';
var outphone = '';



var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
console.log(date + ' ' + time);





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
      content += '<td style="color:' + ss + ';font-weight: bold;">' + val.status + '</td>';

      content += '<td >' + val.rdate + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: blue;" onclick=stats("' + data.key + '")><i class="fa fa-plus"></i></a>' +


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


function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det6").style.display = "block"

  var arr = document.getElementsByName('x').value;


  document.getElementById("rev").style.display = "none"

  ke2 = key;

  var ref51 = firebase.database().ref().child("user-account").child(key);

  console.log(key);

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      email = snapshot4.val().email;

      id = snapshot4.val().id;


      phone = snapshot4.val().phone;


      uid = snapshot4.val().uid;





      //  sec = snapshot4.val().section;





    }




    console.log('mobile : ' + phone);



    $('#camount21').val(phone);


    var totalbalance3 = firebase.database().ref().child("mybalance").child(key);



    totalbalance3.on("value", function (snapshot4) {
      if (snapshot4.exists()) {



        post_balance = snapshot4.val().total_balance;
        pre_balance = snapshot4.val().total_balance;


      }

      console.log('post_balance  ' + parseInt(post_balance));


      t2 = parseInt(post_balance);
      pbalance = parseInt(pre_balance);

    });



    var outfund = firebase.database().ref().child("outfund").child(key);



    
    outfund.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      out_fubnd = snapshot4.val().balance;
     outphone = snapshot4.val().uphone;


    }











  });



    var userbalance = firebase.database().ref().child("userbalance").child(key);


    userbalance.once("value").then(function (snapshot) {



      user_balance = snapshot.numChildren() + 1;




    });


    var balancerecord = firebase.database().ref().child("balance_record").child(key);


    balancerecord.once("value").then(function (snapshot) {



      balance_record = snapshot.numChildren() + 1;




    });

    console.log('balance_record2 :' + balance_record);


    var totalbalance = firebase.database().ref().child("totalbalance");


    totalbalance.once("value").then(function (snapshot) {



      total_balance = snapshot.numChildren() + 1;






    });



    var deposit = firebase.database().ref().child("deposit");


    deposit.once("value").then(function (snapshot) {



      total_deposit = snapshot.numChildren() + 1;






    });










  });






}







function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  document.getElementById("det").style.display = "none"
  document.getElementById("det2").style.display = "none"
  document.getElementById("det3").style.display = "none"
  document.getElementById("det4").style.display = "none"
  document.getElementById("det5").style.display = "none"
  document.getElementById("rev").style.display = "block"

  notif = '';
  location.reload();

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













function validate55() {

  var w_code2 = document.getElementById("code").value;







  var ref102 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");
  if (didConfirm == true) {

    ref102.child(ke).set({

      "amount": amount2,
      "date": vdate2,
      'kisti': kisti2,
      'month': month2,
      'status': vstatus2,
      'uname': name5,
      'uphone': vphone2,
      'loan': loan2,
      'code': w_code2,
      'id': uid,
      'act_loan': act_loan,
      'rate': rate,
      'serial': lserial



    });





    // location.reload();



  } else {
    return false;
  }





}


function stats3(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det6").style.display = "block"
  document.getElementById("rev").style.display = "none"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);


  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {

      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      uid = snapshot4.val().id;
      w_code = snapshot4.val().code;
      act_loan = snapshot4.val().act_loan;
      lserial = snapshot4.val().serial;

      rate = snapshot4.val().rate;
      //  sec = snapshot4.val().section;





    }







    console.log(vstatus2)


    $('#camount21').val(amount2);
    $('#total3').val(amount2);







  });


}





function validate556() {

  // var mocname = document.getElementById("cname").value;
  var sourceInput2 = document.getElementById("addamount4").value;


  var t = parseInt(sourceInput2) + parseInt(post_balance);

  var t4 = parseInt(sourceInput2) + parseInt(post_balance);

  var t5 = parseInt(sourceInput2) + parseInt(out_fubnd);

  var database = firebase.database();




  var didConfirm = confirm("Are you sure You want to submit??");



  if (didConfirm == true) {


    console.log(ke2);


     console.log('total balance :' +t4);
      console.log('prebalance :' + post_balance);

    



    database.ref('balance_record').child(ke2).child(parseInt(6000 - user_balance)).set({


      'total_balance': t,

      'pre_balance': post_balance,
      'title': 'Deposit',

      'cdate': date + ' ' + time,
      'amount': sourceInput2



    });


    database.ref('userbalance').child(ke2).child(parseInt(6000 - user_balance)).set({
      'title': 'Deposit',

      'serial': user_balance,

      'amount': parseInt(sourceInput2),
      'cdate': date + ' ' + time,

    });



    database.ref('totalbalance').child(parseInt(6000000 - total_balance)).set({
      'title': 'Deposit',


      'serial': total_balance,

      'amount': parseInt(sourceInput2),
      'cdate': date + ' ' + time,
      'phone': phone,

    });



    database.ref('mybalance').child(ke2).set({


      'total_balance': parseInt(t4),

      'pre_balance': parseInt(post_balance),


    });



   


    

  







    

    database.ref('deposit').child(parseInt(6000000 - total_deposit)).set({
      'title': 'Deposit',
      'serial': total_deposit,
      'service': 0,


      'amount': parseInt(sourceInput2),
      'cdate': date + ' ' + time,
      'phone': phone,

    });



 database.ref('deposit_slot').child(ke2).set({


      'amount': parseInt(sourceInput2),
     
      'phone': phone,

    }).then(() => {

      window.location = "deposit_list.html";
    });





   

  } else {
    return false;
  }





}