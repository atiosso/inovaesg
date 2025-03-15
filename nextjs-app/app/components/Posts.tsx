import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { Post as PostType } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import { Image } from "next-sanity/image";
import { stegaClean } from "next-sanity";
import { urlForImage } from "@/sanity/lib/utils";
import EmptyState from "./EmptyState";

const PostThumbnail = ({
  coverImage,
}: {
  coverImage: PostType["coverImage"];
}) => {
  const image = coverImage?.asset?._ref ? (
    <Image
      className="rounded-2xl shadow-md transition-shadow object-cover"
      fill={true}
      alt={stegaClean(coverImage.alt) || ""}
      src={
        urlForImage(coverImage)
          ?.height(720)
          .width(1280)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
      priority={true}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return <div className="relative aspect-video">{image}</div>;
};

const Post = ({ post }: { post: PostType }) => {
  const { _id, title, slug, excerpt, date, coverImage } = post;

  return (
    <article key={_id} className="flex flex-col items-start justify-between">
      <div className="text-gray-500 text-sm">
        <DateComponent dateString={date} />
      </div>

      <div className="">
        <PostThumbnail coverImage={coverImage} />
      </div>
      <h3 className="mt-3 text-2xl font-semibold">
        <Link
          className="hover:text-brand-500 underline transition-colors"
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {excerpt}
      </p>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="mt-6 pt-6 space-y-12 border-t border-gray-200">
      {children}
    </div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading="Últimas postagens">
      {data?.map((post: any) => <Post key={post._id} post={post} />)}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="Ainda não temos nenhuma postagem"
        description="Volte logo e fique por dentro das novidades em ESG e inovação sustentável."
      />
    );
  }

  return (
    <Posts
      heading="Últimas postagens"
      subHeading="Fique por dentro das novidades em ESG e descubra novas perspectivas para impulsionar a inovação sustentável."
    >
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
