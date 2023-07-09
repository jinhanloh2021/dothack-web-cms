import HeroArtDrag from '@/components/heroArtDrag';
import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  // console.log(JSON.stringify(allExco));
  return (
    <main>
      <section id='home' className='h-[90vh] text-center'>
        <h1 className='font-bold text-7xl tracking-widest pt-[60%]'>
          <span className='text-[#81FFB2] font-sans'>.</span>HACK
        </h1>
        <h3 className='font-medium text-lg'>
          Solving the problems of tomorrow
        </h3>
        <p className='font-medium text-xs leading-normal text-[#7F7F7F]'>
          To facilitate and provide a conducive platform for effective knowledge
          sharing
        </p>
        <HeroArtDrag />
      </section>
      {allExco.map((e, i) => (
        <div key={i}>
          <h3>{e.name}</h3>
          <p className='break-words'>{JSON.stringify(e, null, 2)}</p>
        </div>
      ))}
    </main>
  );
}
