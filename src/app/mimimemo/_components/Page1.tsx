import Image from "next/image";

export default function Page1() {
  return (
    <div className="w-full">
      <div>
        <h1>윈도우에서도, 맥에서도 쓸 수 있는 데스크탑 메모 앱</h1>
        <p>
          집에서 데스크탑을 사용할 때도, 카페에서 맥북을 사용할 때도. 미미메모는
          어디에서나 같은 상태 그대로 쓸 수 있습니다.
        </p>

        <button className="bg-pink-300 flex justify-center align-middle">
          Download
        </button>
      </div>
      <Image
        src="/mimimemo/IMAGE1.png"
        width={100}
        height={100}
        alt="description Image"
      />
    </div>
  );
}
