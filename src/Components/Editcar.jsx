import React, { useState } from 'react';
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-grid.css";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default function Editcar() {

    const [open, setOpen] = useState(false);

    const [cars, setCars] = useState([
        {
            brand: '',
            model: '',
            color: '',
            fuel: '',
            year: '',
            price: ''
        }
    ]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e) => {
        setCars({ ...cars, [e.target.name]: e.target.value });
    }

    const EditCar = () => {
        props.updateCar(cars);
        handleClose();
    };



    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-open">
                <DialogTitle id="form-dialog-open">Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={cars.brand}
                        onChange={e => handleInputChange(e)}
                        label="Brand"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="model"
                        value={cars.model}
                        onChange={e => handleInputChange(e)}
                        label="Model"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="color"
                        value={cars.color}
                        onChange={e => handleInputChange(e)}
                        label="Color"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="fuel"
                        value={cars.fuel}
                        onChange={e => handleInputChange(e)}
                        label="Fuel"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="year"
                        value={cars.year}
                        onChange={e => handleInputChange(e)}
                        label="Year"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="price"
                        value={cars.price}
                        onChange={e => handleInputChange(e)}
                        label="Price"
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={EditCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </div >
    );
}