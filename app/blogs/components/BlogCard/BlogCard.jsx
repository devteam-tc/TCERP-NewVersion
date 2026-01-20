// components/BlogCard/BlogCard.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({ blog }) {
  // Get the first image URL from tags array if imageUrl is not directly available
  const getImageUrl = () => {
    if (blog.imageUrl) return blog.imageUrl;
    
    if (blog.tags && Array.isArray(blog.tags)) {
      const imageTag = blog.tags.find(tag => 
        typeof tag === 'string' && 
        (tag.startsWith('http') || tag.startsWith('/'))
      );
      return imageTag || '/images/default-blog.jpg';
    }
    
    return '/images/default-blog.jpg';
  };

  const imageUrl = getImageUrl();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={blog.title || 'Blog post image'}
          width={400}
          height={250}
          className={styles.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default-blog.jpg';
          }}
        />
      </div>
      <div className={styles.content}>
        <h3>{blog.title || 'Untitled Post'}</h3>
        {blog.descriptions && blog.descriptions[0] && (
          <p className={styles.excerpt}>{blog.descriptions[0]}</p>
        )}
        <Link href={`/blogs/${blog.id || blog.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}