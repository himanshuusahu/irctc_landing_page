
const Navbar2 = () => {
   
    const navItems = [
      { id: 1, text: 'Home1' },
      { id: 2, text: 'Company2' },
      { id: 3, text: 'Resources3' },
      { id: 4, text: 'About4' },
      { id: 5, text: 'Contact5' },
      { id: 6, text: 'Home1' },
      { id: 7, text: 'Company2' },
      { id: 8, text: 'Resources3' },
      { id: 9, text: 'About4' },
      
    ];
   
  
    return (
      <div className='bg-gray-50 flex justify-center items-center h-12  mx-auto px-2 text-black'>
        
        <ul className='hidden md:flex justify-center'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            >
              {item.text}
            </li>
          ))}
        </ul>  
      </div>
  

      
    );
  };
  
  export default Navbar2;