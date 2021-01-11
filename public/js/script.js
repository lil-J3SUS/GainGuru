//initialize db for database access
const db = firebase.firestore()

//initialize provider for authentication
const provider = new firebase.auth.GoogleAuthProvider();

//-------------------implementing functions------------------------
function addUser(first,last,born,mail,password) {
    db.collection("users").add({
        first: first,
        last: last,
        born: born,
        mail: mail,
        password: password
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
