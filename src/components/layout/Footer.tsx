const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="h-2 bg-[#2C5550] w-full"></div>
      <footer className="bg-[#FDD744] py-3 w-full">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex items-center">
            <div className="text-white text-xs flex items-center">
              <img 
                src="/img/logo gpticam.png" 
                alt="GPTICAM Logo" 
                className="h-4 w-auto mr-1.5" 
              />
              <span>&copy; {currentYear} GPTICAM. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
