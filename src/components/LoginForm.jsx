import React from 'react';
import Vite from 'vite';

function LoginForm () {
        return (
            <div>
                <h1>Contacto</h1>
                <form onsubmit="return false"></form>
                <input type="text" placeholder="Ingresa tu nombre" id="Nombre" />
                <input type="text" placeholder="Ingresa tu apellido" id="Apellido" />
                <br></br>
                <input type="radio" id="male" name="gender" value="hombre"> Hombre </input>
                <input type="radio" id="female" name="gender" value="mujer"> Mujer </input>
                <br></br>
                <input type="email" placeholder="Ingresa tu email" id="email" />
                <select id="country">
                <option disabled selected value> -- select a country -- </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Brasil">Brasil</option>
                <option value="Otros">Otros</option>
                </select>
                <br></br>
                <input type="password" placeholder="Ingrese Contraseña" id="contraseña" />
                <input type="password" placeholder="ingrese Contraseña (check)" id="contraseñaChequeada" />
                <br></br>
                <input type="checkbox" id="newsletter" />Enviarme noticias mensualmente
                <br></br>
                <span>Cual es tu consulta?</span>
                <br></br>
                <textarea id="question" rows="5"></textarea>
                <br></br>
                <button onclick="sendContact();">Enviar</button>
        </div>
        )
    }


export default LoginForm
