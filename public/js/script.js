//initialize db for further use
const db = firebase.firestore()



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
