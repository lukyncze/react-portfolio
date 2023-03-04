import {motion} from 'framer-motion';
import {fadeIn} from '../../helpers/fadeIn';
import Img1 from '../../assets/portfolio-img1.png';
import Img2 from '../../assets/portfolio-img2.png';
import Img3 from '../../assets/portfolio-img3.png';
import {motionLowerViewortProps} from '../../helpers/motion';

interface ProjectProps {
  title: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
}

const Project = ({title, category, image}: ProjectProps): JSX.Element => (
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

    <img className='group-hover: scale-125 transition-all duration-500' {...image} />

    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
      <span className='text-gradient'>{category}</span>
    </div>

    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
      <span className='text-3xl text-white'>{title}</span>
    </div>
  </div>
);

const Work = (): JSX.Element => {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
            variants={fadeIn('right', 0.3)}
            {...motionLowerViewortProps}
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>

              <p className='max-w-sm mb-16'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid enim
                obcaecati odio inventore voluptatem blanditiis est consequatur voluptate.
              </p>

              <button className='btn btn-sm'>View all projects</button>
            </div>

            <Project
              title='Project Title'
              category='UI/UX Design'
              image={{src: Img1, alt: 'First project'}}
            />
          </motion.div>

          <motion.div
            className='flex-1 flex flex-col gap-y-10'
            variants={fadeIn('left', 0.2)}
            {...motionLowerViewortProps}
          >
            <Project
              title='Project Title'
              category='Development'
              image={{src: Img2, alt: 'Second project'}}
            />

            <Project
              title='Project Title'
              category='Digital Marketing'
              image={{src: Img3, alt: 'Third project'}}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
