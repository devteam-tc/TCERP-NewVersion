// // app/blogs/[slugs]/page.js
// 'use client';

// import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import { blogDb } from "../../../../firebaseConfig";
// import { notFound } from "next/navigation";
// import { useEffect, useState } from "react";
// import Header from "../../../../components/layout/header/Header";
// import Footer from "../../../../components/layout/footer/Footer";
// import PageHeader from "../../../../components/layout/PageHeader";
// import CustomCursor from "../../../../components/layout/CustomCursor";
// import { FaHome } from 'react-icons/fa';
// import styles from './page.module.css';

// // Import section components
// import Introduction from './sections/Introduction';
// import MainContent from './sections/MainContent';
// import Conclusion from './sections/Conclusion';
// import TableOfContents from './sections/components/TableOfContents';
// import SubscribeCTA from './sections/components/SubscribeCTA';
// import ContentBlocks from './sections/ContentBlocks';

// // This function fetches blog post by slug
// async function getBlogPost(slug) {
//   const docRef = doc(blogDb, "blogs", slug);
//   const docSnap = await getDoc(docRef);
//   if (!docSnap.exists()) {
//     return null;
//   }
//   return { id: docSnap.id, ...docSnap.data() };
// }

// // This function fetches related posts based on tags
// async function getRelevantPosts(tags = [], currentSlug) {
//   if (!tags || tags.length === 0) return [];
  
//   const querySnapshot = await getDocs(collection(blogDb, "blogs"));
//   const allPosts = querySnapshot.docs
//     .map(doc => ({ id: doc.id, ...doc.data() }))
//     .filter(post => post.id !== currentSlug && post.tags && post.tags.some(tag => tags.includes(tag)))
//     .slice(0, 3); // Limit to 3 related posts
  
//   return allPosts;
// }

// // Generate static paths at build time
// export async function generateStaticParams() {
//   try {
//     const blogCollection = collection(blogDb, "blogs");
//     const querySnapshot = await getDocs(blogCollection);
//     return querySnapshot.docs.map((doc) => ({ 
//       slugs: doc.id 
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }) {
//   const post = await getBlogPost(params.slugs);
  
//   if (!post) {
//     return {
//       title: 'Blog Post Not Found',
//       description: 'The requested blog post could not be found.'
//     };
//   }

//   return {
//     title: post.title,
//     description: post.metaDescription || post.descriptions?.[0]?.substring(0, 160) || "Read our latest blog post",
//     openGraph: {
//       title: post.title,
//       description: post.metaDescription || post.descriptions?.[0]?.substring(0, 160) || "Read our latest blog post",
//       images: [
//         {
//           url: post.imageUrl || "/images/default-blog.jpg",
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//     },
//   };
// }

// export default function BlogPost({ params }) {
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedPosts, setRelatedPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const post = await getBlogPost(params.slugs);
//         if (!post) {
//           notFound();
//           return;
//         }
        
//         setBlog(post);
        
//         // Fetch related posts if needed
//         if (post.tags?.length > 0) {
//           const relevant = await getRelevantPosts(post.tags, params.slugs);
//           setRelatedPosts(relevant);
//         }
//       } catch (err) {
//         console.error("Error fetching blog post:", err);
//         setError("Failed to load the blog post. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [params.slugs]);

//   if (loading) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p className="mt-2">Loading blog post...</p>
//       </div>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="alert alert-danger">{error || "Blog post not found"}</div>
//       </div>
//     );
//   }

//   const breadcrumbs = [
//     { label: 'Home', link: '/', icon: FaHome },
//     { label: 'Our Blogs', link: '/blogs' },
//     { label: blog.title, link: null }
//   ];

//   // Process pointsWiseText for the content sections
//   const pointsData = blog.pointsWiseText?.section1?.map(item => ({
//     title: item.TopHeading || item.title,
//     description: item.TopIntro || item.description
//   })) || [];

//   return (
//     <>
//       <Header />
//       <PageHeader title={blog.title} breadcrumbs={breadcrumbs} />
//       <main className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <Introduction 
//               title={blog.title}
//               description={blog.description}
//               imageUrl={blog.imageUrl}
//               date={blog.createdAt?.toDate?.() || new Date()}
//             />
            
//             <MainContent 
//               contentSections={blog.contentSection || []}
//               pointsData={pointsData}
//               anchorWords={blog.anchorWordsSection || []}
//             />
            
//             <Conclusion 
//               ctaSection={blog.ctaSection}
//               faqs={blog.faqs || []}
//             />
//           </div>
          
//           <div className="col-md-4">
//             <aside className={styles.sidebar}>
//               <TableOfContents 
//                 anchorWords={blog.anchorWordsSection || []}
//                 contentSections={blog.contentSection || []}
//               />
//               <SubscribeCTA />
//               <ContentBlocks 
//                 content={blog.contentSection || []}
//                 relatedPosts={relatedPosts}
//               />
//             </aside>
//           </div>
//         </div>
//       </main>
//       <Footer />
//       <CustomCursor />
//     </>
//   );
// }

// app/blogs/[slugs]/page.js

import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { blogDb } from "../../../firebaseConfig";

import { notFound } from "next/navigation";
import BlogContent from "./BlogContent";

// This runs at build time to generate static paths
export async function generateStaticParams() {
  try {
    const blogCollection = collection(blogDb, "blogs");
    const querySnapshot = await getDocs(blogCollection);
    return querySnapshot.docs.map((doc) => ({ 
      slugs: doc.id 
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// This runs on the server for each request
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slugs);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.metaDescription || post.descriptions?.[0]?.substring(0, 160) || "Read our latest blog post",
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.descriptions?.[0]?.substring(0, 160) || "Read our latest blog post",
      images: [
        {
          url: post.imageUrl || "/images/default-blog.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Helper function to fetch blog post
async function getBlogPost(slug) {
  const docRef = doc(blogDb, "blogs", slug);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return { 
    id: docSnap.id, 
    ...docSnap.data(),
    // Convert Firestore timestamp to JavaScript Date if it exists
    createdAt: docSnap.data().createdAt?.toDate?.() || null
  };
}

// This is the main page component
export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slugs);
  
  if (!post) {
    notFound();
  }

  // Process pointsWiseText for the content sections
  const pointsData = post.pointsWiseText?.section1?.map(item => ({
    title: item.TopHeading || item.title,
    description: item.TopIntro || item.description
  })) || [];

  return (
    <BlogContent 
      post={post}
      pointsData={pointsData}
    />
  );
}