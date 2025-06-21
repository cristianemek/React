import { useEffect, useState } from "react"

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'user',
        email: 'email@mail.com'
    })

    const {username,email} = formState;

    const onInputChange = ({target}:any) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
      console.log('llamada useEffect')
    },[])

     useEffect(() => {
      console.log('cambió el formulario')
    },[formState])

    useEffect(() => {
      console.log('cambió el email')
    },[email])
     


  return (
    <div>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
        type="text"
        className='form-control'
        placeholder={username}
        name='username'
        onChange={onInputChange}
        />

        <input 
        type="text"
        className='form-control mt-2'
        placeholder={email}
        name='email'
        onChange={onInputChange}
        />
    
    
    </div>
  )
}
