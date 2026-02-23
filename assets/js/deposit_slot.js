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



var alluser = firebase.database().ref().child("deposit_slot2");



var phone = '';
var slot1 = 'a';
var slot2 = 'a';
var slot3 = 'a';
var slot4 = 'a';
var slot5 = 'a';
var slot6 = 'a';
var slot7 = 'a';
var slot8 = 'a';



var slotone = '';
var slottwo = '';
var slotthree = '';
var slotfour = '';
var slotfive = '';
var slotsix = '';
var slotseven = '';
var sloteight = '';



alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {


      var ss = '';
      var ss2 = '';
      var ss3 = '';
      var ss4 = '';
      var ss5 = '';
      var ss6 = '';
      var ss7 = '';
      var ss8 = '';

      var val = data.val();

      if (val.slot1 == "Active") {
        ss = "green"
      }


      else {
        ss = 'red'
      }


       if (val.slot2 == "Active") {
        ss2 = "green"
      }


      else {
        ss2 = 'red'
      }


       if (val.slot3 == "Active") {
        ss3 = "green"
      }


      else {
        ss3 = 'red'
      }

         if (val.slot4 == "Active") {
        ss4 = "green"
      }


      else {
        ss4 = 'red'
      }


         if (val.slot5 == "Active") {
        ss5 = "green"
      }


      else {
        ss5 = 'red'
      }



         if (val.slot6 == "Active") {
        s6 = "green"
      }


      else {
        ss6 = 'red'
      }



         if (val.slot7 == "Active") {
        ss7 = "green"
      }


      else {
        ss7 = 'red'
      }


         if (val.slot8 == "Active") {
        ss8 = "green"
      }


      else {
        ss8 = 'red'
      }




      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
  
      content += '<td >' + val.phone + '</td>';
      content += '<td style="color:' + ss + ';">' + val.slot1 + '</td>';
      content += '<td style="color:' + ss2 + ';">' + val.slot2 + '</td>';
      content += '<td style="color:' + ss3 + ';">' + val.slot3 + '</td>';
      content += '<td style="color:' + ss4 + ';">' + val.slot4 + '</td>';
      content += '<td style="color:' + ss5 + ';">' + val.slot5 + '</td>';
      content += '<td style="color:' + ss6 + ';">' + val.slot6 + '</td>';
      content += '<td style="color:' + ss7 + ';">' + val.slot7 + '</td>';
      content += '<td style="color:' + ss8 + ';">' + val.slot8 + '</td>';



      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" +
        '<a href="#" data-tip="delete" style="color: blue;" onclick=stats("' + data.key + '")><i class="fa fa-pencil"></i></a>' 


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







function validate331() {
  slot1 = document.querySelector('input[name = optionsRadios1]:checked').value;

  console.log(slot1);

}


function validate332() {
  slot2 = document.querySelector('input[name = optionsRadios2]:checked').value;

  console.log(slot2);

}


function validate333() {
  slot3 = document.querySelector('input[name = optionsRadios3]:checked').value;

  console.log(slot3);

}

function validate334() {
  slot4 = document.querySelector('input[name = optionsRadios4]:checked').value;

  console.log(slot4);

}


function validate335() {
  slot5 = document.querySelector('input[name = optionsRadios5]:checked').value;

  console.log(slot5);

}


function validate336() {
  slot6 = document.querySelector('input[name = optionsRadios6]:checked').value;

  console.log(slot6);

}


function validate337() {
  slot7 = document.querySelector('input[name = optionsRadios7]:checked').value;

  console.log(slot7);

}



function validate338() {
  slot8 = document.querySelector('input[name = optionsRadios8]:checked').value;

  console.log(slot8);

}


function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  var arr = document.getElementsByName('x').value;


  document.getElementById("rev").style.display = "none"

  ke2 = key;










  var ref51 = firebase.database().ref().child("deposit_slot2").child(key);

  console.log(key);


  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      phone = snapshot4.val().phone;
    
     slotone = snapshot4.val().slot1;
     slottwo = snapshot4.val().slot2;
     slotthree = snapshot4.val().slot3;
     slotfour = snapshot4.val().slot4;
     slotfive = snapshot4.val().slot5;
     slotsix = snapshot4.val().slot6;
     slotseven = snapshot4.val().slot7;
     sloteight = snapshot4.val().slot8;
     



    }

   if (slotone == "Active") {
      document.getElementById("slot1").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot1").style.color = 'red'
    }


    if (slottwo == "Active") {
      document.getElementById("slot2").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot2").style.color = 'red'
    }


    if (slotthree == "Active") {
      document.getElementById("slot3").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot3").style.color = 'red'
    }


    if (slotfour == "Active") {
      document.getElementById("slot4").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot4").style.color = 'red'
    }



    if (slotfive == "Active") {
      document.getElementById("slot5").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot5").style.color = 'red'
    }


    if (slotsix == "Active") {
      document.getElementById("slot6").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot6").style.color = 'red'
    }


    if (slotseven == "Active") {
      document.getElementById("slot7").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot7").style.color = 'red'
    }



    if (sloteight == "Active") {
      document.getElementById("slot8").style.color = 'rgb(12, 182, 6)'
    }


    else {

      document.getElementById("slot8").style.color = 'red'
    }



    $('#pstatus').html(phone);


     $('#slot1').html(slotone);
     $('#slot2').html(slottwo);
     $('#slot3').html(slotthree);
     $('#slot4').html(slotfour);
     $('#slot5').html(slotfive);
     $('#slot6').html(slotsix);
     $('#slot7').html(slotseven);
     $('#slot8').html(sloteight);









  });



}










function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"

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






function validate34() {


var sl1 = '';
var sl2 = '';
var sl3 = '';
var sl4 = '';
var sl5 = '';
var sl6 = '';
var sl7 = '';
var sl8 = '';


  if (slot1 == "a") {

    sl1 = slotone;
  
  }
  else
  {
    sl1 = slot1;
  }


  if (slot2 == "a") {

    sl2 = slottwo;
  
  }
  else
  {
    sl2 = slot2;
  }


  if (slot3 == "a") {

    sl3 = slotthree;
  
  }
  else
  {
    sl3 = slot3;
  }


  if (slot4 == "a") {

    sl4 = slotfour;
  
  }
  else
  {
    sl4 = slot4;
  }


  if (slot5 == "a") {

    sl5 = slotfive;
  
  }
  else
  {
    sl5 = slot5;
  }



  if (slot6 == "a") {

    sl6 = slotsix;
  
  }
  else
  {
    sl6 = slot6;
  }


  if (slot7 == "a") {

    sl7 = slotseven;
  
  }
  else
  {
    sl7 = slot7;
  }


  if (slot8 == "a") {

    sl8 = sloteight;
  
  }
  else
  {
    sl8 = slot8;
  }

  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("user-account");
  var ref10 = firebase.database().ref().child("deposit_slot2");





  if (didConfirm == true) {


  
console.log(sl1);
console.log(phone);
console.log(ke2)
var database = firebase.database();

    
     database.ref('deposit_slot2').child(ke2).set({
                       
                              
                                 'slot1':sl1,
                                 'slot2': sl2,
                                 'slot3': sl3,
                                 'slot4': sl4,
                                 'slot5': sl5,
                                 'slot6': sl6,
                                 'slot7': sl7,
                                 'slot8': sl8,
                           
                                 'phone': phone,


                               


                            }).then(() => {

      window.location = "deposit_slot.html";
    });






  } else {
    return false;
  }



}





