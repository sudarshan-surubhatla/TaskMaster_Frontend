import todo from './todo_app.png'
import './Styles.css';
const Hero = () => {
  return (
    <section id='hero'>
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2  '>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left animate-fadeInLeft ' style={{ fontSize: '60px' }}>
            Organize your Tasks with Ease
          </h1>
          <p className='max-w-sm text-center animate-reveal '>
            Get things done easily with our TaskMaster a simple to-do app. It makes your day better and helps you stay organized effortlessly.
          </p>
        </div>
        <div className='md:w-1/2 animate-fadeInRight'>
          <img src={todo} width={'600px'} alt='' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
