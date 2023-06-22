import PageHeader from '@/components/page-header';
import ImageAndText from '@/components/image-and-text';
import ArticleCollection from '@/components/article-collection';
import ProductCollection from '@/components/product-collection';
import CallToAction from '@/components/call-to-action';

export default function PageStack({ stack }) {
  return stack.map((element, index) => {
    if (element.__typename === 'PageHeader') {
      return (
        <PageHeader
          key={index}
          text={element.text}
          heading={element.heading}
          image={element.image[0]?.url}
          cta_label={element.cta_label}
        />
      );
    } else if (element.__typename === 'ImageAndText') {
      return (
        <ImageAndText
          key={index}
          image_position={element.image_position}
          image_url={element.image[0]?.url}
          image_name={element.image[0].name}
          title={element.title}
          text={element.text}
        />
      );
    } else if (element.__typename === 'ArticleCollection') {
      return (
        <ArticleCollection
          key={index}
          heading={element.heading}
          description={element.description}
          cta_label={element.cta_label}
          cta_url={element.cta_url}
          articles={element.articles}
        />
      );
    } else if (element.__typename === 'ProductCollection') {
      return (
        <ProductCollection
          key={index}
          heading={element.heading}
          description={element.description}
          cta_label={element.cta_label}
          products={element.products}
        />
      );
    } else if (element.__typename === 'CallToAction') {
      return (
        <CallToAction
          key={index}
          description={element.description}
          heading={element.heading}
          image={element.background_image[0]?.url}
          cta_label={element.cta_label}
        />
      );
    }
  });
}
