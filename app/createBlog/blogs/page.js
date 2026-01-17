
import { collection, getDocs } from "firebase/firestore";
import { blogDb } from "../../../firebaseConfig"; // Use blogs-specific Firebase config
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Blogs | Discover Expert ERP Tips & Insights for Growth",
  description: "Dive into our blog for clear, expert advice on ERP systems. Learn tips, insights, and strategies to boost your business efficiency today",
  keywords: "manufacturing erp, manufacturing erp software, production erp, production software, erp solutions, erp applications, erp software management, garment manufacturing software, plastic manufacturing industry, leather manufacturing erp software, cloud based erp software"
};

async function getBlogPosts() {
  const querySnapshot = await getDocs(collection(blogDb, "blogs"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default async function BlogsPage() {
  const blogPosts = await getBlogPosts();

  return <BlogsClient blogPosts={blogPosts} />;
}