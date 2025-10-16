import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { blogDb } from "../../../firebaseConfigBlogs"; // Use blogs-specific Firebase config
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
// import industrystyles from '../../industries/[slug]/industry.module.css'
// import Navigation from "../../components/Header/navigation";
import SocialShare from "./SocialShare";
import KeywordParser from "./keywordParser";
import TableOfContents from "./TableOfContents";
import Header from "../../../components/layout/header/Header";
import Footer from "../../../components/layout/footer/Footer";
import PageHeader from "../../../components/layout/PageHeader";

// import ImageComponent from '../../admin/ImageComponent';

async function getBlogPost(slug) {
  const docRef = doc(blogDb, "blogs", slug);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return { id: docSnap.id, ...docSnap.data() };
}

async function getDynamicData(collectionName) {
  const querySnapshot = await getDocs(collection(blogDb, collectionName));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function generateStaticParams() {
  try {
    const blogCollection = collection(blogDb, "blogs");
    const querySnapshot = await getDocs(blogCollection);
    return querySnapshot.docs.map((doc) => ({ slug: doc.id }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Convert day to ordinal (1st, 2nd, 3rd, etc.)
  const ordinalSuffix = (n) => {
    if (n > 3 && n < 21) return "th"; // Covers 11-13 (special cases)
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${day}${ordinalSuffix(day)} ${month} ${year}`;
};


export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return {
      title: "Blog Not Found - Tech Cloud ERP",
      description: "The blog post you are looking for does not exist.",
      keywords: "Tech Cloud ERP, blog, ERP solutions",
    };
  }
  return {
    title: post.title || "Tech Cloud ERP Blog",
    description: post.meta?.description || "Read the latest articles from Tech Cloud ERP.",
    keywords: post.meta?.keywords?.join(", ") || "ERP, software, business solutions",
    openGraph: {
      title: post.meta?.title || "Tech Cloud ERP Blog",
      description: post.meta?.description || "Read the latest articles from Tech Cloud ERP.",
      images: [
        {
          url: post.image || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

async function getRelevantPosts(tags, currentSlug) {
  if (!tags || tags.length === 0) return [];
  const blogCollection = collection(blogDb, "blogs");
  const querySnapshot = await getDocs(blogCollection);
  const allPosts = querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((post) => post.id !== currentSlug && post.tags?.some((tag) => tags.includes(tag)))
    .sort((a, b) => (b.date?.seconds || 0) - (a.date?.seconds || 0))
    .slice(0, 5);
  return allPosts;
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const relevantPosts = await getRelevantPosts(post.tags, params.slug);
  const faqs = await getDynamicData("faqs");
  const anchorWordsObject = post.anchorWordsSection?.reduce((acc, item) => {
    if (item.word && item.href) {
      acc[item.word.toLowerCase().trim()] = item.href;
    }
    return acc;
  }, {});

    // ✅ Define a Set to track used keywords
    const usedKeywords = new Set();
  return (
    <main className={styles.main}>
      <Header />
   <PageHeader />
      <div className={styles.bodySection}>
      <div className="container">
          <div className="row">
            <div className="col-md-8">
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
              <img src={post.imageUrl || "/placeholder.svg"} alt={post.title}  className={styles.responsiveImage} />
              </div>

       

        <h2 className={styles.heading}>{post.title}</h2>




 
          {/* Blog Content */}
          <div className="blog-content">
          
              {post.contentSection?.map((section, index) => {
                  return (
                    <div key={index}>
                      <h4 className={styles.topheading}>{section.title}</h4>

                      {/* Now handling description as an array */}
                      {section.description?.map((desc, descIndex) => (
                        <p key={descIndex}  style={{ fontSize: "16px", textAlign: "justify" }}>
                          {/* <KeywordParser description={desc} anchorWordsSection={anchorWordsObject} /> */}

                          <KeywordParser
                              description={desc}
                              anchorWordsSection={anchorWordsObject}
                              usedKeywords={usedKeywords} // ✅ Pass usedKeywords
                            />
                        </p>
                      ))}
                    </div>
                  );
                })}
</div>  
      </div>
      
      </article>
      {/* Key Takeaways Section */}
      <div className="blog-content"> 
      <section className={styles.section}>
      <div className={styles.container}>
        {post?.pointsWiseText &&
        Object.keys(post.pointsWiseText).length > 0 ? (
          Object.keys(post.pointsWiseText).map((sectionKey) => {
            const sectionArray = post.pointsWiseText[sectionKey];

            if (!Array.isArray(sectionArray) || sectionArray.length === 0)
              return null;

            return (
              <div key={sectionKey}>
                {/* Render TopHeading & TopIntro for the first item */}
                {sectionArray[0]?.TopHeading && sectionArray[0]?.TopIntro && (
                  <>
                    <h4 className={styles.sectionTitle}>
                      {sectionArray[0].TopHeading}
                    </h4>
                    {/* <p className={styles.description}>
                      {sectionArray[0].TopIntro}
                    </p> */}

                    {/* <KeywordParser description={sectionArray[0].TopIntro} anchorWordsSection={anchorWordsObject} /> */}
                               <p style={{ fontSize: "18px" , textAlign: "justify" }}>
                               <KeywordParser
                                description={sectionArray[0].TopIntro}
                                anchorWordsSection={anchorWordsObject}
                                usedKeywords={usedKeywords} // ✅ Pass usedKeywords
                              />
                      </p>
                  </>
                )}

                {/* Render Remaining Points (if any) */}
                {sectionArray.length > 1 &&
                  sectionArray.slice(1).map((item, index) => (
                    <div key={index}>
                      <h5 className={styles.subHeading}>{item.title}</h5>
                      {/* <p className={styles.description}>{item.description}</p> */}
                      {/* <KeywordParser description={item.description} anchorWordsSection={anchorWordsObject} /> */}
                          <p style={{ fontSize: "18px" , textAlign: "justify" }}>
                          <KeywordParser
                                  description={item.description}
                                  anchorWordsSection={anchorWordsObject}
                                  usedKeywords={usedKeywords} // ✅ Pass usedKeywords
                        />
                      </p>
                    </div>
                  ))}
              </div>
            );
          })
        ) : (
          <p className={styles.description}>No content available</p>
        )}
      </div>
    </section>
      </div>
        {/* Call to Action Section */}
                    {post.ctaSection && (
              <div className={styles.ctaContainer}>
                <h3 className={styles.conclusiontitle}>{post.ctaSection.ctaTitle}</h3>
                {Array.isArray(post.ctaSection.descriptions) && post.ctaSection.descriptions.length > 0 ? (
                  post.ctaSection.descriptions.map((item, index) => (
                    <div key={index}>
                      <p style={{ fontSize: "18px" , textAlign: "justify" }}>
                        <KeywordParser
                          description={item}
                          anchorWordsSection={anchorWordsObject}
                          usedKeywords={usedKeywords} // ✅ Pass usedKeywords
                        />
                      </p>
                    </div>
                  ))
                ) : (
                  <p style={{ fontSize: "18px" }}>No Conclusions</p>
                )}
              </div>
            )}

   {/* Tags */}
          {post.tags && (
            <div className={styles.meta}>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
                          <p style={{margin: "10px"}}>Published Date: {formatDate(post.createdAt.toDate())}</p>

              </div>
              
            </div>
          )}
     {/* Frequently Asked Questions Container */}
    {/* <section className={styles.faqSection}>
    <div className={styles.container}>
    <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
    {console.log("FAQ Data: ", post?.faqSection?.faqs)} 
    <div className={styles.faqContainer}>
      {Array.isArray(post?.faqs) && post.faqs.length > 0 ? (
        post.faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))
      ) : (
        <p>No FAQs available</p>
      )}
    </div>
  </div>
</section> */}

          </div>
          <div className="col-md-4">
            <div className={styles.stickysidebar}>
              <TableOfContents />
              {/* <ImageComponent /> */}
   {relevantPosts.length > 0 && (
<section className={`${styles.recentPostsSection} mt-5`}>
      <h3 className={styles.heading}>Recent Post</h3>
    <div className={styles.postList}>
      {relevantPosts.map((related) => (
        <div key={related.id} className={styles.postItem}>
          <Image
            src={related.imageUrl || "/placeholder.svg"}
            alt={related.title}
            width={78}
            height={79}
            className={styles.thumbnail}
          />
          <div className={styles.postContent}>
            <p className={styles.date}>
              📅 {new Date(related.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <Link href={`/blogs/${related.slug}`} className={styles.postLink}>
              <span>{related.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)}

              <SocialShare title={post.title} />

            </div>
              </div>
          </div>
          </div>
          {/* relevant posts Section */}
                 



          </div>
          <Footer/>
          </main>
  );
}
