import {motion} from 'framer-motion';
import {motionLowerViewortProps} from '../helpers/motion';
import {fadeIn} from '../helpers/fadeIn';
import Container from '../common/Container';

const Contact = (): JSX.Element => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <Container>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            className='flex-1 flex justify-start items-center'
            variants={fadeIn('right', 0.3)}
            {...motionLowerViewortProps}
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>

              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            variants={fadeIn('left', 0.3)}
            {...motionLowerViewortProps}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
            />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            ></textarea>

            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
