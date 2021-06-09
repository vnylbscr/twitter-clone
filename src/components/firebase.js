import firebase from "firebase";
import { firebaseConfig } from "../config/config";

//initialize App
firebase.initializeApp(firebaseConfig);
firebase.analytics();

