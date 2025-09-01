export interface User {
    id:number;
    name:string;
    location:string;
    rol:string;
}


export const getUserAction = async(id: number) =>{

    await new Promise (res => setTimeout(res,2000));

    return{
        id:id,
        name:'Cristian',
        location: 'Ottawa, Canadá',
        rol: 'Estudiante de software',
    };
}