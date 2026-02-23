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




var pendingLoan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');



const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/die9mh3xs/image/upload';
	const CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload';




var total = '';
var ploan = '';

var stimage = '';
var descrip = '';
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



var car = '';
var education = '';
var family = '';
var home = '';
var job = '';
var purpose = '';
var income = '';
var w_code = '';
var pass = '';


var price = '';
var userial = '';

var order = '';
var ordert = '';
var sprice = '';
var outfund = '';
var bon = '';
var o_name = '';


var select = document.getElementById("squareSelect");

var order_ty = firebase.database().ref("order_type");



order_ty.once("value").then(function(snapshot) {
  
    if(snapshot.exists()){
  
      var content = '';
      
      
      
      snapshot.forEach(function(data){

       
      
        select.innerHTML +="<option>"+data.val().order_type+"</option>";
       // console.log(data.val().section);
  
        });

   //   console.log(select);

 
  }
  
  
    });



    select.addEventListener('click', function() {
	ortyp = document.getElementById('squareSelect').value;
  

  	var totaluser = firebase.database().ref().child("user-task").child(ortyp);

    

var alltask = firebase.database().ref().child("user-task").child(ortyp);
  


		console.log(ortyp);


    alltask.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';


    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
    
      content += '<td >' + val.id + '</td>';
      content += '<td >' + val.firstname + '</td>';
      content += '<td >' + val.order_number + '</td>';
      content += '<td >' + val.o_name + '</td>';
      content += '<td >' + val.cdate + '</td>';
      content += '<td >' + val.sprice + " Tk" + '</td>';
      content += '<td >' + val.price + " Tk" + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: green;" onclick=edit("' + data.key + '") ><i class="fa fa-eye" aria-hidden="true"></i></a>' +
        


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


function edit(key) {

  //alert(key)

  const userInput = document.getElementById("mainp");

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"
  document.getElementById("rev").style.display = "none"

  ke = key;


  var ref5 = firebase.database().ref().child("user-task").child(ortyp).child(key);


  console.log(key);


  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      date = snapshot4.val().cdate;
      id = snapshot4.val().id;

      name = snapshot4.val().firstname;
      price = snapshot4.val().price;

      order = snapshot4.val().order_number;
      stimage = snapshot4.val().pimage;

      descrip = snapshot4.val().descrip;


      ordert = snapshot4.val().o_type;
      o_name = snapshot4.val().o_name;
      sprice = snapshot4.val().sprice;

      outfund = snapshot4.val().out_fund;
      bon = snapshot4.val().bonus;

    }
   console.log('order name : '+o_name);



    $('#mob').val(id);



    $('#name').val(name);
    $('#price').val(price);
    $('#dat').val(date);
    $('#purpose').val(descrip);

    $('#order').val(order);
    document.getElementById("pimage").src = stimage;


    $('#sprice').val(sprice);
    $('#ordert').val(o_name);

      $('#ofund').val(outfund);
    $('#bon').val(bon);

  });















}

function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  document.getElementById("det").style.display = "none"
  document.getElementById("rev").style.display = "block"

}


function myImage() {
  window.open(stimage, '_blank')


}




imageUpload.onchange = evt => {
  const [file] = imageUpload.files
  if (file) {
    pimage.src = URL.createObjectURL(file)
  }
}





function validate() {



  console.log(ke)





  var mob = document.getElementById("mob").value;
  var name = document.getElementById("name").value;
  var order = document.getElementById("order").value;

  var price = document.getElementById("price").value;

  var dat = document.getElementById("dat").value;

  var purpose = document.getElementById("purpose").value;


  var ofund = document.getElementById("ofund").value;

  var bons = document.getElementById("bon").value;



  var sprice = document.getElementById("sprice").value;
  var orderyupe = document.getElementById("ordert").value;


  var ref7 = firebase.database().ref().child("user-task").child(ortyp);



  console.log(mob)
  console.log(name)



  const fileInput = document.getElementById('imageUpload');


  if (document.getElementById("imageUpload").files.length == 0) {

    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {

      ref7.child(ke).set({
        'firstname': name,

        'pimage': stimage,
        'order_number': order,
        'price': price,
        'cdate': dat,
        'id': mob,
        'descrip': purpose,
        'o_type': ordert,
        'o_name': orderyupe,
        'sprice': sprice,
        	 'out_fund':ofund,
					 'bonus':bons




      }).then(() => {
        location.reload();
        });



     // location.reload();



    } else {
      return false;
    }


  }

  else {


    var didConfirm = confirm("Are you sure You want to update??");
    if (didConfirm == true) {

      const file = fileInput.files[0];

      const formData = new FormData();

      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',

        },
        data: formData
      }).then(function (res) {
        console.log(res.data.secure_url);



        alert('upload success');

        var database = firebase.database();

        ref7.child(ke).set({
          'bonus':bons,
          'cdate': dat,
          'descrip': purpose,

          'firstname': name,
          'id': mob,
          'o_type': ordert,
          'order_number': order,
          'out_fund':ofund,

          'pimage': res.data.secure_url,
          
          'price': price,
          'sprice': sprice,
          'o_name': orderyupe,
          


        }).then(() => {
        location.reload();
        });


      }).catch(function (err) {
        console.error(err);
      })



    } else {
      return false;
    }


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