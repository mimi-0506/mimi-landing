import Image from "next/image";

export default function Page3() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <Image
          src="/mimimemo/IMAGE2.png"
          width={100}
          height={100}
          alt="description Image"
        />
        <div className="flex flex-col justify-center">
          <h2>MimiMemo는 무료로 사용할 수 있어요</h2>
          <p>
            원하는 레이아웃, 더 예쁜 디자인, 추가하고 싶은 기능이 있다면
            말해주세요! 내부 검토를 통해 추가금 없이 실현해드려요.
          </p>
          <button>제게는 이런 아이디어가 있어요!</button>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/mimimemo/IMAGE3.png"
          width={100}
          height={100}
          alt="description Image"
        />
        <div className="flex flex-col justify-center">
          <h2>앱에서도 만날 수 있어요</h2>
          <p>
            윈도우와 데스크탑에서 사용한 그대로, 아이폰과 안드로이드 둘 다
            사용할 수 있도록 개발중이에요.
          </p>

          <button>마켓에 출시되면 알려드릴까요?</button>
        </div>
      </div>
    </div>
  );
}
