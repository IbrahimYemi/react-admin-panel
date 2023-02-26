

import { createTheme } from '@mui/material'
import {green, grey, blueGrey, brown} from '@mui/material/colors'

let theme = createTheme({
    pallete: {
        primary : {
            main: blueGrey[500],
            normal : blueGrey['A700']
        },
        secondary : {
                main: blueGrey[500]
        },
        neutral : {
            light : grey[50],
            medium : grey[200],
            normal: grey[700],
            main: grey[900]
        },
        green: {
            main: green[800]
        },
        brown: {
            main: brown[200]
        }
    }
})

theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem'
            },
            fontWeight: 500,
            color: theme.pallete.primary.normal,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontSize: '1rem',
        },
        h7: {
            fontSize: '0.8rem',
        },
        h8: {
            fontSize: '0.7rem',
        }
    }
});

export default theme