import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Header = async () => {
  return (
    <header className="bg-indigo-500 px-8 py-4">
      <div className="flex h-full items-center justify-between">
        <Link href="/">GAME⋅SWAP</Link>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
