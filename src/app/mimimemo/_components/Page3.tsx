import Image from "next/image";

export default function Page3() {
  return (
    <div className="w-full h-screen flex flex-col gap-50 relative top-20">
      <div className="w-full flex justify-center items-center gap-10">
        <div className="relative w-[20vw] aspect-square">
          <Image
            src="/mimimemo/IMAGE2.png"
            fill
            className="object-contain"
            alt="description Image"
          />
        </div>
        <div className="flex flex-col gap-15">
          <text>
            <h2>MimiMemo는 무료로 사용할 수 있어요</h2>
            <p>
              원하는 레이아웃, 더 예쁜 디자인, 추가하고 싶은 기능이 있다면
              말해주세요! <br /> 내부 검토를 통해 추가금 없이 실현해드려요.
            </p>
          </text>
          <button className="w-full">당신의 아이디어를 보내주세요!</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-10">
        <div className="flex flex-col gap-15">
          <text>
            <h2>앱에서도 만날 수 있어요</h2>
            <p>
              윈도우와 데스크탑에서 사용한 그대로, <br />
              아이폰과 안드로이드 둘 다 사용할 수 있도록 개발중이에요.
            </p>
          </text>
          <button className="w-full">마켓에 출시되면 알려드릴까요?</button>
        </div>
        <div className="relative w-[18vw] aspect-square">
          <Image
            src="/mimimemo/IMAGE3.png"
            fill
            className="object-contain"
            alt="description Image"
          />
        </div>
      </div>
    </div>
  );
}
