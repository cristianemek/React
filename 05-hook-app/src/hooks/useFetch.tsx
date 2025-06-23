import { useEffect, useState } from "react"
import type {fetchData} from '../types/fetch.types'

export const useFetch = (url:string) => {

    const [state, setState] = useState<fetchData>({
        data: null,
        isLoadding: true,
        hasError: false,
        error: null,
    });


    useEffect(() => {
      getFetch();
    
    }, [url]);
    
    const setLoadingState = () =>{
        setState({
        data: null,
        isLoadding: true,
        hasError: false,
        error: null,
        });
    };

    const getFetch = async function () {
        setLoadingState();

        const resp = await fetch(url)
        
        if (!resp.ok){
            setState({
                data:null,
                isLoadding:false,
                hasError:true,
                error:{
                    code:resp.status,
                    message:resp.statusText,
                }
            })
        return;
        }
        const data = await resp.json();
        setState({
            data:data,
            isLoadding:false,
            hasError:false,
            error: null,
        })

        //manejo de cache
    }



  return {
    data:state.data,
    isLoading:state.isLoadding,
    hasError:state.hasError,
  }
}
