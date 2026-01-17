// app/blogs/[slugs]/sections/components/KeywordParser.jsx
'use client';

import React from 'react';

const KeywordParser = ({ description = '', anchorWords = {} }) => {
  if (!description) return null;

  // If there are no anchor words, just return the description as is
  if (!anchorWords || Object.keys(anchorWords).length === 0) {
    return <>{description}</>;
  }

  // Create a regex pattern that matches any of the anchor words
  const pattern = new RegExp(
    Object.keys(anchorWords)
      .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special regex characters
      .join('|'),
    'gi'
  );

  // Split the description by the pattern and map through the parts
  const parts = description.split(pattern);
  const matches = description.match(pattern) || [];

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {matches[index] && anchorWords[matches[index].toLowerCase()] && (
            <a 
              href={anchorWords[matches[index].toLowerCase()]} 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {matches[index]}
            </a>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default KeywordParser;