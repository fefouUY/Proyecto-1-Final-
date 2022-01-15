import React from 'react';

function Login() {
    return (
        <form>
            <div className="form-inner">
                <h2>Ingresar</h2>
                {/*ERROR! */}
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" Name="name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" Name="email" id="email"/>
            </div>
            < div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password"/> 
            </div>
        </div>
    </form>   
    )
}

export default Login;

