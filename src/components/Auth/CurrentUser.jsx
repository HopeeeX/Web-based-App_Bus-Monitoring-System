import { doc, getDoc } from "firebase/firestore";
import {firestore} from "../../../firebase"

class CurrentUser {
    constructor(user) {
      this.userInstance = user;
      this.userdata = null; // Initialize userdata property
  
      // Await fetchUser method before finishing construction
      (async () => {
        await this.fetchUser(this.userInstance);
      })();
    }
  
    async fetchUser(user) {
      const personas = ["admins", "drivers", "mechanics"];
      for (const element of personas) {
        const docRef = doc(firestore, element, user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.persona = element.slice(0,-1)
          this.userdata = docSnap.data();
          return docSnap;
        }
      }
    }
  }
  
  export default CurrentUser;