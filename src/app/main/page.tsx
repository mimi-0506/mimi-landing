import Page1 from "./_components/Page1";
import Page2 from "./_components/Page2";
import Page3 from "./_components/Page3";
import Page4 from "./_components/Page4";

export default function MimiMemo() {
  return (
    <div className="w-full relative flex flex-col gap-40 sm:gap-0">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}
