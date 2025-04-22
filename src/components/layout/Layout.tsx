import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  isDiego?: boolean;
}

const Layout = ({ children, className = "", isDiego = false }: LayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col transition-colors ${isDiego ? 'bg-[#03041C] text-white dark:bg-diego-style dark:text-diego-style diego-cursor' : ''} ${className}`}>
      <Header />
      <main className={`flex-grow container mx-auto px-4 py-8 animate-fade-in ${isDiego ? 'diego-bg-pattern' : ''}`}>
        {children}
      </main>
      <Footer />
      
      {/* Elementos decorativos do Diego */}
      {isDiego && (
        <>
          <div className="fixed -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl diego-float"></div>
          <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl diego-float" style={{ animationDelay: "-2s" }}></div>
        </>
      )}
    </div>
  );
};

export default Layout;
