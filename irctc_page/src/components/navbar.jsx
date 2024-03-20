const Navbar = () => {
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];
  return (
    <div className='bg-gray-50 flex justify-between items-center h-12  mx-auto px-2 text-black'>
      {/* Logo */}
      <img className='w-13 h-12 mt-6' src='https://th.bing.com/th/id/OIP.EHn6kkNVOvYzlxSE_p6lgwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            {item.text} text
          </li>
        ))}
      </ul>
      
      <div >
        <img src="https://th.bing.com/th/id/OIP.Qj0krI5apLAE79qFxMPHAQHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-10 h-12 mt-6" />
      </div>
      
    </div>
    
  );
};

export default Navbar;