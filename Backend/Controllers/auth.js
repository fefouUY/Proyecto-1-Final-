const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");

const registro = async(req, res, next) => {
    try {
        if (req.body.mail && req.body.name && req.body.password) {
            //Formato del email
            if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
                res.status(400)
                json({ sucess: false, message: "Formato de email incorrecto" });
                return;
            }
            const existeUser = usuarios.find((u) => {
                return u.email === req.body.mail;
            });

            if (existeUser) {
                res.status(400).json({ sucess: false, message: "Email repetido" })
                return;
            }
            const salt = await bcrypt.genSalt(10);
            console.log("Salt", salt);
            const password = await bcrypt.hash(req.body.password, salt);

            const newUser = {
                name: req.body.name,
                mail: req.body.mail,
                password: password,
            };
            usuarios.push(newUser);

            return res.status(200).json({ sucess: true, newUser });
        } else {
            return res.status(400).json({
                sucess: false,
                message: "Faltan Datos(requeridos: mail, name, password)",
            });
        }
    } catch (error) {
        return next(error);
    }
};

const login = async(req, res, next) => {
    try {
        const user = usuarios.find((u) => u.mail === req.body.mail);
        if (!user) {
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({ error: "Contraseña no valida" })
        }

  

        const token = jwt.sign({
                name: user.name,
                mail: user.mail,
            },
            TOKEN_SECRET
        );

        console.log("Login en auth, listaDeTareas", listaDeTareas);
        res.status(200).json({
            error: null,
            data: "Login exitoso",
            listaDeTareas: listaDeTareas,
        });
    } catch (error) {
        return next(error);
    }
};

const getUsers = async(req, res, next) => {
    try {
        return res.json({ error: null, usuarios })
    } catch (error) {
        return next(error);
    }

};

module.exports = {
    registro,
    login,
    getUsers,
};

const usuarios = [{
    name: "Federico",
    mail: "federico@gmail.com",
    password: "lalaalalal"
}, ];