import SpriteIcon from '@/components/SpriteIcon';
import DragChild from '@/components/dragChild';
import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  // console.log(JSON.stringify(allExco));
  return (
    <main>
      <section id='home' className='h-[90vh] relative'>
        <div className='absolute top-[30%] left-0 right-0 m-auto text-center'>
          <h1 className='font-bold text-7xl md:text-8xl tracking-widest'>
            <span className='text-[#b6ffd2] dark:text-[#8dfbb7] font-sans'>
              .
            </span>
            HACK
          </h1>
          <h3 className='font-medium text-lg md:text-xl'>
            Solving the problems of tomorrow
          </h3>
          <p className='font-medium text-xs md:text-sm leading-normal text-[#7F7F7F] max-w-[80%] md:max-w-[70%] m-auto'>
            To facilitate and provide a conducive platform for effective
            knowledge sharing
          </p>
        </div>
        <DragChild
          className='absolute bottom-[25%] right-[5%]'
          dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
          whileDrag={{ scale: 1.2, opacity: 0.3 }}
        >
          <SpriteIcon
            id='fragmentArt'
            className={
              'absolute top-0 right-0 h-[4rem] w-[4rem] m-0 rotate-[-35deg] scale-[1] sm:scale-[1.2] md:scale-[1.4] dark:opacity-60 opacity-90'
            }
          />
        </DragChild>
        <DragChild
          className='absolute bottom-[40%] left-[15%]'
          dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
          whileDrag={{ scale: 1.2, opacity: 0.3 }}
        >
          <SpriteIcon
            id='fragmentArt'
            className={
              'absolute top-0 right-0 h-[4rem] w-[4rem] m-0 rotate-[10deg] scale-[.8] sm:scale-[1] md:scale-[1.1] dark:opacity-50 opacity-80'
            }
          />
        </DragChild>
        <DragChild
          className='absolute top-[5%] right-[15%]'
          dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
          whileDrag={{ scale: 1.2, opacity: 0.3 }}
        >
          <SpriteIcon
            id='fragmentArt'
            className={
              'absolute top-0 right-0 h-[4rem] w-[4rem] m-0 rotate-[-10deg] scale-[.6] sm:scale-[.8] md:scale-[.9] dark:opacity-40 opacity-70'
            }
          />
        </DragChild>
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
