import Link from 'next/link';
import Hero from '@/components/hero';
import PrimaryButton from '@/components/primary-button';

export default function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <Hero
        title="Prepr Patterns"
        description="This site provides examples of how Prepr can be used to structure and build various webpages. We offer examples for building blogs, live stream sections, navigation structures, landing pages and even personalized webpages or an A/B testing setup."
      />
      <div className="flex flex-wrap justify-center md:gap-y-3">
        <Link href="/page-pattern/">
          <PrimaryButton>Page pattern</PrimaryButton>
        </Link>
        <Link href="/blog/">
          <PrimaryButton>Blog pattern</PrimaryButton>
        </Link>
        <Link href="/livestream/">
          <PrimaryButton>Live stream pattern</PrimaryButton>
        </Link>
        <Link href="/navigation/">
          <PrimaryButton>Navigation pattern</PrimaryButton>
        </Link>
        <Link href="/personalization/">
          <PrimaryButton>Personalization pattern</PrimaryButton>
        </Link>
        <Link href="/a-b-testing/">
          <PrimaryButton>A/B testing pattern</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
