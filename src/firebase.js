
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, getDoc, doc, query, where} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC6yWMNj0b4Ce8nnsujZAhC69f-2GnYtjw",
  authDomain: "reactzuker.firebaseapp.com",
  projectId: "reactzuker",
  storageBucket: "reactzuker.appspot.com",
  messagingSenderId: "333433727063",
  appId: "1:333433727063:web:b089a820e9604689d69b12"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


//funcion que retorna todos los item de la coleccion de productos.
export async function gFetch(){
  const productsCollectionRef = collection(db, "productos");
  const snapshot = await getDocs(productsCollectionRef);
  const docsData = snapshot.docs.map((doc) => {
    return {...doc.data(), id: doc.id}
  });
  console.log(docsData)
  return(docsData);
}

//Funcion que retorna un documento segun su Id

export async function getSingleItem(itemid){
  const productsCollectionRef = collection(db, "productos");
  const productRef = doc(productsCollectionRef, itemid)
  const snapshot = await getDoc(productRef);

  return{...snapshot.data(), id: snapshot.id};
}

export async function getItemByCategory(categoryId){
  const productsCollectionRef = collection(db, "productos");
  const q = query(productsCollectionRef, where("categoria", "==", categoryId));
  const snapshot = await getDocs(q);

  const itemsFilteredArray = snapshot.docs.map((doc) => {
    const itemComplete = doc.data();
    itemComplete.id = doc.id;
    return itemComplete;
  });

  return itemsFilteredArray; 
}