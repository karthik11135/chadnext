import Balancer from "react-wrap-balancer";
import Icons from "~/components/shared/icons";
import { nFormatter } from "~/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/moinulmoin/chadnext",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center py-14 md:min-h-[calc(100vh-160px)] xl:py-24">
        <div className=" mx-auto w-full max-w-2xl">
          <a
            href="https://twitter.com/immoinulmoin/status/1661645764697919489"
            target="_blank"
            rel="noreferrer"
            className="  mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors animate-in slide-in-from-top duration-500  hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Introducing ChadNext
            </p>
          </a>
          <h1 className="font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm animate-in zoom-in duration-500 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
            <Balancer>Quick Starter Template for your Next.js project</Balancer>
          </h1>
          <p className="mt-6 text-center text-gray-500 animate-in slide-in-from-top duration-500 md:text-xl">
            <Balancer>Packed with all necessary tools to get started.</Balancer>
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5 animate-in slide-in-from-top">
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-md border border-primary bg-primary px-5 py-2 text-sm text-primary-foreground"
              href="https://github.com/moinulmoin/chadnext"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.gitHub width={16} />
              <p>
                <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
