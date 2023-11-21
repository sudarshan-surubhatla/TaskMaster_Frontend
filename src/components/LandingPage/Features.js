import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about TaskMaster?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            TaskMaster provides all the basic functionalities that users need without any complexity.
            Our web-app is developed using MERN.
          </p>
        </div>

        <div className='flex flex-col space-y-8 md:w-1/2'>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row animate-fadeInUp'>
            <div className='rounded-l-full md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-black'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Stay on Schedule with Email Reminders
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Stay on Schedule with Email Reminders
              </h3>
              <p>
                Upon setting a specific time, our app will automatically dispatch email reminders to keep you on track.
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row animate-fadeInUp'>
            <div className='rounded-l-full md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-black'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Dynamic Themes
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Dynamic Themes
              </h3>
              <p>
                Toggle effortlessly between light and dark themes with our seamless theme-switching option.
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row animate-fadeInUp'>
            <div className='rounded-l-full  md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-black'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Effortless Task Management
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Effortless Task Management
              </h3>
              <p>
                Streamline your workflow with task indicators for active, completed, and all tasks, ensuring easy navigation and organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
