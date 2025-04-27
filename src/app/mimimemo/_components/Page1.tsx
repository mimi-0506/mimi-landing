import Image from "next/image";

export default function Page1() {
  return (
    <div className="w-full flex align-middle">
      <div className="w-3/5 flex flex-col justify-center">
        <h1>
          윈도우에서도, 맥에서도 쓸 수 있는
          <br /> 데스크탑 메모 앱
        </h1>
        <p>
          집에서 데스크탑을 사용할 때도, 카페에서 맥북을 사용할 때도. <br />
          미미메모는 어디에서나 같은 상태 그대로 쓸 수 있습니다.
        </p>

        <button className="w-[100px] border-none p-[10px] flex justify-center align-middle">
          Download
        </button>
      </div>
      <div className="relative w-2/5 flex justifiy-center align-middle">
        <div className="aspect-square w-[100%]">
          <Image
            src="/mimimemo/IMAGE1.png"
            alt="description Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
