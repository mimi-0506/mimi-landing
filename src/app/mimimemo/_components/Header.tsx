export default function Header() {
  return (
    <header className="w-full flex justify-between sticky top-0 mt-10">
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
