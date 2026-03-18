import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-kinematic-neutral/10 last:border-b-0">
      <button 
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-kinematic-neutral pr-8">{question}</span>
        <span className={`text-kinematic-terracotta transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-kinematic-neutral/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "¿Es compatible con cualquier bicicleta?",
      answer: "Sí. Los ejes de seguridad reemplazan los cierres rápidos estándar, y el candado es universal. Solo asegúrate de tener espacio discreto para ocultar el localizador."
    },
    {
      question: "¿Qué pasa si no sé instalar el cierre o los ejes?",
      answer: "Viene con una llave especial específica para el kit e instrucciones en vídeo. Se tarda literalmente 3 minutos y no necesitas herramientas adicionales."
    },
    {
      question: "¿El localizador gasta batería del móvil?",
      answer: "No. Funciona con su propia batería interna (pila CR2032) que suele durar hasta un año. Cuando se agota, es muy fácil y barato reemplazarla."
    },
    {
      question: "¿Cuánto tardan los envíos?",
      answer: "Al ser un precio especial de lanzamiento y con unidades limitadas, procesamos los envíos nacionales en 24/48h laborables. Te enviaremos el código de seguimiento."
    }
  ];

  return (
    <section className="py-24 px-4 bg-kinematic-warm relative" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-kinematic-neutral">Preguntas <span className="serif-accent text-kinematic-terracotta">Rápidas</span></h2>
        </div>

        <div className="bg-white/50 p-8 rounded-sm shadow-soft">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
