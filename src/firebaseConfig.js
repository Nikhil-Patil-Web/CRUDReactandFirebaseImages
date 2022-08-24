// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCFAS3EFvERjWewbQ-QWGCZbCysORZLHOU',
  authDomain: 'crud-with-firebase-and-react.firebaseapp.com',
  projectId: 'crud-with-firebase-and-react',
  storageBucket: 'crud-with-firebase-and-react.appspot.com',
  messagingSenderId: '408082732464',
  appId: '1:408082732464:web:a1c266f5229f4b14323275',
  measurementId: 'G-BEYPJVNJL6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
