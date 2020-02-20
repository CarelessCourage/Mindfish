  import firebase from 'firebase'
  import firestore from 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDysJyCepF4FhD0uafbmbQEc-0SgU0vaaw",
      authDomain: "mindfish-ebc1b.firebaseapp.com",
      databaseURL: "https://mindfish-ebc1b.firebaseio.com",
      projectId: "mindfish-ebc1b",
      storageBucket: "mindfish-ebc1b.appspot.com",
      messagingSenderId: "476630435293",
      appId: "1:476630435293:web:67ab8602a67b90a01ae234",
      measurementId: "G-5E49QFEQRC"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebaseApp.firestore()