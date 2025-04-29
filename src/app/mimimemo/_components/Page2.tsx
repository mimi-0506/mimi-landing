import { songmyung } from "@/fonts";

const features = [
  {
    title: "마우스가 필요없는 메모 작성",
    description:
      "enter로 등록하고, shift+enter로 줄을 바꿔요. \n MimiMemo는 단순하고 직관적이에요.",
  },
  {
    title: "날짜별 자동 정렬",
    description:
      "자유롭게 작성하면, 알아서 날짜별로 정리해줘요. \n 하루가 예쁘게 정돈되는 기분은 MimiMemo가 책임질게요.",
  },
  {
    title: "Google 로그인 한 번이면 끝",
    description:
      "창 크기, 위치, 메인 색까지 늘 쓰던 그 느낌 그대로. 하나의 구글 계정으로 어디서든 느낄 수 있어요. ",
  },
  {
    title: "날짜 지정 메모 (@0506)",
    description:
      "“@0506” 이렇게 쓰면, 메모가 바로 5월 6일로 저장돼요. \n 과거 회고도, 미래 일정도 내 맘대로!",
  },
  {
    title: "중요 메모는 느낌표 하나로 (!)",
    description:
      "느낌표 하나 붙이면 바로 중요 메모로 지정! \n 내가 정리 안 해도, MimiMemo가 알아서 눈에 띄게 보여줘요.",
  },
  {
    title: "인덱스를 달 수 있어요 (#)",
    description:
      "#으로 시작하면 날짜랑 상관없이 저장돼요. \n 언제든 꺼내 보기 좋은 정보들, MimiMemo가 잘 챙겨둘게요.",
  },
];

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-xl text-left shadow-gray-200 shadow-2xl px-6 py-8 flex flex-col items-start gap-4">
      {/* <Image src="/icon.svg" alt="icon" className="w-10 h-10" /> */}
      <h3 className={`${songmyung.className} text-xl font-semibold`}>
        {title}
      </h3>
      <p className="text-[13px] whitespace-pre-line">{description}</p>
    </div>
  );
};

export default function Page2() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center text-center">
      <h2 className={`${songmyung.className} text-2xl tracking-wider`}>
        🎀 What MimiMemo Can Do 🎀
      </h2>
      <div className="w-40 my-5 h-0.5 bg-pink-200" />
      <p>
        기능은 계속 추가됩니다. <br />
        원하는 기능이 있다면 제일 하단의 메일 주소로 연락하세요!
      </p>

      <section className="w-full px-3 lg:px-6 py-16 max-w-6xl mx-auto text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-20">
          {features.map((f, idx) => (
            <FeatureCard
              key={idx}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
