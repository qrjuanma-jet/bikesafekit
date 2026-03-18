import React from 'react';

const Evidence = () => {
  return (
    <section className="py-24 bg-kinematic-neutral text-center relative overflow-hidden text-kinematic-warm">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="inline-block px-3 py-1 bg-kinematic-terracotta/20 border border-kinematic-terracotta text-kinematic-terracotta rounded-full text-xs font-bold tracking-widest uppercase mb-8">
          Resultados Reales
        </div>
        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 leading-tight">
          "Método que he usado para las bicis de mis <span className="text-kinematic-terracotta">2 hijos</span> y para las de sus amigos con resultados <span className="serif-accent border-b-2 border-kinematic-terracotta">100% efectivos</span>."
        </h2>
        <p className="text-kinematic-warm/60 max-w-xl mx-auto italic">
          — Creador de BikeSafeKit. De padre harto, a solución definitiva.
        </p>

        {/* Cifras de Impacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-kinematic-warm/10 pt-10">
          <div>
            <div className="text-4xl font-serif text-kinematic-terracotta mb-2">100%</div>
            <div className="text-sm text-kinematic-warm/50 font-medium">Bicis protegidas</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-kinematic-terracotta mb-2">0</div>
            <div className="text-sm text-kinematic-warm/50 font-medium">Robos con éxito</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-kinematic-terracotta mb-2">24/7</div>
            <div className="text-sm text-kinematic-warm/50 font-medium">Geoposicionamiento en vivo</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-kinematic-terracotta mb-2">1</div>
            <div className="text-sm text-kinematic-warm/50 font-medium">Kit todo en uno</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
