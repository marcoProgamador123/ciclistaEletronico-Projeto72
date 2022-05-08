import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDvqWl2kjTbBOKO1G4Ns-YaClHe-ZpQzJI",
  authDomain: "ciclista-eletronico-5a5e4.firebaseapp.com",
  projectId: "ciclista-eletronico-5a5e4",
  storageBucket: "ciclista-eletronico-5a5e4.appspot.com",
  messagingSenderId: "592540441628",
  appId: "1:592540441628:web:06f54ae1609da342ed13d9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
