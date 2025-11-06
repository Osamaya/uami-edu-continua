import { useState, type ReactEventHandler} from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logos/180x180.png"; // Ajusta el path según tu estructura
import './Login.css'
import {authUser} from '@/services/Login/authService'
import '@/components/buttons/Buttons'
import Button from "@/components/buttons/Buttons";
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Simulación (aquí luego va la llamada a FastAPI)
//     if (email === "admin@edu.com" && password === "1234") {
//       localStorage.setItem("user", JSON.stringify({ name: "Admin", email }));
//       navigate("/dashboard"); // redirige al Dashboard
//     } else {
//       setError("Credenciales incorrectas");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h1 className="text-2xl font-semibold mb-6 text-center">
//           Iniciar Sesión
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//         <input
//           type="email"
//           placeholder="Correo"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-3 border rounded focus:outline-blue-500"
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-6 border rounded focus:outline-blue-500"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Entrar
//         </button>
//       </form>
//     </div>
//   );
// }

export default function Login() {
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const[loadingName,setLoadingName] = useState("Entrar");
  const navigate = useNavigate();

  const handleClickLogin = async() => {
      setLoading(true);
      setError("");

      const result = await authUser(user, password);

      setLoading(false);

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/dashboard");
      } else {
        alert(result.message)
        setError(result.message || "Error desconocido");
      }
  }
  // const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {

  // };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="Logo"/>
        </div>

        <div className="login-box text-white">
          <h2 className="login-title">Iniciar sesión</h2>

          <div className="login__field">
            <i className="login__icon fa fa-user"></i>
            <input 
              type="text" 
              className="login__input" 
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}/>
          </div>

          <div className="login__field">
            <i className="login__icon fa fa-lock"></i>
            <input
              type="password"
              className="login__input"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button  
              label = {loading? "Cargando" : "Entrar"}
              onClick = {handleClickLogin}
              disabled = {loading}
              className="btn-primary w-full text-white py-3 rounded transition disabled:opacity-50"
          />

          {/* <button
            onClick={handleClickLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
          {loading ? "Cargando..." : "Entrar"}
        </button> */}
        </div>
      </div>
    </div>
  );
}