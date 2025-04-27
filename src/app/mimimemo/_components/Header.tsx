export default function Header() {
  return (
    <header className="w-full flex justify-between items-center sticky mt-[100px] z-10 top-0">
      <div>mimimemo</div>
      <nav>
        <ul className="flex justify-between gap-[30px] list-none">
          <li>Home</li>
          <li>How to use</li>
          <li>Feature</li>
          <li>Apps</li>
          <li>About mimi</li>
        </ul>
      </nav>
    </header>
  );
}
