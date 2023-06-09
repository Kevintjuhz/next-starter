'use client';
import { createContext, useState } from 'react';

const BlogContext = createContext(null);

function BlogProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <BlogContext.Provider
      value={{
        articles,
        setArticles,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export { BlogProvider, BlogContext };
