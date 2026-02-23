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
        var nog = document.getElementById("nog").value;
     
        
      
      
        var ref10 = firebase.database().ref().child("admin");
      
        var didConfirm = confirm("Are you sure You want to create??");
        if (didConfirm == true) {
      
          ref10.child('asdmin_user').push().set({
            "username": bkas,
            "password": nog,
  
          
            
      
          });
     // alert('create successfully !!!')
      
          location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      
      
      
      
      

    
      
      
    
     
    
      
    
      function myclose() {
        // get user input
       
      location.reload();
      
      }

    
      


      function validate3() {

        var friendnumber2  = document.getElementById("camount2").value;
        var nomineenumber2 = document.getElementById("camount3").value;
   
      
      
        var ref10 = firebase.database().ref().child("admin");
      
        var didConfirm = confirm("Are you sure You want to submit??");
        if (didConfirm == true) {
      
          ref10.child('asdmin_user').child(ke2).set({
           
              "username": friendnumber2,
              "password": nomineenumber2,
    
            
              
        
            });
            
      

      
      
          location.reload();
          
      
      
        } else {
          return false;
        }
      
      
      
      
      
      }
      