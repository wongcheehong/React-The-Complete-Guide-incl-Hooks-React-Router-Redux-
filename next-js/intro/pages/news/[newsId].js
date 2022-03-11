import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = console.log(router.query.newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
