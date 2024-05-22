import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Clínica Estética y Dental - Dentista Sabadell y Ácido Hialurónico</title>
        <meta name="description" content="Centro de salud dental y médico estético en Sabadell dirigido por el Dr. Edgar Romero. Especialista en implantología, prótesis sobre implantes y ácido hialurónico." />
        <meta name="keywords" content="dentista Sabadell, ácido hialurónico, clínica estética, odontología, Dr. Edgar Romero, implantología, prótesis sobre implantes" />
      </Helmet>
      <div className="relative mx-auto max-w-screen-xl h-[70vh] overflow-hidden">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full text-4xl font-bold text-gold z-10">
          Imagina tu sonrisa
        </h1>
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="/assets/img/header.jpeg" alt="Clínica Estética" className="w-full h-full object-cover border-4 border-gold" />
        </div>
      </div>
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-4xl font-bold my-4">Bienvenido a Clínica Estética y Dental</h2>
        <p className="text-xl my-4">
          Ofrecemos los mejores servicios dentales y estéticos en Sabadell.
        </p>
        <div className="my-8">
          <h4 className="text-2xl font-bold my-4">Nuestros Servicios</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left px-4">
            <p className="text-lg my-2">IMPLANTOLOGÍA</p>
            <p className="text-lg my-2">PRÓTESIS SOBRE IMPLANTES Y ESTÉTICA DENTAL</p>
            <p className="text-lg my-2">DISEÑO DIGITAL DE SONRISAS</p>
            <p className="text-lg my-2">ORTODONCIA</p>
            <p className="text-lg my-2">ENDODONCIA</p>
            <p className="text-lg my-2">ODONTOPEDIATRÍA</p>
            <p className="text-lg my-2">PERIODONCIA</p>
            <p className="text-lg my-2">REJUVENECIMIENTO FACIAL</p>
          </div>
        </div>
        <div className="my-8 text-left px-4">
          <p className="text-lg my-4">
            Somos un centro de salud dental y médico estético dirigido por el Dr. Edgar Romero. Odontólogo, especialista en implantología, prótesis sobre implantes y ácido hialurónico.
          </p>
          <p className="text-lg my-4">
            Profesor y Director de Romero Academy y del programa Internacional de la Universidad de Nueva York (NYU).
          </p>
          <p className="text-lg my-4">
            Ofrecemos un amplio servicio de odontología y de medicina estética.
          </p>
          <p className="text-lg my-4">
            Nos instalamos en Sabadell Centro para ofreceros todos nuestros servicios y años de experiencia, garantizando a nuestros pacientes un servicio personalizado y de alta gama accesible para todos.
          </p>
        </div>
        <div className="bg-gray-900 text-white py-8 px-4">
          <h4 className="text-2xl font-bold my-4">Diagnóstico personalizado, gratis y sin compromiso.</h4>
          <p className="text-lg my-4">
            Buscamos la forma de pago que más se adecue a tu medida.
          </p>
          <p className="text-lg my-4">
            Después de acabar el tratamiento seguimos preocupándonos por tu salud bucal, por eso ofrecemos revisiones personalizadas gratuitas anuales o cada 6 meses.
          </p>
          <h4 className="text-2xl font-bold my-4">CONOCE NUESTRA CLÍNICA</h4>
          <p className="text-2xl font-bold my-4">660 390 000</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
