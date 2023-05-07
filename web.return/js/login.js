const firebaseConfig = {
    apiKey: "AIzaSyCK1Erjbj_uFoML334LLPtNkRzVzJie6Uo",
    authDomain: "return-c9d8f.firebaseapp.com",
    projectId: "return-c9d8f",
    storageBucket: "return-c9d8f.appspot.com",
    messagingSenderId: "697873782237",
    appId: "1:697873782237:web:da7460295cb86a69151234",
    measurementId: "G-JP82PLQQNM"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  function signup() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      alert("signup success");
  }
  function signin() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      window.location.href='首頁.html'
      //alert("signin success");
      
  }
  function signout() {
      auth.signOut();
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
      alert("signout success");
  }
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          var email = user.email;
          alert("active user" + email);
          window.location.href='首頁.html';
      }
      else {
         // alert("no active user found");
      }
  })