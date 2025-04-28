import { songmyung } from "@/fonts";
import Image from "next/image";

export default function Page1() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative sm:-top-30">
      <div className="w-full flex flex-col-reverse sm:flex-row">
        <div className="text-glow w-full md:w-3/5 flex flex-col justify-center z-10 relative -top-20 sm:top-0 gap-5 sm:whitespace-nowrap">
          <h1 className={`${songmyung.className} text-4xl`}>MimiMemo</h1>
          <h2 className={`${songmyung.className} `}>
            당신에 의한, 당신을 위한.
            <br /> 세상에서 제일 예쁜 데스크탑 메모 앱
          </h2>
          <p className="text-xs text-glow">
            집에서 데스크탑을 사용할 때도, 카페에서 맥북을 사용할 때도. <br />
            MimiMemo는 어디에서나 같은 상태 그대로 쓸 수 있습니다.
          </p>

          <button className="w-full lg:w-100 mt-10 sm:mt-0">Download</button>
        </div>
        <div className="relative md:w-[30vw] w-full flex justify-center items-center top-30 sm:top-0">
          <div className="aspect-square w-full">
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
