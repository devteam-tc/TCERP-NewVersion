import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Ensure firebase is configured
import BlogsClient from "./BlogsClient";

async function getBlogPosts() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default async function BlogsPage() {
  const blogPosts = await getBlogPosts();
  return <BlogsClient blogPosts={blogPosts} />;
}