"use client";

import { useEffect, useState } from "react";
export function useToast() {
  const [message, setMessage] = useState("");

  const showToast = (msg: string) => {
    setMessage(msg);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 1500); //애니메이션은 1초

      return () => clearTimeout(timer);
    }
  }, [message]);

  const Toast = () => {
    return message ? (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
        <div className="bg-black/80 text-white text-sm px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl animate-toast">
          {message}
        </div>
      </div>
    ) : null;
  };

  return { showToast, Toast };
}
