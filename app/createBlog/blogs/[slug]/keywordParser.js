
import styles from "./page.module.css";

const KeywordParser = ({ description = "", anchorWordsSection = {}, usedKeywords }) => {
  if (!description || typeof description !== "string") return description;
  if (!anchorWordsSection || Object.keys(anchorWordsSection).length === 0) return description;

  const words = Object.keys(anchorWordsSection).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

  return description.split(regex).map((part, index) => {
    const lowerPart = part.toLowerCase().trim();

    // ✅ Show only first occurrence
    if (words.some(word => word.toLowerCase() === lowerPart) && !usedKeywords.has(lowerPart)) {
      usedKeywords.add(lowerPart);
      return (
        <a
          key={index}
          href={anchorWordsSection[lowerPart]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.highlighted_keyword}
        >
          {part}
        </a>
      );
    }

    return part;
  });
};

export default KeywordParser;

