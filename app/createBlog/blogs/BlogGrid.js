"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { BsArrowRight } from "react-icons/bs";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";

const BlogGrid = ({ posts }) => {
  return (
    <section className={styles.blogGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                </div>

<div className={styles.heading1}>
  {/* <div className={styles.authorArea}>
    <a href="#" className={styles.date}>
      <FaUser style={{ marginRight: 5, marginTop: -2 }} /> Alex Roy
    </a>
    <a href="#" className={styles.date}>
      <FaRegCalendarAlt style={{ marginRight: 5, marginTop: -2 }} /> 8 December 2024
    </a>
  </div> */}
</div>
                <div className={styles.cardContent}>
                  
                  <h2>
                    {post.title} <span className={styles.arrow}></span>
                  </h2>
                     {/* {post.title} <span className={styles.arrow}>→</span> */}

                  {/* <p>{post.description}</p> */}
                  {/* <div className={styles.tags}>
                  <div className={styles.tags}>
                  {Array.isArray(post.tags) ? (
                    post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className={styles.tag}>No Tags</span> // Optional fallback
                  )}
                </div>

                  </div> */}
                    <Link className={styles.themeBtn1} href={`/blogs/${post.slug}`}>
                      Read More <span><BsArrowRight /></span>
                    </Link>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;