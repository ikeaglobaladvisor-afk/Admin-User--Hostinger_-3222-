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
    
    
    
    var alluser = firebase.database().ref("admin").child('w');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().admin;
         pass = snapshot4.val().pass ;
  
  
  
  
  
      }
  
  
console.log("gggggggggg" + admin);
	   console.log("gggggggggg" + pass)
  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('w').set({
          "admin": bkas,
          "pass": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  