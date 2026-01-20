// app/blogs/page.js
'use client';

import React, { Fragment, useState, useEffect } from 'react';
import BlogCard from "./components/BlogCard/BlogCard";
import styles from "./page.module.css";
import { FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import PageHeader from "../../components/layout/PageHeader";
import CustomCursor from "../../components/layout/CustomCursor";

const ITEMS_PER_PAGE = 6;

// This is a client component that will fetch data on the client side
export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from Firebase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, 'blogs');
        const q = query(blogsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setBlogs(blogsData);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Our Blogs', link: null }
  ];

  // Generate page numbers to show
  const pageNumbers = [];
  const maxPageButtons = 5;
  let startPage, endPage;

  if (totalPages <= maxPageButtons) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrent = Math.floor(maxPageButtons / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPageButtons / 2) - 1;
    
    if (currentPage <= maxPagesBeforeCurrent) {
      startPage = 1;
      endPage = maxPageButtons;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxPageButtons + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <PageHeader title="Our Blogs" breadcrumbs={breadcrumbs} />
      <main className="container">
        <div className="row">
          <div className="col-12">
            <section className={styles.blogsWrapper}>
              <div className={styles.container}>
                {currentBlogs.length > 0 ? (
                  <div className={styles.grid}>
                    {currentBlogs.map((blog) => (
                      <BlogCard 
                        key={blog.id}
                        blog={blog}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <p>No blog posts found.</p>
                  </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`${styles.pageItem} ${styles.navButton}`}
                    >
                      <FaChevronLeft /> Previous
                    </button>
                    
                    <div className={styles.pageNumbers}>
                      {pageNumbers.map(number => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`${styles.pageItem} ${currentPage === number ? styles.active : ''}`}
                        >
                          {number}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`${styles.pageItem} ${styles.navButton}`}
                    >
                      Next <FaChevronRight />
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </Fragment>
  );
}