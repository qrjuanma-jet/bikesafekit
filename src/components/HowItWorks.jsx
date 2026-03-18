import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Oculta el Localizador',
      desc: 'Instala el tag (versión iOS o Android) en un lugar discreto de la bici. Configúralo en 2 minutos con tu móvil.',
    },
    {
      num: '02',
      title: 'Asegura las Ruedas y el Sillín',
      desc: 'Cambia los cierres rápidos de fábrica por nuestros ejes y cierre de seguridad. Adiós al robo por piezas.',
    },
    {
      num: '03',
      title: 'Disuade al Ladrón',
      desc: 'Coloca la pegatina de advertencia GPS bien visible y usa el candado ligero como primera barrera disuasoria.',
    }
  ];

  return (
    <section className="py-24 px-4 bg-kinematic-warm relative" id="como-funciona">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-kinematic-neutral">Instalación <span className="serif-accent text-kinematic-terracotta">en 5 minutos</span></h2>
          <p className="text-kinematic-neutral/70 max-w-xl mx-auto font-medium">
            Tres pasos. Cero complicaciones. Seguridad inmediata para tu tranquilidad.
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-kinematic-neutral/10 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-kinematic-neutral text-kinematic-warm flex items-center justify-center text-xl font-bold mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-kinematic-terracotta shadow-md">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-kinematic-neutral">{step.title}</h3>
                <p className="text-kinematic-neutral/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
