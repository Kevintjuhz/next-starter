import client from '@/services/apollo-client';
import { GetNavigation } from '@/queries/GetNavigation';
import MainNavigation from '@/components/main-navigation';

export const revalidate = 0;

async function getData() {
  const { data } = await client.query({
    query: GetNavigation,
  });

  return data;
}

export default async function NavigationPage() {
  const data = await getData();

  return <MainNavigation navigation={data.Navigation} />;
}
