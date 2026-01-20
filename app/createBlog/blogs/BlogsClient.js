"use client";

import { useState } from "react";
import styles from "./page.module.css";
import BlogGrid from "./BlogGrid";
import Pagination from "./Pagination";
import Footer from "../../../components/layout/footer/Footer";
import Header from "../../../components/layout/header/Header";
import PageHeader from "../../../components/layout/PageHeader";

const POSTS_PER_PAGE = 6;

export default function BlogsClient({ blogPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const displayedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className={styles.main}>
        <Header/>
        <PageHeader />
      {/* <section className={styles.hero}>
        <div className={styles.container}>
          <h1>
            Tech Cloud ERP Blogs <span className={styles.rssIcon}>📰</span>
          </h1>
        </div>
      </section> */}

      <BlogGrid posts={displayedPosts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer/>
    </main>
  );
}