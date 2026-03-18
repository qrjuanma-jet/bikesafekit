import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Image / Color Tint */}
      <div className="absolute inset-0 bg-kinematic-warm/80 z-0"></div>
      <div 
        className="absolute inset-0 z-[-1] opacity-30 object-cover w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/candado.jpg')" }} // Imagen representativa sutil
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Authority Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-kinematic-terracotta/30 bg-kinematic-terracotta/5 text-kinematic-neutral text-sm font-medium mb-8 fade-in-up" style={{animationDelay: '0.1s'}}>
          <span className="w-2 h-2 rounded-full bg-kinematic-terracotta mr-2 animate-pulse"></span>
          Método probado en situaciones reales con 100% de efectividad
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6 fade-in-up" style={{animationDelay: '0.2s'}}>
          Protege la bici de tus hijos<br />
          <span className="serif-accent text-kinematic-terracotta font-normal">de los robos</span> en la calle.
        </h1>
        
        <p className="text-lg md:text-xl text-kinematic-neutral/80 max-w-2xl mb-12 fade-in-up" style={{animationDelay: '0.3s'}}>
          Un kit especializado diseñado <span className="font-semibold text-kinematic-neutral">por y para padres</span> cansados de la impotencia ante los ladrones. Seguridad integral, invisible y resistente.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto fade-in-up" style={{animationDelay: '0.4s'}}>
          <a href="#comprar" className="btn-primary">
            Pídelo por sólo 69€ <span className="text-sm opacity-80 ml-1 font-normal">+ envío</span>
          </a>
          <a href="#como-funciona" className="btn-outline">
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
