import { useEffect } from "react";

const usePing = () => {
  const PING_INTERVAL = 1000 * 60 * 2; 

  useEffect(() => {
    const ping = () => {
      fetch("https://terapinisec.onrender.com")
        .then((res) => console.log("✅ Ping atıldı:", res.status))
        .catch((err) => console.error("❌ Ping hatası:", err));
    };

    ping(); 
    const interval = setInterval(ping, PING_INTERVAL);

    return () => clearInterval(interval); 
  }, []);
};

export default usePing;
