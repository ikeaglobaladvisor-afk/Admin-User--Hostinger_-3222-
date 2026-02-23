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
var alluser = firebase.database().ref().child("my-task").orderByChild('id');
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
var gender2 = 'd';

var max_task = '';

var t_amount = '';
var serial3 = '';



var out_fubnd = '';
var outphone = '';

var mis_box = 'e';
var m_box = '';
var order_type = '';

var with_sta = '';
var credit_score = '';

var ordernotifi= '';

var select = document.getElementById("squareSelect");

var order_ty = firebase.database().ref("order_type");

order_ty.once("value").then(function(snapshot) {
  
    if(snapshot.exists()){
  
      var content = '';
      
      
      
      snapshot.forEach(function(data){

       
      
        select.innerHTML +="<option>"+data.val().order_type+"</option>";
       // console.log(data.val().section);
  
        });

      //  console.log(select);

 
  }
  
  
    });




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
      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.email + '</td>';
      content += '<td >' + val.phone + '</td>';
      content += '<td style="font-weight: bold;">' + val.task + '/' + val.max_task + '</td>';
      content += '<td >' + val.order_type + '</td>';
      content += '<td style="color:' + ss + ';font-weight: bold;">' + val.status + '</td>';


      content += '<td >' + val.t_amount.toLocaleString('en') + ' tk' + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" +
        '<a href="#" data-tip="delete" style="color: blue;" onclick=stats("' + data.key + '")><i class="fa fa-pencil"></i></a>' + '<a href="#" data-tip="delete" style="color: red;" onclick=dtl("' + data.key + '")><i class="fa fa-trash"></i></a>'


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
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  //  document.getElementById("det").style.display = "none"
  document.getElementById("rev").style.display = "block"
  document.getElementById("det3").style.display = "none"

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

    }).then(() => {

      window.location = "user_task.html";
    });;







   // location.reload();



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


    }).then(() => {

      window.location = "user_task.html";
    });;








    //location.reload();
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



    }).then(() => {

      window.location = "user_task.html";
    });;


    //location.reload();



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


    }).then(() => {

      window.location = "user_task.html";
    });;


    //location.reload();



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


function dtl(key) {

  var ref5 = firebase.database().ref().child("users").child(key);
  var ref6 = firebase.database().ref().child("id_verify").child(key);
  var signature = firebase.database().ref().child("signature").child(key);
  var bank = firebase.database().ref().child("bank").child(key);
  var mobile = firebase.database().ref().child("mobile").child(key);
  var eligibility = firebase.database().ref().child("education").child(key);

  var nominee = firebase.database().ref().child("nominee").child(key);
  //var userDataRef2 = firebase.database().ref().child("subjectsetting").child(res).child("subtype").child(key);




  var didConfirm = confirm("Are you sure You want to delete??");
  if (didConfirm == true) {

    location.reload();

    ref5.remove();
    ref6.remove();
    signature.remove();
    bank.remove();
    mobile.remove();
    eligibility.remove();
    //  withdraw.remove();
    //  nominee.remove();
    //  userDataRef2.remove();




  } else {
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

function validate336() {
  gender2 = document.querySelector('input[name = optionsRadios]:checked').value;

}


function validate331() {
  mis_box = document.querySelector('input[name = optionsRadios]:checked').value;

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

  var ref51 = firebase.database().ref().child("my-task").child(key);

  var ref101 = firebase.database().ref().child("task-notification").child(key);

  var witpass = firebase.database().ref().child("withdrawpass").child(key);
  var outfund = firebase.database().ref().child("outfund").child(key);

  var withsta = firebase.database().ref().child("withdeaw_status").child(key);

  var cre = firebase.database().ref().child("credit_score").child(key);

  var ornoti = firebase.database().ref().child("order-notification").child(key);

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      email = snapshot4.val().email;
      // icode = snapshot4.val().icode;
      id = parseInt(snapshot4.val().id);
   //   m_box = snapshot4.val().m_box;
      max_task = parseInt(snapshot4.val().max_task);

      order_type = snapshot4.val().order_type;
      phone = snapshot4.val().phone;
      // rdate = snapshot4.val().rdate;
      serial3 = parseInt(snapshot4.val().serial);
      status2 = snapshot4.val().status;
      //uid = snapshot4.val().uid;
      task = parseInt(snapshot4.val().task);
      t_amount = parseInt(snapshot4.val().t_amount);




    }
    if (status2 == "Active") {
      document.getElementById("pstatus").style.color = 'rgb(12, 182, 6)'
    }


      else if (status2 == "Disable") {
      document.getElementById("pstatus").style.color = 'red'
    }



    else {

      document.getElementById("pstatus").style.color = 'rgba(40, 83, 182, 1)'
    }


  





    console.log(status2)


    $('#pstatus').html(status2);
    $('#camount22').val(t_amount);
    $('#max_task').val(max_task);
   // $('#pstatus2').html(m_box);
    $('#oo').html(order_type);





  });

  ref101.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      notif = snapshot4.val().nitification;
      //heading = snapshot4.val().heading;





    }








    $('#pstatus').html(status2);
    //$('#heading').val(heading);


    if (notif == '') {
      $('#noti').val(notif2);
      return false;
    }
    else {
      $('#noti').val(notif);
    }

    // $('#noti').val(notif)




  });




  ornoti.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      ordernotifi = snapshot4.val().nitification;
      //heading = snapshot4.val().heading;





    }

    $('#ordernoti').val(ordernotifi);





  });






    withsta.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      with_sta = snapshot4.val().status;




      console.log('defefrfrfrffff   '+with_sta)





    }
    if (with_sta == "Active") {
      document.getElementById("wstatus").style.color = 'rgb(12, 182, 6)'
    }


      else if (with_sta == "Disable") {
      document.getElementById("wstatus").style.color = 'red'
    }



    else {

      document.getElementById("wstatus").style.color = 'rgba(40, 83, 182, 1)'
    }


  





    console.log(status2)


    $('#wstatus').html(with_sta);
 





  });




  outfund.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      out_fubnd = snapshot4.val().balance;
      outphone = snapshot4.val().uphone;


    }












    $('#camount212').val(out_fubnd);








  });


  witpass.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      withps = snapshot4.val().withpass;
      withphon = snapshot4.val().phone;


    }



    console.log('gggggg  ' + withphon);


    $('#camount21').val(withps);








  });



   cre.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      credit_score = snapshot4.val().creadit;
     


    }









    console.log('gggggg  ' + credit_score);


    $('#cscore').val(credit_score);








  });




}




