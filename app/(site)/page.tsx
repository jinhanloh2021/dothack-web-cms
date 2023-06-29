import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  console.log(JSON.stringify(allExco));
  return (
    <div>
      <div>Home</div>
      {allExco.map((e, i) => (
        <>
          <h3 key={i}>{e.name}</h3>
          <p key={i}>{JSON.stringify(e, null, 2)}</p>
        </>
      ))}
    </div>
  );
}