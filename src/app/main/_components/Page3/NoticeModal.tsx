"use client";

import { songmyung } from "@/fonts";
import { addDoc, collection, doc } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../../../../../lib/firebase";

export default function NoticeModal({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) {
  const emailPrefixRef = useRef<HTMLInputElement>(null);
  const emailDomainSelectRef = useRef<HTMLSelectElement>(null);
  const customDomainRef = useRef<HTMLInputElement>(null);
  const [useCustomDomain, setUseCustomDomain] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prefix = emailPrefixRef.current?.value ?? "";
    const domain = useCustomDomain
      ? customDomainRef.current?.value ?? ""
      : emailDomainSelectRef.current?.value ?? "";

    const email = `${prefix}@${domain}`;

    const phone = (
      document.querySelector('input[name="phone"]:checked') as HTMLInputElement
    )?.value;

    const payload = {
      email,
      phone,
      timestamp: new Date().toISOString(),
    };

    try {
      const noticeDocRef = doc(db, "landing", "notice");
      const noticeEntriesRef = collection(noticeDocRef, "entries");
      await addDoc(noticeEntriesRef, payload);
    } catch (error) {
      console.error("Failed to submit notice:", error);
    }
    handleModalClose();
  };

  return (
    <div
      onClick={handleModalClose}
      className="fixed inset-0 z-[999] backdrop-blur-sm bg-white/30 flex flex-col justify-center items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-120 text-center p-6 shadow-2xl overflow-hidden rounded-3xl flex flex-col gap-4 items-center bg-white"
      >
        <h1 className={`${songmyung.className} text-2xl`}>
          출시되면 메일로 알림을 보내드릴게요
        </h1>
        <p className="text-sm text-gray-500">
          해당 정보는 앱 출시 알림 외 다른 용도로는 사용되지 않아요!
        </p>
        <div className="flex items-center gap-2 w-full">
          <input
            ref={emailPrefixRef}
            type="text"
            placeholder="이메일 아이디"
            className="border px-3 py-2 rounded w-1/2"
            required
          />
          <span className="text-gray-500">@</span>

          {!useCustomDomain ? (
            <select
              ref={emailDomainSelectRef}
              defaultValue="gmail.com"
              className="border px-2 py-2 rounded w-1/2"
            >
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="kakao.com">kakao.com</option>
            </select>
          ) : (
            <input
              ref={customDomainRef}
              type="text"
              placeholder="도메인 입력"
              className="border px-3 py-2 rounded w-1/2"
              required
            />
          )}

          <label className="flex items-center gap-2 w-35">
            <input
              type="checkbox"
              checked={useCustomDomain}
              onChange={(e) => setUseCustomDomain(e.target.checked)}
            />
            직접입력
          </label>
        </div>

        {/* 디바이스 선택 */}
        <div className="flex gap-6 w-full justify-center">
          <label className="flex items-center gap-2">
            <input type="radio" name="phone" value="galaxy" defaultChecked />
            갤럭시
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="phone" value="iphone" />
            아이폰
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 bg-main text-white px-6 py-2 rounded hover:opacity-90"
        >
          전송
        </button>
      </form>
    </div>
  );
}
