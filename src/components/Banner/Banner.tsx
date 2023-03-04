import Image from '../../assets/avatar.svg';
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../../helpers/fadeIn';
import {motionHigherViewortProps} from '../../helpers/motion';

const Banner = (): JSX.Element => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
              variants={fadeIn('up', 0.3)}
              {...motionHigherViewortProps}
            >
              BEN <span>AIDEN</span>
            </motion.h1>

            <motion.div
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
              variants={fadeIn('up', 0.4)}
              {...motionHigherViewortProps}
            >
              <span className='text-white mr-4'>I am a</span>

              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Youtuber', 2000]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className='mb-8 max-w-lg mx-auto lg:mx-0'
              variants={fadeIn('up', 0.5)}
              {...motionHigherViewortProps}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, corrupti
              excepturi dolorum.
            </motion.p>

            <motion.div
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
              variants={fadeIn('up', 0.6)}
              {...motionHigherViewortProps}
            >
              <button className='btn btn-lg'>Contact me</button>

              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>

            <motion.div
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
              variants={fadeIn('up', 0.7)}
              {...motionHigherViewortProps}
            >
              <a href='#'>
                <FaYoutube />
              </a>

              <a href='#'>
                <FaGithub />
              </a>

              <a href='#'>
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
            variants={fadeIn('down', 0.5)}
            {...motionHigherViewortProps}
          >
            <img src={Image} alt='Image' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
