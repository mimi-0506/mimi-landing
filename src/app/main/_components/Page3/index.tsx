"use client";

import { songmyung } from "@/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import IdeaModal from "./IdeaModal";
import NoticeModal from "./NoticeModal";
import { useToast } from "../../../../../hooks/useToast";

export default function Page3() {
  const { showToast, Toast } = useToast();
  const [ideaModal, setIdealModal] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);

  const handleModalClose = () => {
    setIdealModal(false);
    setNoticeModal(false);
  };

  const ideaClosedOnce = useRef(false);
  const noticeClosedOnce = useRef(false);

  useEffect(() => {
    if (!ideaModal && ideaClosedOnce.current)
      showToast("아이디어를 보내주셔서 감사합니다!");
    else if (ideaModal) ideaClosedOnce.current = true;
  }, [ideaModal]);

  useEffect(() => {
    if (!noticeModal && noticeClosedOnce.current)
      showToast("마켓 출시 알림을 신청해주셔서 감사합니다!");
    else if (noticeModal) noticeClosedOnce.current = true;
  }, [noticeModal]);

  return (
    <>
      <Toast />
      <div className="w-full min-h-screen flex flex-col gap-20 relative top-20">
        {ideaModal && <IdeaModal handleModalClose={handleModalClose} />}
        {noticeModal && <NoticeModal handleModalClose={handleModalClose} />}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="relative w-[50vw] sm:w-[20vw] aspect-square">
            <Image
              src="/mimimemo/IMAGE2.png"
              fill
              className="object-contain"
              alt="description Image"
            />
          </div>
          <div className="flex flex-col gap-15">
            <span>
              <h2 className={`${songmyung.className} text-2xl`}>
                MimiMemo는 무료로 사용할 수 있어요
              </h2>
              <p className="mt-5">
                원하는 레이아웃, 더 예쁜 디자인, 추가하고 싶은 기능이 있다면
                말해주세요! <br /> 내부 검토를 통해 추가금 없이 실현해드려요.
              </p>
            </span>
            <button
              className="w-full"
              onClick={() => {
                setIdealModal(true);
              }}
            >
              당신의 아이디어를 보내주세요!
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-10">
          <div className="flex flex-col gap-15">
            <text>
              <h2 className={`${songmyung.className} text-2xl`}>
                앱에서도 만날 수 있어요
              </h2>
              <p className="mt-5">
                윈도우와 데스크탑에서 사용한 그대로, <br />
                아이폰과 안드로이드 둘 다 사용할 수 있도록 개발중이에요.
              </p>
            </text>
            <button
              className="w-full"
              onClick={() => {
                setNoticeModal(true);
              }}
            >
              마켓에 출시되면 알려드릴까요?
            </button>
          </div>
          <div className="relative w-[50vw] sm:w-[18vw] aspect-square">
            <Image
              src="/mimimemo/IMAGE3.png"
              fill
              className="object-contain"
              alt="description Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
