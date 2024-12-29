import {getDB} from "../helpers/firebase-helper.ts";
import {collection, doc, getDoc, getDocs, query, setDoc, where} from 'firebase/firestore/lite';

const db = getDB()

export type ItemType = {
  id: string;
  email: string
  name: string
  pageName: string
  snapshot: string
}
async function queryPage(key: string, value: string): Promise<ItemType[]> {
  const q = query(collection(db, `pages`), where(key, "==", value));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      email: data.email,
      name: data.name,
      pageName: data.pageName,
      snapshot: data.snapshot
    }
  });
}

export async function getMandalArtOfUser(email: string) {
  return queryPage('email', email)
}

export async function getMandalArt(mandalartId: string) {
  return getDoc(doc(db, `pages`, mandalartId))
}

export async function saveMandalArt(mandalartId: string, pageName: string, snapshot: string) {
  await setDoc(doc(db, `pages`, mandalartId), { pageName, snapshot }, { merge: true });
}

export async function createMandalArt(mandalartId: string, email: string, name: string, pageName: string, snapshot: string) {
  await setDoc(doc(db, `pages`, mandalartId), { email, name, pageName, snapshot });
}
