import Link from "next/link";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto mt-32 flex h-screen flex-col items-center gap-10">
      <div className="text-center">
        <h1 className="text-6xl">GAME⋅SWAP</h1>
        <p className="">Play. Trade. Repeat.</p>
      </div>
      <div>
        <p>
          Unlock New Adventures with Every Trade! Discover, trade, and level up
          your gaming library with our seamless video game exchange platform.
          Whether you're looking to offload old favorites or find hidden gems,
          we've got you covered. Join a community of gamers and start trading
          today to expand your collection and experience new worlds—without
          spending a fortune. Get Started Now and Transform Your Gaming
          Experience!
        </p>
      </div>
      <Button
        asChild
        className="purpleShadow bg-indigo-700 p-8 text-xl text-white hover:bg-indigo-600"
      >
        <Link href="/register">Start Now</Link>
      </Button>
    </section>
  );
};

export default Hero;
