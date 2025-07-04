import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Header from "../../../components/layout/header/Header";
import Footer from "../../../components/layout/footer/Footer";
import PageHeader from "../../../components/layout/PageHeader";

async function getBlogPost(slug) {
  const docRef = doc(db, "blogs", slug);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) return <div>Blog not found</div>;
  return (
    <>
      <Header/>
      <PageHeader title={post.title} description={post.description} />
      <div>
        <h1>{post.title}</h1>
        <div>{post.content}</div>
      </div>
      <Footer/>
    </>
  );
}

export async function generateStaticParams() {
  // Replace with your real data source!
  const blogs = [
    { slug: 'first-post' },
    { slug: 'second-post' },
    // ...
  ];
  return blogs.map(blog => ({ slug: blog.slug }));
}
