export default function Header() {
  return (
    <header
      className="w-full flex justify-between sticky mt-[100px] z-10"
      style={{ top: 0 }}
      //왜 테일윈드가 안먹는지는 모르겠으나..
    >
      <div>mimimemo</div>
      <nav>
        <ul className="flex justify-between gap-10 list-none ">
          <li>Home</li>
          <li>How to use</li>
          <li>Purpose</li>
          <li>Apps</li>
          <li>About mimi</li>
        </ul>
      </nav>
    </header>
  );
}
