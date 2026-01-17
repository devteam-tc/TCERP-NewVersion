// app/blogs/[slugs]/BlogContent.jsx
'use client';

import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import Header from "../../../components/layout/header/Header";
import Footer from "../../../components/layout/footer/Footer";
import PageHeader from "../../../components/layout/PageHeader";
import CustomCursor from "../../../components/layout/CustomCursor";
import styles from './page.module.css';

// Import section components
import Introduction from './sections/Introduction';
import MainContent from './sections/MainContent';
import Conclusion from './sections/Conclusion';
import TableOfContents from './sections/components/TableOfContents';
import SubscribeCTA from './sections/components/SubscribeCTA';
import ContentBlocks from './sections/ContentBlocks';

export default function BlogContent({ post, pointsData }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch related posts on the client side
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (post.tags?.length > 0) {
        try {
          const response = await fetch(`/api/related-posts?tags=${post.tags.join(',')}&current=${post.id}`);
          const data = await response.json();
          setRelatedPosts(data);
        } catch (error) {
          console.error("Error fetching related posts:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [post.tags, post.id]);

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Our Blogs', link: '/blogs' },
    { label: post.title, link: null }
  ];

  return (
    <>
      <Header />
      <PageHeader title={post.title} breadcrumbs={breadcrumbs} />
      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <Introduction 
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.createdAt}
            />
            
            <MainContent 
              contentSections={post.contentSection || []}
              pointsData={pointsData}
              anchorWords={post.anchorWordsSection || []}
            />
            
            <Conclusion 
              ctaSection={post.ctaSection}
              faqs={post.faqs || []}
              anchorWords={post.anchorWordsSection || []}
            />
          </div>
          
          <div className="col-md-4">
            <aside className={styles.sidebar}>
              <TableOfContents 
                anchorWords={post.anchorWordsSection || []}
                contentSections={post.contentSection || []}
              />
              <SubscribeCTA  post={post}/>
              <ContentBlocks 
                content={post.contentSection || []}
                relatedPosts={relatedPosts}
                loading={loading}
              />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}