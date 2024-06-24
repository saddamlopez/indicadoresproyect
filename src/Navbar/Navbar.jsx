import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import logo from '../assets/logouatf.webp';
import fondo from '../assets/fondo.jpg'; 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container maxWidth="lg">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={1}
                bgcolor="background.paper"
                className="background-container"
                style={{
                    backgroundImage: `url(${fondo})`,
                    
                }}
            >
                <Box display="flex" alignItems="center" mb={1}>
                    <img src={logo} alt="Logo UATF" style={{ width: 100, marginRight: 10 }} />
                    <Typography variant="h5" component="h3" className="white-text">
                      DIRECCION DE SERVICIOS ACADEMICSS
                    </Typography>
                </Box>
                <Typography variant="h6" component="h5" className="white-text">
                    INDICADORES ACADEMICO
                </Typography>
            </Box>

            <Box>
                <Box display="flex" alignItems="" mb={1}>
                    <Typography variant="h6" component="h1">
                        Bienvenidos al modulo de indicadores academicos
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
export default Navbar;