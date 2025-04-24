const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="h-2 bg-[#2C5550] w-full"></div>
      <footer className="bg-[#FDD744] py-4 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-[#20423E] text-sm flex items-center mb-3 sm:mb-0">
              <img 
                src="/img/logo gpticam.png" 
                alt="GPTICAM Logo" 
                className="h-5 w-auto mr-2" 
              />
              <span>&copy; {currentYear} GPTICAM. Todos os direitos reservados.</span>
            </div>
            <div className="flex space-x-4 text-sm text-[#20423E]">
              <a href="#" className="hover:underline">Política de Privacidade</a>
              <a href="#" className="hover:underline">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
