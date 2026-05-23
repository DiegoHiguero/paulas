// import {
//     addDoc,
//     collection,
//     deleteDoc,
//     doc,
//     getDocs,
//     getDoc,
//     getCount,
//     query,
//     where,
// } from 'firebase/firestore/lite';
import { defineStore } from 'pinia'
// import { db } from '../firebaseConfig';
// import { auth } from "../firebaseConfig";
// import {
//     getAuth,
//     deleteUser
// } from "firebase/auth";
// import { toRaw } from "vue";
// import { getDownloadURL, getStorage, ref } from 'firebase/storage';

export const useDatabaseStore = defineStore('database', {
    state: () => ({
        //traemos todo de la base de datos almacenadolos en documents
        documents: [],
        cuadroDetails:{},
     imagenActual : null,
        loadingDoc: false,
      
    }),
    //acciones modifican los state
    actions: {
        async getCuadros() {
            if (this.documents.length !== 0) {
                return;
            }
            this.loadingDoc = true
            try {
                const q = query(collection(db, 'cuadros'))
                const querySnapshot = await getDocs(q)
                
                querySnapshot.forEach(doc => {
                    //accedemos ala ifo del id y a ladata de ese id
                    this.documents.push({
                        id: doc.id,
                        //destructuracion del objeto
                        ...doc.data()
                    })
                   
                })
                
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingDoc = false
                
            }
        },
        async getCuadro(id){
            try {
                const docRef = doc(db, 'cuadros',id);
                const docSpan = await getDoc(docRef)
                return docSpan.data()

            } catch (error) {
                console.log(error);
                
            }finally{

            }
        }
        }
}
)