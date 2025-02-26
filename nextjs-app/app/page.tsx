import { Suspense } from "react";

import { AllPosts } from "@/app/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { toPlainText } from "next-sanity";

import * as fallback from "@/sanity/lib/fallback";

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });

  return (
    <>
      <div className="bg-gradient-to-r from-pesto-200 from-0% via-white via-40%  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-logo text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter">
                <span className="text-black">i</span>
                <span className="text-black">nova</span>{" "}
                <span className="text-black font-light">ESG</span>
              </h1>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                {toPlainText(settings?.description || fallback.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
