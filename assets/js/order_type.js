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
      
      
    var ke = '';
    
      function validate() {
    
        var bkas  = document.getElementById("bkas").value;
        
     
      
        var ref10 = firebase.database().ref().child("order_type");
      
        var didConfirm = confirm("Are you sure You want to create??");
        if (didConfirm == true) {


              ref10.push().set({
                               "order_type": bkas,


                            }).then(() => {
                               
                                window.location = "order_type.html";
                            });
      
         
     // alert('create successfully !!!')
      
       //   location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      
      
      
      
       var alluser = firebase.database().ref().child("order_type");

      var admin = '';
      var pass = '';
      
    
      
      
      
      alluser.once("value").then(function (snapshot) {
  
        if (snapshot.exists()) {
      
          var content = '';
      
      
      
      
      
      
          snapshot.forEach(function (data) {
      
      
      
            var val = data.val();
      
    
      
           
      
        //  document.getElementById("aa").style.color = 'rgb(230, 175, 35)'
      
      
      

      
            content += '<tr name="bc">';
      
            // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      
      
            content += '<td >' +'</td>';
            content += '<td >' + val.order_type + '</td>';
           
            
    

      
            content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: rgb(28, 81, 214);"  onclick=stats("' + data.key + '")><i class="fa fa-edit" aria-hidden="true"></i></a>' +
            '<a href="#" data-tip="delete" style="color: red;" onclick=dtl("' + data.key + '")><i class="fa fa-trash"></i></a>'+
    
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

    
      
      
    
     
    
      
    
      function myclose() {
        // get user input
       
      location.reload();
      
      }

      
      function stats(key) {
  
        document.getElementById("mainp").style.display = "none"
        document.getElementById("frm").style.display = "none"
        document.getElementById("user").style.display = "none"
        document.getElementById("clos").style.display = "block"
        document.getElementById("det2").style.display = "block"
      
        var arr = document.getElementsByName('x').value;
      
        console.log(arr);
      
      
      
        ke2 = key;
      
        var ref51 = firebase.database().ref().child("order_type").child(key);
      
      
        ref51.on("value", function (snapshot4) {
          if (snapshot4.exists()) {
      
            admin = snapshot4.val().order_type;
           
      
            
      
            //  sec = snapshot4.val().section;
      
      
      
      
      
          }
      
      
      
      

      
      
          $('#camount2').val(admin);
         
     
      
      
      
        });
      
    
      }


            function dtl(key){
 
        var ref5 = firebase.database().ref().child("order_type").child(key);
     
      
        
      console.log(ref5);
      
        var didConfirm = confirm("Are you sure You want to delete??");
        if (didConfirm == true) {
      
        //  location.reload();
      
          ref5.remove();

          location.reload();
      
      
        } else {
        }
      }
      


      function validate3() {

        var friendnumber2  = document.getElementById("camount2").value;
       
   
      
      
        var ref10 = firebase.database().ref().child("order_type");
      
        var didConfirm = confirm("Are you sure You want to submit??");
        if (didConfirm == true) {
      
          ref10.child(ke2).set({
           
              "order_type": friendnumber2,
             
    
            
              
        
            });
            
      

      
      
          location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      