function validate34() {

  var noti = document.getElementById("noti").value;
  var noti2 = document.getElementById("ordernoti").value;


  if (noti == "") {
    alert("Notification must be filled out");
    return false;
  }


    if (noti2 == "") {
    alert("Order Notification must be filled out");
    return false;
  }





  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("my-task");
  var ref10 = firebase.database().ref().child("task-notification");

  var ref107 = firebase.database().ref().child("order-notification");



  if (didConfirm == true) {


    ref9.child(ke2).set({


      'email': email,
      'id': id,
     // 'm_box': m_box,
      'max_task': max_task,
      'order_type': order_type,
      //  'passw': passw,
      'phone': phone,
      'serial': serial3,
      'status': gender,
      't_amount': t_amount,
      // 'icode': icode,
      'task': task,








    });

     ref107.child(ke2).set({
      "nitification": noti2,

   



    });








    ref10.child(ke2).set({
      "nitification": noti,

      'uphone': phone,



    }).then(() => {

      window.location = "user_task.html";
    });;





    //location.reload();





  } else {
    return false;
  }



}




function validate36() {

 





  if (mis_box == "e") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref91 = firebase.database().ref().child("my-task");






  if (didConfirm == true) {


    ref91.child(ke2).set({


      'email': email,
      'id': id,
     // 'm_box': mis_box,
      'max_task': max_task,
      'order_type': order_type,
      //  'passw': passw,
      'phone': phone,
      'serial': serial3,
      'status': status2,
      't_amount': t_amount,
      // 'icode': icode,
      'task': task,








    }).then(() => {

      window.location = "user_task.html";
    });



  




    //location.reload();





  } else {
    return false;
  }



}






function validate341() {

  var t_amount2 = document.getElementById("camount22").value;
  var max_task2 = document.getElementById("max_task").value;



  if (t_amount2 == "") {
    alert("Trail Balance must be filled out");
    return false;
  }




  if (max_task2 == '') {
    alert("Task must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref102 = firebase.database().ref().child("my-task");





  if (didConfirm == true) {


    ref102.child(ke2).set({


       'email': email,
      'id': id,
    //  'm_box': m_box,
      'max_task': parseInt(max_task2),
      'order_type': order_type,
      //  'passw': passw,
      'phone': phone,
      'serial': serial3,
      'status': status2,
      't_amount': parseInt(t_amount2),
      // 'icode': icode,
      'task': task,




    }).then(() => {

      window.location = "user_task.html";
    });
;













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



    }).then(() => {

      window.location = "user_task.html";
    });





  //  location.reload();





  } else {
    return false;
  }



}





function validate348() {




  var didConfirm = confirm("Are you sure You want to submit??");
  var ref102 = firebase.database().ref().child("my-task");


  var ref1022 = firebase.database().ref().child("order_record").child(ke2);


const otype = document.getElementById('squareSelect').value;


console.log(otype)


  if (didConfirm == true) {


 ref1022.remove();



    ref102.child(ke2).set({


       'email': email,
      'id': id,
    //  'm_box': m_box,
      'max_task': max_task,
      'order_type': otype,
      //  'passw': passw,
      'phone': phone,
      'serial': serial3,
      'status': status2,
      't_amount': t_amount,
      // 'icode': icode,
      'task': 0,




    }).then(() => {

      window.location = "user_task.html";
    });
;













  } else {
    return false;
  }



}





function validate344() {

  var noti = document.getElementById("camount212").value;


  if (noti == "") {
    alert("Amount must be filled out");
    return false;
  }





  var didConfirm = confirm("Are you sure You want to submit??");
  var ref10 = firebase.database().ref().child("outfund");






  if (didConfirm == true) {





    ref10.child(ke2).set({

      'balance': noti,
      'uphone': outphone



    }).then(() => {

      window.location = "user_task.html";
    });;





    // location.reload();





  } else {
    return false;
  }



}








function validate349() {

 



  if (gender2 == "d") {
    alert("Status must be filled out");
    return false;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("withdeaw_status");






  if (didConfirm == true) {




    ref9.child(ke2).set({
      

      'status': gender2,



    }).then(() => {

      window.location = "user_task.html";
    });





    //location.reload();





  } else {
    return false;
  }



}




function validate347() {

  var noti = document.getElementById("cscore").value;


  if (noti == "") {
    alert("Amount must be filled out");
    return false;
  }





  var didConfirm = confirm("Are you sure You want to submit??");
  var ref10 = firebase.database().ref().child("credit_score");






  if (didConfirm == true) {





    ref10.child(ke2).set({

      'creadit': noti,
    



    }).then(() => {

      window.location = "user_task.html";
    });;





    // location.reload();





  } else {
    return false;
  }



}


