var firebaseConfig = {
    apiKey: "AIzaSyA9DfX5O8YbJSvU0Yy0YnG9RDgooEuomOc",
    authDomain: "music-app100.firebaseapp.com",
    projectId: "music-app100",
    storageBucket: "music-app100.appspot.com",
    messagingSenderId: "700799537454",
    appId: "1:700799537454:web:830ecad5cc21f5bb20eabf",
    measurementId: "G-LT946S5PJ3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
});
