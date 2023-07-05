import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  // console.log(JSON.stringify(allExco));
  return (
    <main>
      <h1>Home</h1>
      {allExco.map((e, i) => (
        <div key={i * 10 + 2}>
          <h3 key={i * 10}>{e.name}</h3>
          <p key={i * 10 + 1} className='break-words'>
            {JSON.stringify(e, null, 2)}
          </p>
        </div>
      ))}
    </main>
  );
}
