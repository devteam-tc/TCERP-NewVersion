'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './TableOfContents.module.css';

export default function TableOfContents({ contentSections = [] }) {
  const [headings, setHeadings] = useState([]);
  const isMounted = useRef(true);
  const observerRef = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    console.log('TableOfContents: Component mounted, setting up observer');
    
    const findAndProcessHeadings = () => {
      if (!isMounted.current) return [];
      
      console.log('Looking for headings...');
      
      // Get headings from the DOM
      const domHeadings = Array.from(document.querySelectorAll('h1.bg_heading1, h1.mainContentHeading1, h1, h2'))
        .filter(h => h.textContent.trim() !== '');
      
      // Get headings from contentSections prop
      const sectionHeadings = contentSections
        .filter(section => section.title)
        .map((section, index) => ({
          id: `section-${index}-${Date.now()}`,
          title: section.title,
          level: 2, // Assuming these are h2 level
          isFromProps: true
        }));

         // Create a Set of titles to track duplicates
  const seenTitles = new Set();
  
      // Combine and dedupe headings
    //   const allHeadings = [...domHeadings.map((element, index) => {
    //     if (!element.id) {
    //       element.id = `heading-${index}-${Date.now()}`;
    //     }

    //     return {
    //       id: element.id,
    //       title: element.textContent.trim(),
    //       level: parseInt(element.tagName.substring(1), 10) || 2,
    //       isFromDom: true
    //     };
    //   }), ...sectionHeadings];

    //   return allHeadings;
    // };
    const allHeadings = [
    ...domHeadings
      .filter(element => {
        const title = element.textContent.trim();
        const isDuplicate = seenTitles.has(title);
        if (!isDuplicate) {
          seenTitles.add(title);
          return true;
        }
        return false;
      })
      .map((element, index) => {
        if (!element.id) {
          element.id = `heading-${index}-${Date.now()}`;
        }
        return {
          id: element.id,
          title: element.textContent.trim(),
          level: parseInt(element.tagName.substring(1), 10),
          element: element
        };
      }),
    // Only include sectionHeadings that weren't already in the DOM
    ...sectionHeadings.filter(section => !seenTitles.has(section.title))
  ];
  console.log('Processed headings:', allHeadings);
  return allHeadings;
};

    const handleHeadingsFound = (newHeadings) => {
      if (!isMounted.current || !newHeadings.length) return;
      setHeadings(newHeadings);
    };

    // Initial check
    const initialHeadings = findAndProcessHeadings();
    if (initialHeadings.length > 0) {
      handleHeadingsFound(initialHeadings);
    }

    // Set up mutation observer to catch dynamically loaded content
    observerRef.current = new MutationObserver(() => {
      const newHeadings = findAndProcessHeadings();
      if (newHeadings.length > 0) {
        handleHeadingsFound(newHeadings);
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup function
    return () => {
      console.log('Cleaning up TableOfContents');
      isMounted.current = false;
      observerRef.current?.disconnect();
    };
  }, [contentSections]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    } else {
      // If the element wasn't found, it might be from contentSections
      // Try to find a matching heading in the DOM
      const matchingHeading = document.querySelector(`h1, h2, h3`).find(
        h => h.textContent.trim() === id
      );
      if (matchingHeading) {
        matchingHeading.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (headings.length === 0) {
    return (
      <aside className={styles.sidebarfixed}>
        <h3 className={styles.tocTitle}>Table of Contents</h3>
        <div className={styles.loading}>
          Loading...
        </div>
      </aside>
    );
  }

  return (
    <div className={styles.sidebarfixed}>
      <h3 className={styles.tocTitle}>Table of Contents</h3>
      <ul className={styles.tocList}>
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`${styles.tocItem} ${styles[`level-${heading.level}`] || ''}`}
          >
            <a 
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
              }}
              className={styles.tocLink}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}