import Hero from '@/components/hero';
import BlogList from '@/components/blog-list';
import { BlogProvider } from '@/context/blog-context';

export default function Page() {
  return (
    <BlogProvider>
      <div className="container mx-auto md:px-0">
        <Hero
          title="Our blog"
          description="Fun recipes, tips-and-tricks and more from our in-house chefs."
        />
        <BlogList />
      </div>
    </BlogProvider>
  );
}
