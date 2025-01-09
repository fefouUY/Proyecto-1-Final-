import React, { useState } from "react";

function Contactos() {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const sendContact = () => {
    console.log("Formulario enviado");
  };

  return (
    <div className="Contactos">
      <h1>Contacto</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Nombre">Nombre:</label>
        <input type="text" placeholder="Ingresa tu nombre" id="Nombre" />
        <br />

        <label htmlFor="Apellido">Apellido:</label>
        <input type="text" placeholder="Ingresa tu apellido" id="Apellido" />
        <br />

        <span>Género:</span>
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="hombre"
          onChange={() => setGender("hombre")}
        />
        <label htmlFor="male">Hombre</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="mujer"
          onChange={() => setGender("mujer")}
        />
        <label htmlFor="female">Mujer</label>
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Ingresa tu email" id="email" />
        <br />

        <label htmlFor="country">País:</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option disabled value="">
            -- select a country --
          </option>
          <option value="Uruguay">Uruguay</option>
          <option value="Brasil">Brasil</option>
          <option value="Otros">Otros</option>
        </select>
        <br />

        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" placeholder="Ingrese Contraseña" id="contraseña" />
        <br />
        <label htmlFor="contraseñaChequeada">Confirme Contraseña:</label>
        <input
          type="password"
          placeholder="ingrese Contraseña (check)"
          id="contraseñaChequeada"
        />
        <br />

        <input type="checkbox" id="newsletter" />
        <label htmlFor="newsletter">Enviarme noticias mensualmente</label>
        <br />

        <label htmlFor="question">Cual es tu consulta?</label>
        <br />
        <textarea id="question" rows="5"></textarea>
        <br />

        <button onClick={sendContact}>Enviar</button>
      </form>
    </div>
  );
}

export default Contactos;
