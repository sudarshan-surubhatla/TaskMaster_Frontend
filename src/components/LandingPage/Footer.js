import maillogo from './email_icon.png'
const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='container flex flex-col-reverse text-white px-2 py-2 mx-auto space-y-8 md:flex-row md:space-y-0'>
      <div className="flex items-center">Mail us:</div>
        <a href='mailto:taskmaster.mern@gmail.com'>
          <img src={maillogo} style={{ height: '50px', width: '50px' }} /></a>
        <div className='hidden ml-auto text-white md:block' style={{ marginTop: '10px' }}>
          Copyright © 2023, All Rights Reserved
        </div>
      </div>
    </div> 
  );
};
export default Footer;
