const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full rounded-xl shadow-md bg-white px-6 py-8 flex flex-col items-start gap-4 hover:shadow-lg transition">
      {/* <Image src="/icon.svg" alt="icon" className="w-10 h-10" /> */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const features = [
  {
    title: "마우스가 필요없는 메모 작성",
    description:
      "enter로 등록하고, shift+enter로 줄을 바꿔요. MimiMemo는 단순하고 직관적이에요.",
  },
  {
    title: "날짜별 자동 정렬",
    description:
      "자유롭게 작성하면, 알아서 날짜별로 정리해줘요. 하루가 예쁘게 정돈되는 기분은 MimiMemo가 책임질게요.",
  },
  {
    title: "Google 로그인 한 번이면 끝",
    description:
      "윈도우든 맥이든, 하나의 구글 계정으로 같은 메모를 이어서 볼 수 있어요. 창 크기, 위치, 메인 색까지 저장돼서, 늘 쓰던 그 느낌 그대로 다시 만날 수 있어요 🎨✨",
  },
  {
    title: "날짜 지정 메모 (@0506)",
    description:
      "“@0506” 이렇게 쓰면, 메모가 바로 5월 6일로 저장돼요. 과거 회고도, 미래 일정도 내 맘대로!",
  },
  {
    title: "중요 메모는 느낌표 하나로 (!)",
    description:
      "느낌표 하나 붙이면 바로 중요 메모로 지정! 내가 정리 안 해도, MimiMemo가 알아서 눈에 띄게 보여줘요.",
  },
  {
    title: "날짜 없이도 기억하고 싶을 땐 (#)",
    description:
      "#으로 시작하면 날짜랑 상관없이 저장돼요. 언제든 꺼내 보기 좋은 정보들, MimiMemo가 잘 챙겨둘게요.",
  },
];

export default function Page2() {
  return (
    <div className="w-full flex flex-col justify-start align-middle text-center">
      <h2>🎀 What MimiMemo Can Do 🎀</h2>
      <div className="w-10 h-1 bg-black" />
      <p>
        기능은 계속 추가됩니다. 원하는 기능이 있다면 제일 하단의 메일 주소로
        연락하세요!
      </p>

      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard
              key={idx}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
        <button className="mt-10 border border-pink-400 hover:bg-pink-400 hover:text-white transition px-6 py-2 rounded-full">
          추가 기능 신청하기
        </button>
      </section>
    </div>
  );
}
