// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "iot-db-23b9f"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "AIzaSyDS21DG2cYa5nSOivkKFfIu4tMbIf2gln4",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}-default-rtdb.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;