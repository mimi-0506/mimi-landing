import { songmyung } from "@/fonts";
import Image from "next/image";
import MacIcon from "@/assets/mac.svg";
import WindowIcon from "@/assets/window.svg";
import Link from "next/link";

export default function Page1() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative sm:-top-30">
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

          <div className="flex mt-10 sm:mt-0 gap-5 fill-white text-xl">
            <Link
              href="https://github.com/mimi-0506/mimi-memo/releases/download/1.0.0/mimimemo_window_1.0.0.exe"
              download
              className="w-1/2 lg:w-50 flex justify-center items-center gap-2"
            >
              <WindowIcon />
              Window
            </Link>
            <Link
              href="https://github.com/mimi-0506/mimi-memo/releases/download/1.0.0/mimimemo_mac_1.0.0.dmg"
              download
              className="w-1/2 lg:w-50 flex justify-center items-center gap-2"
            >
              <MacIcon />
              Mac
            </Link>
          </div>
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
