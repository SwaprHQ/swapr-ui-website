import { Button } from "@/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-surface-neutral-alt-white bg-[url('/lines.svg')] h-screen bg-no-repeat bg-cover flex justify-center">
      <div className="pt-48 space-y-6 text-center">
        <h1 className="text-[58px] leading-[64px] font-bold">
          Build dapps fast
        </h1>
        <p className="text-lg text-text-med-em">
          A set of components made to help you ship web3 apps faster than ever.
        </p>
        <Link href="/ui" className="block">
          <Button className="mx-auto">Explore components</Button>
        </Link>
      </div>
    </main>
  );
}
