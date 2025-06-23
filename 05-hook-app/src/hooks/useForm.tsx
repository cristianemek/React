import { useState } from "react";
import type { FormData } from "../types/form.types";


export const useForm = (initialForm:FormData) => {
     const [formState, setFormState] = useState<FormData>(initialForm);
        FormData
      const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const onClearForm = () =>{
        setFormState(initialForm)
      };


    return{
        ...formState,
        formState,
        onInputChange,
        onClearForm,
    }
}
