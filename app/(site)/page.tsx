import SpriteIcon from '@/components/SpriteIcon';
import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  // console.log(JSON.stringify(allExco));
  return (
    <main>
      <h1 className='text-offWhite'>Home</h1>
      <SpriteIcon
        id='floatArt'
        className={'h-[12.5rem] w-[12.5rem] m-auto scale-100 bg-offBlack'}
      />
      {allExco.map((e, i) => (
        <div key={i}>
          <h3>{e.name}</h3>
          <p className='break-words'>{JSON.stringify(e, null, 2)}</p>
        </div>
      ))}
    </main>
  );
}
