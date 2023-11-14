import React from 'react';
import { Button } from '@mui/material';

export default function Deletecar({ params, getCars }) {
    const deleteCar = () => {
        if (window.confirm('Are you sure?')) {
            fetch(params.data._links.self.href, { method: 'DELETE' })
                .then((response) => {
                    if (response.ok) {
                        alert('Car deleted');
                        getCars();
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <Button variant="outlined" color="primary" onClick={deleteCar}>
            Delete
        </Button>
    );
}
