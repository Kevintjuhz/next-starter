'use client';
import { useContext } from 'react';
import { BlogContext } from '@/context/blog-context';
import Author from '@/components/author';

export default function AuthorList() {
  const { articles } = useContext(BlogContext);

  const authors = []
    .concat(...articles.map(article => article.authors)) // Flatten the authors array and remove duplicates.
    .filter(
      (author, index, self) =>
        self.findIndex(a => a.full_name === author.full_name) === index
    );

  return (
    <div className="p-5 rounded-lg bg-gray-50">
      {authors.map(author => (
        <Author
          key={author._id}
          profile_pic={author.profile_pic[0].url}
          bio={author.bio}
          full_name={author.full_name}
        />
      ))}
    </div>
  );
}
