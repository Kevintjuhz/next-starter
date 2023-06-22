import Search from '@/components/search';
import SidebarList from '@/components/sidebar-list';
import ArticleCardList from '@/components/article-card-list';
import AuthorList from '@/components/author-list';

export default function BlogList() {
  return (
    <div className="grid grid-cols-4 gap-1 md:gap-12">
      <div className="col-span-4 md:hidden">
        <Search />
      </div>
      <div className="hidden col-span-1 md:block">
        <SidebarList />
      </div>
      <div className="col-span-4 md:col-span-2">
        <ArticleCardList />
      </div>

      <div className="hidden col-span-1 md:block">
        <Search />
        <AuthorList />
      </div>
    </div>
  );
}
