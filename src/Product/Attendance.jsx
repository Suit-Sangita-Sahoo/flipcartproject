import { useEffect, useState } from "react";

const Attendance = () => {
  const text = "Hello World".toLowerCase();

  const [ch, setCh] = useState("a");
  const [present, setPresent] = useState(false);

  useEffect(() => {
    if (ch <= "z") {
      const interval = setInterval(() => {
        
        setPresent(text.includes(ch));

       
        setCh((prev) => {
          if (prev === "z") return prev; 
          return String.fromCharCode(prev.charCodeAt(0) + 1);
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [ch, text]);

  return (
    <div>
      <h1>Text: {text}</h1>
      <h2>
        {ch} → {present ? "true " : "false "}
      </h2>
    </div>
  );
};

export default Attendance;
