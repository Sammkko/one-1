import { ButtonBase } from '@mui/material'
import React from 'react'

function Button({ children, ...props }) {
    return (
        <ButtonBase
            sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '25px',
                letterSpacing: '0.1em',
                color: '#FFF',
                padding: '10px 50px',
                background: '#479F77',
                borderRadius: '30px',
                cursor: 'pointer',
            }}
            {...props}
        >
            {children}
        </ButtonBase>
    )
}

export default Button;
