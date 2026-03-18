import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 bg-kinematic-neutral text-kinematic-warm" id="problema">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">La realidad de aparcar <br/><span className="serif-accent text-kinematic-terracotta">en la calle</span></h2>
          <p className="text-kinematic-warm/70 max-w-2xl mx-auto">
            Todos conocemos la sensación. Dejar la bici atada y volver rogando que siga ahí.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Problema */}
          <div className="p-8 border border-kinematic-warm/10 rounded-sm bg-kinematic-neutral relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-kinematic-warm/20 group-hover:bg-kinematic-terracotta transition-colors duration-500"></div>
            <h3 className="text-xl font-bold mb-6 text-kinematic-warm/50 uppercase tracking-widest text-sm">El Problema</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1">✕</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Impotencia total</h4>
                  <p className="text-kinematic-warm/60">Cuando roban una bici, rara vez se recupera. Los ladrones actúan rápido y sin consecuencias.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1">✕</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Candados inútiles</h4>
                  <p className="text-kinematic-warm/60">Un candado grueso solo retrasa el robo unos segundos si llevan la herramienta adecuada.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1">✕</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Robo por piezas</h4>
                  <p className="text-kinematic-warm/60">A veces te dejan el cuadro, pero se llevan las ruedas (con cierre rápido) y el sillín.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solución */}
          <div className="p-8 border border-kinematic-terracotta/30 rounded-sm bg-kinematic-warm text-kinematic-neutral relative overflow-hidden group shadow-soft">
            <div className="absolute top-0 left-0 w-1 h-full bg-kinematic-terracotta"></div>
            <h3 className="text-xl font-bold mb-6 text-kinematic-terracotta uppercase tracking-widest text-sm">La Solución BikeSafeKit</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Geoposicionamiento en vivo</h4>
                  <p className="text-kinematic-neutral/70">Localizador oculto iOS/Android. Sabes dónde está la bici en todo momento.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Efecto Disuasorio Inmediato</h4>
                  <p className="text-kinematic-neutral/70">Pegatina de alta visibilidad que advierte del rastreo GPS al instante.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-kinematic-terracotta mr-4 mt-1 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Protección de componentes</h4>
                  <p className="text-kinematic-neutral/70">Ejes de ruedas y cierre de sillín de seguridad (sin cierre rápido) + Candado disuasorio ligero.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
