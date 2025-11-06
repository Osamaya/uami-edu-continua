// import axios from "axios";
import type {AuthResult} from './authTypes'

export async function authUser(user : string, password : string):Promise<AuthResult>{
    try {
        // Simulación de delay (como si hicieras una petición HTTP)
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (user === "admin" && password === "1234") {
            return {
            success: true,
            message:'Bien',
            data: {
                id: 1,
                name: "Administrador",
                email: "admin@edu.com",
                token: "abc123"
            },
            };
        } else {
            return { success: false, message: "Usuario o contraseña incorrectos" };
        }
        // const response = await fetch("nuestraUrl",{
        //     method:"POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ user, password }),
        // });
        // const respuesta = response.json();
        // return respuesta
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error inesperado" }; // ✅ aquí sí retorna
    }
}