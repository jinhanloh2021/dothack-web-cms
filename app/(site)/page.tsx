import SpriteIcon from '@/components/SpriteIcon';
import DragChild from '@/components/dragChild';
import { getExco } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';

export default async function Home() {
  const allExco: ExcoQuery[] = await getExco();
  // console.log(JSON.stringify(allExco));
  return (
    <main className='min-h-screen antialiased'>
      <section id='hero' className='h-[100vh] relative max-w-6xl mx-auto'>
        <div className='flex flex-col md:gap-1 items-center text-center select-none'>
          <h1 className='font-bold text-7xl md:text-8xl tracking-widest mt-[25vh]'>
            <span className='text-[#ADFFCD] dark:text-[#70FFA7] font-sans'>
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
            svgClassName={
              'absolute top-0 right-0 m-0 rotate-[-35deg] scale-[1] sm:scale-[1.2] md:scale-[1.4] dark:opacity-60 opacity-90'
            }
            heightClass='h-[4rem]'
            widthClass='w-[4rem]'
          />
        </DragChild>
        <DragChild
          className='absolute bottom-[40%] left-[20%]'
          dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
          whileDrag={{ scale: 1.2, opacity: 0.3 }}
        >
          <SpriteIcon
            id='fragmentArt'
            svgClassName={
              'absolute top-0 right-0 m-0 rotate-[10deg] scale-[.8] sm:scale-[1] md:scale-[1.1] dark:opacity-50 opacity-80'
            }
            heightClass='h-[4rem]'
            widthClass='w-[4rem]'
          />
        </DragChild>
        <DragChild
          className='absolute top-[5%] right-[15%]'
          dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
          whileDrag={{ scale: 1.2, opacity: 0.3 }}
        >
          <SpriteIcon
            id='fragmentArt'
            svgClassName={
              'absolute top-0 right-0 m-0 rotate-[-10deg] scale-[.6] sm:scale-[.8] md:scale-[.9] dark:opacity-40 opacity-70'
            }
            heightClass='h-[4rem]'
            widthClass='w-[4rem]'
          />
        </DragChild>
      </section>

      <section className='mx-auto flex flex-col gap-8 max-w-[90%] sm:max-w-[80%] md:max-w-[750px] md:flex-row md:justify-between lg:max-w-[900px] xl:max-w-[1100px] mb-16'>
        <article className='flex-1'>
          <SpriteIcon
            id='SeIllustration'
            heightClass='h-32 md:h-36 lg:h-40'
            widthClass='w-44 md:w-48 lg:w-52'
            svgClassName='ml-8 mr-auto md:m-auto md:translate-y-2'
          />
          <h2 className='text-right text-[2.5rem] font-bold mx-4 mb-2 mt-4 md:text-center md:mx-auto'>
            Who are we?
          </h2>
          <p className='text-right mx-4 text-base font-medium md:text-center md:mx-auto lg:w-[80%]'>
            SMU .Hack is an interest group committed to spreading the passion
            for technology through workshops and other events.
          </p>
        </article>
        <article className='flex-1'>
          <SpriteIcon
            id='DeveloperIllustration'
            heightClass='h-36 lg:h-40'
            widthClass='w-40 md:w-44 lg:w-48'
            svgClassName='ml-auto mr-8 md:m-auto'
          />
          <h2 className='text-left text-[2.5rem] font-bold mx-4 mb-2 mt-4 md:text-center md:mx-auto'>
            Mission
          </h2>
          <p className='text-left mx-4 text-base font-medium md:text-center md:mx-auto lg:w-[80%]'>
            To facilitate and provide a conducive platform for effective
            knowledge sharing.
          </p>
        </article>
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
