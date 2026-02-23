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

  
  
  var alluser = firebase.database().ref().child("withdraw");
  
  
  var phone = '';

  var username = '';
  

  
  var amount = '';

  
  
  var cdate = '';


  var title = '';
  var serial = '';
  var service = '';
  var prebalance = '';
  var amount = '';

  var status = '';

  var prsentamount = '';


  
  
  alluser.once("value").then(function (snapshot) {
  
    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
       var val = data.val();




         var ss = '';
         var ss2 = '';
         var ss3 = 'none';

         var a2 ='';
         var b2 = '';
         var c2 = '';

      var val = data.val();

      if (val.status == "Success") {
        ss = "green"
        ss2 = 'red'
        ss3 = 'block'
                  a2 = 'none'
        b2 = 'success'
        c2 = 'none'
      }

        else if (val.status == "Pending") {
        ss = "grey"
        ss2 = 'gre'
        a2 = 'block'
        b2 = 'none'
        c2 = 'none'
      }


      else {
        ss = 'red'
        ss2 = "green"
            a2 = 'none'
        b2 = 'none'
        c2 = 'block'
      }

  
  
        content += '<tr name="bc">';
  
        // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
  
        content += '<td style="text-align: center;">' + val.serial + '</td>';
        content += '<td >' + val.phone + '</td>';
      
        

        content += '<td id="aa">' + val.cdate + '</td>';
        content += '<td >' + val.prebalance +" BDT" +'</td>';
        content += '<td >' + val.amount +" BDT" +'</td>';
        content += '<td style="color:' + ss + ';font-weight: bold;">' + val.status + '</td>';
        // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';


          content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: grey;display:' + a2 + ';"><i class="fa fa-edit" aria-hidden="true"></i></a>' +
          '<a href="#" data-tip="delete" style="color:green;display:' + b2 + ';" onclick=stats("' + data.key + '")><i class="fa fa-check-square-o" aria-hidden="true"></i></a>'+'<a href="#" data-tip="delete" style="color:red;display:' + c2 + ';" ><i class="fa fa-ban" aria-hidden="true"></i></a>'+
 

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
    document.getElementById("det2").style.display = "block"
  
    var arr = document.getElementsByName('x').value;
  
    
  
  
  
    ke2 = key;


    console.log(ke2);
  
    var ref51 = firebase.database().ref().child("withdraw").child(key);
  

  
    ref51.on("value", function (snapshot4) {
      if (snapshot4.exists()) {


        title = snapshot4.val().title;
        serial = parseInt(snapshot4.val().serial);
        service = parseInt(snapshot4.val().service);
        prebalance = parseInt(snapshot4.val().prebalance);
        amount = parseInt(snapshot4.val().amount);
        cdate = snapshot4.val().cdate;
        phone = snapshot4.val().phone;
        status = snapshot4.val().status;
       
  
  
   
        //  sec = snapshot4.val().section;
  
  
  
  
  
      }
  
  
  
  
  

  
  
      $('#camount2').val(status);
     $('#camount21').val(amount+' tk');


        var ref54 = firebase.database().ref().child("mybalance").child(phone);


     ref54.on("value", function (snapshot4) {
      if (snapshot4.exists()) {


        prsentamount = parseInt(snapshot4.val().total_balance);
      
  
  
  
  
      }
  
  
  
     console.log('hhh   '+prsentamount)
  
  
  
  
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
  
    notif = '';
  
  
  }
  
  

  
  
  function validate3() {
  

    
   
  console.log(ke2);
console.log(prsentamount);

   
     var ref8 = firebase.database().ref().child("withdraw");
   
     var didConfirm = confirm("Are you sure You want to submit??");
   

   
  
     if (didConfirm == true) {
   
        var database = firebase.database();

                    database.ref('withdraw').child(ke2).set({
                    'title': title,
                   

                    'serial': serial,
                    'service':service,
                     'prebalance': prebalance,

                    'amount': amount,
                    'cdate': cdate,
                    'phone': phone,
                    'status':'Cancel'

                   });



                         var database = firebase.database();

                    database.ref('mybalance').child(phone).set({


                      'pre_balance':prsentamount,
                       'total_balance':parseInt(prsentamount+amount)
              

                   }).then(() => {
                    window.location.href = "withdraw.html";
                });

   
                  
   
     } 
   
   
   
   
   }
  
  
  function findTotal() {
    var arr = document.getElementsByName('qty');
  
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
      if (parseInt(arr[i].value))
        tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
  };
  document.addEventListener("DOMContentLoaded", function (event) {
    findTotal();
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
        rows.forEach(function(row) {
          table.appendChild(row);
        });
      }