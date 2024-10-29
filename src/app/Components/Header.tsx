import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 absolute top-0 left-0 right-2 z-30 p-0 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Syeda Inshrah</h1>
        <nav className="space-x-5">
          <Link href="/" className="text-blue-400 hover:text-blue-300">Home</Link>
          <Link href="/About" className="text-blue-400 hover:text-blue-300">About</Link>
          <Link href="/Contact" className="text-blue-400 hover:text-blue-300">Contact</Link>
        </nav>
      </div>
      <div className="mt-11 text-center"> {/* Margin to avoid overlap */}
        <h2 className="text-3xl">Welcome to My Portfolio</h2>
        <p className="text-lg">Front End Developer</p>
      </div>
    </header>
  );
};

export default Header;
