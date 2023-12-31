import { getPostsMeta } from "@/lib/posts";
import { PostItem } from "@/components/PostItem";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) {
    return [];
  }

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts tagged ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  // decodeURIComponent is used to decode the tag name like %20 to space
  tag = decodeURIComponent(tag);
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  if (!filteredPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">{`Sorry, no posts available for the tag ${tag}.`}</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="max-w-3xl mx-auto text-3xl font-bold mt-12 mb-0">
        Results for: #{tag}
      </h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {filteredPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
