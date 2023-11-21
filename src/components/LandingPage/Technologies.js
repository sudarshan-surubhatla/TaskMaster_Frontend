import { Link } from 'react-router-dom';
import reactlogo from './react_logo.png';
import maillogo from './nm_logo.png';
import mongologo from './mongo_logo.png';
import tailwindlogo from './Tailwind_logo.png';

const Technologies = () => {
  return (
    <section id='testimonials'>
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
          Technologies Used...
        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>

          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={reactlogo} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>ReactJS</h5>
            <p className='text-sm text-darkGrayishBlue'>
            React powers our to-do app's frontend, leveraging its component-based architecture to create a dynamic and responsive user interface.
            </p>
          </div>

          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={mongologo} style={{height:'70px', width:'100px'}} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>MongoDB</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Our backend utilizes MongoDB for efficient data storage, providing a flexible and scalable solution for managing and retrieving information seamlessly.
            </p>
          </div>

          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={tailwindlogo} className='w-16 -mt-14' style={{height:'70px',width:'100px'}} alt='' />
            <h5 className='text-lg font-bold'>Tailwind CSS</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Tailwind CSS streamlines our to-do app's design with a utility-first approach, making it visually appealing, responsive, and consistently modern.
            </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={maillogo} className='w-16 -mt-14' style={{height:'70px',width:'100px'}} alt='' />
            <h5 className='text-lg font-bold'>NodeMailer</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Nodemailer integrates seamlessly into our backend, allowing our to-do app to send timely email reminders
            </p>
          </div>
        </div>
        
        <div className='my-16'>
          <Link
            to='/register'
            className='p-3 px-6 pt-2 text-white bg-black rounded-full baseline '
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
