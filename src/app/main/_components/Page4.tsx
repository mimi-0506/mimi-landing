import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/assets/github.svg";
import MailIcon from "@/assets/mail.svg";
import VelogIcon from "@/assets/velog.svg";
import { songmyung } from "@/fonts";

export default function Page4() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="box-glow w-full bg-linear-120 from-lightMain to-main text-white stroke-white fill-white rounded-3xl box-border p-10 flex flex-col justify-center items-center">
        <h2
          className={`${songmyung.className} text-center text-2xl font-semibold`}
        >
          Developer
        </h2>
        <div className="w-40 h-[1px] mt-3 mb-10 bg-white" />
        <div className="flex justify-around w-full">
          <div className="flex gap-5">
            <div className="relative w-30 overflow-hidden aspect-square rounded-full">
              <Image
                fill
                alt="profile Image"
                className="object-contain"
                src={"/mimimemo/profile.png"}
              />
            </div>
            <div className="flex flex-col justify-center sm:text-left">
              <p className="font-semibold text-lg text-white">mimi</p>
              <div className="flex justify-between gap-1">
                <Link href="mailto:0506phm@gmail.com" target="_blank">
                  <MailIcon />
                </Link>
                <Link href="https://github.com/mimi-0506" target="_blank">
                  <GithubIcon />
                </Link>
                <Link href="https://velog.io/@0506phm/posts" target="_blank">
                  <VelogIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-xl">2년차 FE개발자.</p>
            <h3 className=""> 예뻐야 돼, 뭐든지 예쁜 게 좋아.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
