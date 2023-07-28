import SpriteIcon from '@/components/SpriteIcon';
import DragChild from '@/components/dragChild';
import ExcoCard from '@/components/excoCard';
import EventCard from '@/components/eventCard';
import { Separator } from '@/components/ui/separator';
import { sortExco } from '@/lib/utils';
import { getCurrentCoreExco, getLatestEvent } from '@/sanity/sanity.queries';
import { ExcoQuery } from '@/types/Exco';
import Link from 'next/link';

// Root '/'
export default async function Home() {
  const sortedExco: ExcoQuery[] = sortExco(await getCurrentCoreExco());
  const latestEvent = await getLatestEvent();
  // console.log(JSON.stringify(latestEvent, null, 2));
  return (
    <>
      <main className='relative min-h-screen antialiased overflow-hidden'>
        <section id='hero' className='h-[90vh] relative max-w-6xl mx-auto'>
          <div className='flex flex-col md:gap-1 items-center text-center select-none'>
            <h1 className='font-bold text-7xl md:text-8xl tracking-widest mt-[30vh]'>
              <span className='text-[#93e4b2] dark:text-[#7bb792] font-sans'>
                .
              </span>
              HACK
            </h1>
            <h3 className='font-medium text-lg md:text-xl'>
              Solving the problems of tomorrow
            </h3>
            <p className='font-medium text-xs md:text-sm leading-normal text-textSecondaryLight dark:text-textSecondaryDark max-w-[80%] md:max-w-[70%] m-auto'>
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
            className='absolute top-[10%] right-[15%]'
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
            <p className='text-right text-textSecondaryLight dark:text-textSecondaryDark mx-4 text-base font-medium md:text-center md:mx-auto lg:w-[80%]'>
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
            <p className='text-left text-textSecondaryLight dark:text-textSecondaryDark mx-4 text-base font-medium md:text-center md:mx-auto lg:w-[80%]'>
              To facilitate and provide a conducive platform for effective
              knowledge sharing.
            </p>
          </article>
        </section>
        <Separator className='bg-zinc-200 dark:bg-zinc-700 w-[80%] mx-auto' />
        <section className='pb-10 mt-16'>
          <h2 className='text-center text-[2.5rem] font-bold md:text-center md:mx-auto mb-2'>
            Our Team
          </h2>
          <p className='text-center mx-4 sm:mx-auto text-base font-medium dark:text-textSecondaryDark text-textSecondaryLight mb-8 sm:max-w-[80%] lg:max-w-[60%]'>
            Meet our diverse team of learners, builders, teachers!
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[36rem] lg:w-[54rem] mx-auto justify-items-center gap-y-12'>
            {sortedExco.map((e, i) => (
              <ExcoCard
                key={i}
                src={e.imageSrc}
                name={e.name}
                position={e.position}
                lqip={e.lqip}
              />
            ))}
          </div>
        </section>
        <Separator className='bg-zinc-200 dark:bg-zinc-700 w-[80%] mx-auto' />
        <section className='mt-16'>
          <h2 className='text-center text-[2.5rem] font-bold md:text-center md:mx-auto mb-2'>
            Events
          </h2>
          <p className='text-center mx-4 sm:mx-auto text-base font-medium dark:text-textSecondaryDark text-textSecondaryLight mb-8 sm:max-w-[80%] lg:max-w-[60%]'>
            Check out our latest event!
          </p>
          <EventCard
            slug={latestEvent.slug}
            src={latestEvent.image.src}
            alt={latestEvent.image.alt}
            name={latestEvent.name}
            author={latestEvent.author.name}
            date={latestEvent.date}
            lqip={latestEvent.image.lqip}
            excerpt={latestEvent.excerpt}
          />
          <Link
            href={'/events'}
            className='flex justify-end align-middle gap-1 p-0 mb-8 mt-6 hover:underline hover:cursor-pointer w-[80%] max-w-[30rem] mx-auto'
          >
            <span className='text-sm font-inter'>All Events</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[9px] h-[9px] my-auto relative top-[.5px]'
              fill='none'
              viewBox='0 0 19 32'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='5.3'
                d='m3 29 13-13L3 3'
              />
            </svg>
          </Link>
        </section>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1258 1256'
          className='absolute h-[100vh] w-[200vw] md:w-[160vw] top-[-5vh] left-[-40vw] md:left-[-25vw] -z-10 rotate-[270deg] overflow-hidden'
        >
          <g clipPath='url(#a)' filter='url(#b)'>
            <path
              fill='url(#c)'
              d='M1094 400c-304 234-916 706-930 721l557-957 373 236Z'
            />
          </g>
          <defs>
            <linearGradient
              id='c'
              x1='149.7'
              x2='943.7'
              y1='1138.8'
              y2='331.3'
              gradientUnits='userSpaceOnUse'
            >
              <stop
                stopColor='currentColor'
                className='text-[#7affebdf] dark:text-[#7affeb08]'
              />
              <stop
                offset='1'
                stopColor='currentColor'
                className='text-[#dff7afc6] dark:text-[#084e234c]'
              />
            </linearGradient>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h1258v1256H0z' />
            </clipPath>
            <filter
              id='b'
              width='1258'
              height='1285'
              x='0'
              y='0'
              colorInterpolationFilters='sRGB'
              filterUnits='userSpaceOnUse'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                result='effect1_foregroundBlur_762_17'
                stdDeviation='82'
              />
            </filter>
          </defs>
        </svg>
      </main>
    </>
  );
}

/**
 * Tailwind breakpoints
 * sm 640px
 * md 768px
 * lg 1024px
 * xl 1280px
 * 2xl 1536px
 */
