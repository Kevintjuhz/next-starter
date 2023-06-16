'use client';
import { useContext } from 'react';
import { BlogContext } from '@/context/blog-context';
import { GetArticles } from '@/queries/getArticles';
import { useQuery } from '@apollo/client';
import ArticleCard from '@/components/article-card';

export default function ArticleCardList() {
  const { selectedCategory, setArticles } = useContext(BlogContext);
  let variables;

  if (selectedCategory) {
    variables = {
      where: {
        categories: {
          _slug_any: selectedCategory,
        },
      },
    };
  }

  const { data, loading, error } = useQuery(GetArticles, {
    variables,
  });

  if (error) return <p>Error loading articles</p>;

  if (loading) return <p>Loading...</p>;

  const articles = data?.Articles.items;
  setArticles(articles);

  return (
    <>
      {articles?.map(article => (
        <ArticleCard key={article._id} data={article} />
      ))}
    </>
  );
}
