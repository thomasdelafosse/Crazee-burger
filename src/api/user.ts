import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { User } from "../types/product";

export const getUser = async (userId: string): Promise<User | undefined> => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived as User;
  }
};

// Quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2e cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3e cas : résultat négatif de la promesse achevée => résultat négatif (rejected)

export const createUser = async (userId: string): Promise<User> => {
  // cachette
  const docRef = doc(db, "users", userId);

  // nourriture
  const newUserToCreate: User = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  // cachette + nourriture
  setDoc(docRef, newUserToCreate);
  return newUserToCreate;
};

export const authenticateUser = async (userId: string): Promise<User> => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return createUser(userId);
  }
  return existingUser;
};
