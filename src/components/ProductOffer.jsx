import React, { useState } from 'react';

const ProductOffer = () => {
  const [deviceVersion, setDeviceVersion] = useState('ios'); // 'ios' o 'android'

  const components = [
    {
      name: 'Localizador GPS Oculto',
      desc: 'Tag versión iOS o Android. Precisión milimétrica.',
      img: '/assets/tag_ios.jpg'
    },
    {
      name: 'Pegatina Disuasoria',
      desc: 'Advierte del rastreo GPS al instante. Material resistente al exterior.',
      img: '/assets/Pegatina.jpg'
    },
    {
      name: 'Ejes de Seguridad',
      desc: 'Para ruedas. Sustituyen el cierre rápido de fábrica.',
      img: '/assets/ejes.jpg'
    },
    {
      name: 'Cierre de Sillín Anti-robo',
      desc: 'Evita que se lleven el sillín en cuestión de segundos.',
      img: '/assets/cierre.jpg'
    },
    {
      name: 'Candado Ligero',
      desc: 'Primera barrera física. Práctico y fácil de transportar.',
      img: '/assets/candado.jpg'
    }
  ];

  return (
    <section className="py-24 px-4 bg-kinematic-warm" id="comprar">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-kinematic-neutral">El Kit <span className="serif-accent text-kinematic-terracotta">BikeSafe</span> Completo</h2>
          <p className="text-kinematic-neutral/70 max-w-2xl mx-auto">
            Todo lo que necesitas para asegurar la bicicleta de principio a fin, en un solo paquete.
          </p>
        </div>

        {/* Grid de Componentes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {components.map((comp, index) => (
            <div key={index} className="bg-white p-4 rounded-sm shadow-sm border border-kinematic-neutral/5 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mb-4 relative transition-all duration-500 group-hover:scale-[1.8] group-hover:-translate-y-4 group-hover:z-50">
                {/* Fallback de imagen en caso de que alguna no cargue perfecto */}
                <img 
                  src={comp.img} 
                  alt={comp.name} 
                  className="w-full h-full object-contain bg-white rounded-full group-hover:rounded-md transition-all duration-500 shadow-sm group-hover:shadow-2xl border border-kinematic-neutral/10"
                  onError={(e) => { e.target.src = '/assets/candado.jpg' }} // Fallback genérico a una foto existene por si acaso
                />
              </div>
              <h4 className="font-bold text-sm mb-2 text-kinematic-neutral leading-tight">{comp.name}</h4>
              <p className="text-xs text-kinematic-neutral/60">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* Caja de Precio y CTA */}
        <div className="max-w-2xl mx-auto bg-kinematic-neutral text-kinematic-warm p-8 md:p-12 rounded-sm text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-kinematic-terracotta/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-kinematic-terracotta/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Tu bici segura hoy</h3>
            <div className="my-6">
              <span className="line-through text-kinematic-warm/40 text-2xl mr-4">99€</span>
              <span className="text-6xl font-serif text-kinematic-terracotta font-bold">69€</span>
              <span className="text-sm font-sans text-kinematic-warm/70 ml-2">+ envío</span>
              <span className="block text-sm text-kinematic-warm/60 mt-2 uppercase tracking-widest">Precio especial hasta fin de existencias</span>
            </div>
            
            {/* Selector iOS / Android */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-3 text-kinematic-warm/80">Selecciona el sistema de tu móvil:</p>
              <div className="flex justify-center gap-4">
                <label className={`cursor-pointer border px-6 py-3 rounded-sm transition-all duration-300 flex items-center gap-2 ${deviceVersion === 'ios' ? 'border-kinematic-terracotta bg-kinematic-terracotta/10 text-white' : 'border-kinematic-warm/20 text-kinematic-warm/60 hover:border-kinematic-warm/50'}`}>
                  <input type="radio" name="device" value="ios" className="hidden" checked={deviceVersion === 'ios'} onChange={() => setDeviceVersion('ios')} />
                  <span className="font-bold">iOS (Apple)</span>
                </label>
                <label className={`cursor-pointer border px-6 py-3 rounded-sm transition-all duration-300 flex items-center gap-2 ${deviceVersion === 'android' ? 'border-kinematic-terracotta bg-kinematic-terracotta/10 text-white' : 'border-kinematic-warm/20 text-kinematic-warm/60 hover:border-kinematic-warm/50'}`}>
                  <input type="radio" name="device" value="android" className="hidden" checked={deviceVersion === 'android'} onChange={() => setDeviceVersion('android')} />
                  <span className="font-bold">Android</span>
                </label>
              </div>
            </div>

            <div className="mt-4 flex justify-center w-full">
              {deviceVersion === 'ios' ? (
                <stripe-buy-button
                  key="stripe-ios"
                  buy-button-id="buy_btn_1TCAZeDpKdHDrcOgeXQFNOss"
                  publishable-key="pk_live_51TC8i8DpKdHDrcOgXJKCa4xn5XQOWe2p0w3oDayBCq4Kd4a7KCx1PJkjEqRs9i2DRLf6NwO9LHQ2V05ngDJJSmkb00inStcyz0"
                ></stripe-buy-button>
              ) : (
                <stripe-buy-button
                  key="stripe-android"
                  buy-button-id="buy_btn_1TCB9nDpKdHDrcOgdzqIVHAq"
                  publishable-key="pk_live_51TC8i8DpKdHDrcOgXJKCa4xn5XQOWe2p0w3oDayBCq4Kd4a7KCx1PJkjEqRs9i2DRLf6NwO9LHQ2V05ngDJJSmkb00inStcyz0"
                ></stripe-buy-button>
              )}
            </div>
            <p className="text-xs text-kinematic-warm/50 mt-6 mt-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Stock disponible para envío inmediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOffer;
