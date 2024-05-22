import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-4xl font-bold my-4">Contacto</h2>
        <p className="text-lg mb-4">
          Póngase en contacto con nosotros para cualquier consulta o para reservar una cita.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gold mb-2" htmlFor="name">Nombre</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block text-gold mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block text-gold mb-2" htmlFor="message">Mensaje</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" id="message" name="message" rows="5" required></textarea>
          </div>
          <div>
            <button className="bg-gold text-black py-2 px-4 rounded-md" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
