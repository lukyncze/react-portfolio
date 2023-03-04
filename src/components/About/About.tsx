import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../../helpers/fadeIn';
import {motionLowerViewortProps} from '../../helpers/motion';

interface HighlightProps {
  content: string;
  value: number;
  additionalString?: string;
}

const highlights: HighlightProps[] = [
  {content: 'Years of experience', value: 13},
  {content: 'Projects Completed', value: 15, additionalString: 'k+'},
  {content: 'Satisfied Clients', value: 12, additionalString: 'k+'},
];

const renderHighlights = (highlights: HighlightProps[], isInView: boolean): JSX.Element[] => {
  return highlights.map(({content, value, additionalString}, key) => (
    <div key={key}>
      <div className='text-[40px] font-tertiary text-gradient mb-2 pt-2'>
        {isInView ? <CountUp start={0} end={value} duration={3} /> : null}
        {additionalString}
      </div>

      <div className='font-primary text-sm tracking-[2px]'>{content}</div>
    </div>
  ));
};

const About = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
            variants={fadeIn('right', 0.3)}
            {...motionLowerViewortProps}
          ></motion.div>

          <motion.div
            className='flex-1'
            variants={fadeIn('left', 0.5)}
            {...motionLowerViewortProps}
          >
            <h2 className='h2 text-accent'>About me.</h2>

            <h3 className='h3 mb-4'>
              I'm a Freelance Front-end Developer with over 5 years of experience.
            </h3>

            <p className='mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo quis temporibus
              doloremque, eum ad architecto earum dolorum laboriosam facere.
            </p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              {renderHighlights(highlights, inView)}
            </div>

            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>

              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
