import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import logo from '../assets/logouatf.webp';
import fondo from '../assets/fondo.jpg'; // Asegúrate de importar la imagen de fondo
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
                p={2}
                bgcolor="background.paper"
                className="background-container"
                style={{
                    backgroundImage: `url(${fondo})`,
                    
                }}
            >
                <Box display="flex" alignItems="center" mb={1}>
                    <img src={logo} alt="Logo UATF" style={{ width: 100, marginRight: 10 }} />
                    <Typography variant="h5" component="h1" className="white-text">
                        Dirección de Servicios Académicos
                    </Typography>
                </Box>
                <Typography variant="h6" component="h2" className="white-text">
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