"use client";

import { songmyung } from "@/fonts";
import { useRef, useEffect } from "react";
import { throttle } from "lodash";

const throttledSubmit = throttle(
  (text: string, onClose: () => void) => {
    if (!text.trim()) return;

    const payload = {
      text,
      timestamp: new Date().toISOString(),
    };
    console.log(payload); //전송 로직 추가
    onClose();
  },
  5000,
  { trailing: false }
);

export default function IdeaModal({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) {
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = textRef.current?.value || "";
    throttledSubmit(text, handleModalClose);
  };

  return (
    <div
      onClick={handleModalClose}
      className="fixed inset-0 z-[999] backdrop-blur-sm flex flex-col justify-center items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-120 gap-3 p-6 relative shadow-2xl overflow-hidden rounded-3xl flex flex-col justify-center items-center bg-white"
      >
        <h1 className={`${songmyung.className} text-2xl`}>
          어떤 레이아웃, 기능, 디자인을 원하나요?
        </h1>
        <p className="text-sm text-gray-500">
          업데이트되면 이 페이지에서 소식을 확인하실 수 있어요
        </p>
        <textarea
          ref={textRef}
          onClick={(e) => e.stopPropagation()}
          className="w-full h-32 resize-none rounded p-2 mb-4 border border-gray-300 focus:outline-main"
        />
        <button
          type="submit"
          className="bg-main text-white px-4 py-2 rounded hover:opacity-90"
        >
          전송
        </button>
      </form>
    </div>
  );
}
