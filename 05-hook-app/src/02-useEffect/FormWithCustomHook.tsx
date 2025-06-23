import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
 
  const {formState, onInputChange, onClearForm} = useForm({
    username:'',
    email:'',
    password:'',
    telefono:0
  })

  const { username, email,password,telefono } = formState;

  return (
    <div>
      <h1>Formulario con customHook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Correo eléctronico"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <input
        type="number"
        className="form-control mt-2"
        placeholder="Telefono"
        name="telefono"
        value={telefono}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onClearForm}>Borrar</button>
      
    </div>
  );
};
