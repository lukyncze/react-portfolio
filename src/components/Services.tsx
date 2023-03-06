import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../helpers/fadeIn';
import {motionLowerViewortProps} from '../helpers/motion';
import Container from '../common/Container';

interface Service {
  name: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    name: 'UI/UX Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laboriosam voluptatem placeat nisi, omnis aut natus est. Odio, architecto consequatur!',
    link: 'Learn More',
  },
  {
    name: 'Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laboriosam voluptatem placeat nisi, omnis aut natus est. Odio, architecto consequatur!',
    link: 'Learn More',
  },
  {
    name: 'Digital Marketing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laboriosam voluptatem placeat nisi, omnis aut natus est. Odio, architecto consequatur!',
    link: 'Learn More',
  },
  {
    name: 'Product Branding',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laboriosam voluptatem placeat nisi, omnis aut natus est. Odio, architecto consequatur!',
    link: 'Learn More',
  },
];

const renderServices = (services: Service[]) => {
  return services.map(({name, description, link}, key) => (
    <div key={key} className='flex border-b border-white/20 h-[146px] mb-[38px]'>
      <div className='max-w-[476px]'>
        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>

        <p className='font-secondary leading-tight'>{description}</p>
      </div>

      <div className='flex flex-col flex-1 items-end'>
        <a href='#' className='flex btn w-9 h-9 mb-[42px] justify-center items-center'>
          <BsArrowUpRight />
        </a>

        <a href='#' className='text-gradient text-sm'>
          {link}
        </a>
      </div>
    </div>
  ));
};

const Services = (): JSX.Element => {
  return (
    <div className='section' id='services'>
      <Container>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
            variants={fadeIn('right', 0.3)}
            {...motionLowerViewortProps}
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>

            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 5 years of experience.
            </h3>

            <button className='btn btn-sm'>See my work</button>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.5)} {...motionLowerViewortProps}>
            {renderServices(services)}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
