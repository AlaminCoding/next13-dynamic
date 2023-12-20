import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </>
  );
};

export default Navbar;
