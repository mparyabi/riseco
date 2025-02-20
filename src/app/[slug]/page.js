import BlogPost from "@/components/templates/Blog/BlogPost/page";
import { notFound } from "next/navigation";

export default async function GeneratePostPage({ params }) {

  if (!params || !params.slug) {
    return notFound(); // هدایت به صفحه 404 اگر slug نامعتبر باشد
  }

  const slug = params.slug;
  const res = await fetch(
    `https://www.riseco.co/wp-json/wp/v2/posts?slug=${slug}`
  );
  const [post] = await res.json();

  if (!post) {
    return notFound();
  }

  const response = await fetch(
    `https://www.riseco.co/wp-json/wp/v2/media/${post.featured_media}`
  );
  const featImgData = await response.json();

  return (
    <BlogPost
      title={post.title.rendered}
      content={post.content.rendered}
      date={post.date}
      featImg={featImgData.guid.rendered}
    />
  );
}
