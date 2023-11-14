import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-grid.css';
import Snackbar from '@mui/material/Snackbar'
import Addcar from './Addcar';
import Editcar from './Editcar';
import Deletecar from './Deletecar';


export default function Carlist() {
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);

    const REST_URL = "https://carrestapi.herokuapp.com/cars";
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars();
    }, []);

    const columns = [
        { field: 'brand', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'color', sortable: true, filter: true },
        { field: 'fuel', sortable: true, filter: true },
        { field: 'year', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true },
        {
            headerName: 'Delete',
            cellRenderer: (params) => (
                <Deletecar
                    getCars={getCars}
                    params={params}
                />

            )
        },
        {
            headerName: 'Edit',
            cellRenderer: (params) => (
                <Editcar
                    updateCar={updateCar}
                    params={params}
                />
            )
        }
    ];

    const getCars = () => {
        fetch(REST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                setCars(responseData._embedded.cars);
            });
    };


    const saveCar = (newCar) => {
        fetch(REST_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then((response) => {
                if (response.ok) {
                    setMsg('Car added');
                    setOpen(true);
                    getCars();
                }
            })
            .catch((err) => console.error(err));
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then((response) => {
                if (response.ok) {
                    setMsg('Car updated');
                    setOpen(true);
                    getCars();
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className="ag-theme-material" style={{ height: 700, width: '100%', margin: 'auto' }}>
            <Addcar saveCar={saveCar} />
            <AgGridReact
                rowData={cars}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={20}
                suppressCellSelection={true}
                rowHeight={30}
            />
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={msg}
            />

        </div>
    );
}
