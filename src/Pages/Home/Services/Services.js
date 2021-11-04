import React from 'react';
import './Services.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from './../Service/Service';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: "Fluoride Treatment",
        description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit quibusdam doloribus iure odio nesciunt dolorum corrupti illo, tempore eligendi',
        img: fluoride
    },
    {
        name: "cavity  Treatment",
        description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit quibusdam doloribus iure odio nesciunt dolorum corrupti illo, tempore eligendi',
        img: cavity
    },
    {
        name: "whitening Treatment",
        description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit quibusdam doloribus iure odio nesciunt dolorum corrupti illo, tempore eligendi',
        img: whitening
    },
]




const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" sx={{ color: 'primary.main', m: 2, fontWeight: 500 }} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, m: 5 }} component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}

                        ></Service>)
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default Services;