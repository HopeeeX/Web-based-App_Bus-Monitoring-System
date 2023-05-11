import { doc, getDoc } from "firebase/firestore";
import {firestore} from "../../../firebase"

class CurrentUser {
  constructor(user) {
    this.userInstance = user;
    this.userdata = null; // Initialize userdata property

    // Return a promise that resolves when userdata is set
    this.ready = this.fetchUser(this.userInstance).then(() => this);
  }

  async fetchUser(user) {
    const personas = ["admins", "drivers", "mechanics"];
    for (const element of personas) {
      const docRef = doc(firestore, element, user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.persona = element.slice(0,-1);
        this.userdata = docSnap.data();
        return; // stop iterating once user data is found
      }
    }
  }
}

export default CurrentUser;
