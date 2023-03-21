import React from 'react';

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.3077858257227!2d-99.2364847707975!3d19.5504244991761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21ce1be1e6859%3A0xbd67d62b95e038b0!2sP.%C2%BA%20San%20Francisco%201%2C%20Jardines%20de%20Atizapan%2C%2052978%20Cd%20L%C3%B3pez%20Mateos%2C%20M%C3%A9x.!5e1!3m2!1ses!2smx!4v1678396548049!5m2!1ses!2smx"
      className="googlemap"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      
    />
  );
}

export default Map;

