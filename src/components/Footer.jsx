import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-kinematic-neutral text-kinematic-warm py-16 px-4 border-t border-kinematic-warm/10 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold font-sans mb-4">No dejes que sea demasiado tarde</h2>
          <p className="text-kinematic-warm/60 mb-8 max-w-md mx-auto">Tu bici segura hoy. El proceso de compra dura 30 segundos y lo enviamos mañana.</p>
          <a href="#comprar" className="btn-primary inline-flex text-lg px-10">
            Tu bici segura por 69€ <span className="text-sm opacity-80 ml-1 font-normal">+ envío</span>
          </a>
        </div>
        
        <div className="pt-12 border-t border-kinematic-warm/10 flex flex-col md:flex-row justify-between items-center text-sm text-kinematic-warm/40">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-kinematic-warm/80">BikeSafeKit</span>
            <span>&copy; {new Date().getFullYear()} Todos los derechos reservados</span>
          </div>
          <div className="flex gap-6">
            <a href="/aviso-legal.html" className="hover:text-kinematic-terracotta transition-colors">Aviso Legal</a>
            <a href="/privacidad.html" className="hover:text-kinematic-terracotta transition-colors">Privacidad</a>
            <a href="mailto:bikesafekit@gmail.com" className="hover:text-kinematic-terracotta transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
