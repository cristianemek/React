

import React from 'react';

interface hijoProps{
    numero: number,
    incrementar: any,
}

export const Hijo = React.memo(({ numero, incrementar }:hijoProps) => {

    
    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
)
