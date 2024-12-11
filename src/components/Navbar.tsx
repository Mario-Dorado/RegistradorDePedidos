import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-pink-500 to-purple-300 max-h-20 py-2 flex justify-center'>
      <div className='max-w-4xl w-full flex justify-between items-center px-2 lg:px-0'>
        <div className='flex gap-2'>
          <img
            src='/logo-nobg.png'
            alt="Logo de D'Lu"
            className='h-12 w-auto'
          />

          <h1 className='text-2xl font-bold font-borel mt-4'>Pasteles D'Lu</h1>
        </div>

        <Link to={'/'}>
          <button className='py-2 px-4 bg-pink-600 text-white transition hover:bg-pink-400 rounded-full'>
            Nuevo registro
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
