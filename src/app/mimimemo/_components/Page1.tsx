import Image from "next/image";

export default function Page1() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative -top-30">
      <div className="w-full flex">
        <div className="w-3/5 flex flex-col justify-center ">
          <h1 className="songmyung">MimiMemo</h1>
          <h2>
            윈도우에서도, 맥에서도 쓸 수 있는
            <br /> 데스크탑 메모 앱
          </h2>
          <p>
            집에서 데스크탑을 사용할 때도, 카페에서 맥북을 사용할 때도. <br />
            mimimemo는 어디에서나 같은 상태 그대로 쓸 수 있습니다.
          </p>

          <button className="w-80">Download</button>
        </div>
        <div className="relative w-[30vw] flex justifiy-center items-center">
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
    </div>
  );
}
