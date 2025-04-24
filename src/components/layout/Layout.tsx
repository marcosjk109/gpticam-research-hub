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
    <div className={`min-h-screen flex flex-col ${isDiego ? 'bg-[#03041C] text-white dark:bg-diego-style dark:text-diego-style diego-cursor' : ''} ${className}`} style={{ overflow: 'hidden' }}>
      <Header />
      <main className={`flex-grow container mx-auto px-4 py-4 sm:py-6 md:py-8 max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] ${isDiego ? 'diego-bg-pattern' : ''}`}>
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
