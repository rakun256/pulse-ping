import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { useAuth } from "./AuthContext"; 

const PingContext = createContext();

export const usePing = () => useContext(PingContext);

export const PingProvider = ({ children }) => {
  const [pings, setPings] = useState([]);
  const { user } = useAuth(); 

  useEffect(() => {
    const fetchPings = async () => {
      if (!user) return;
      try {
        const q = query(collection(db, "pings"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        setPings(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Pingleri getirirken hata oluştu:", error);
      }
    };

    fetchPings();
  }, [user]);

  const addPing = async (title, url, interval) => {
    if (!user) return;
    try {
      const docRef = await addDoc(collection(db, "pings"), {
        userId: user.uid,
        title,
        url,
        interval,
        status: "pending",
      });

      setPings([...pings, { id: docRef.id, title, url, interval, status: "pending" }]);
    } catch (error) {
      console.error("Ping eklenirken hata oluştu:", error);
    }
  };

  const deletePing = async (id) => {
    try {
      await deleteDoc(doc(db, "pings", id));
      setPings(pings.filter(ping => ping.id !== id));
    } catch (error) {
      console.error("Ping silinirken hata oluştu:", error);
    }
  };

  return (
    <PingContext.Provider value={{ pings, addPing, deletePing }}>
      {children}
    </PingContext.Provider>
  );
};
