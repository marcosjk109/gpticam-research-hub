const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/img/logo gpticam.png" 
                alt="GPTICAM Logo" 
                className="h-12 w-auto mr-3" 
              />
              <h3 className="text-xl font-bold">GPTICAM</h3>
            </div>
            <p className="text-blue-200">
              Grupo de Pesquisa de Tecnologias de Informação e Comunicação na Amazônia
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-blue-200">Email: contato@gpticam.org</p>
            <p className="text-blue-200">Telefone: (00) 0000-0000</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="/pesquisadores" className="text-blue-200 hover:text-white transition-colors">Pesquisadores</a></li>
              <li><a href="/bolsistas" className="text-blue-200 hover:text-white transition-colors">Bolsistas</a></li>
              <li><a href="/projetos" className="text-blue-200 hover:text-white transition-colors">Projetos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-700 text-center">
          <p>&copy; {currentYear} GPTICAM - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
