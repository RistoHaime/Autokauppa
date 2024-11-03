import { useState } from "react";
import { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Button } from "@mui/material";
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCars, addCar, deleteCar, updateCar } from "./api";

export default function Carlist(){
  

    //const [cars, setCars] = useState([]);
    const queryClient = useQueryClient();

    const {data: cars}= useQuery({
      queryKey: ['cars'],
      queryFn: fetchCars
    })

    const addMutation = useMutation({
      mutationFn: addCar,
      onSuccess: () => queryClient.invalidateQueries(['cars'])
    })

    const deleteMutations = useMutation({
      mutationFn: deleteCar,
      onSuccess: () => queryClient.invalidateQueries(['cars'])
    })


    const [columnDefs, setColumnDefs] = useState([
        {field: 'brand', 
          filter: true,
          sort: 'asc'},
        {field: 'model'},
        {field: 'color'},
        {field: 'fuel'},
        {field: 'modelYear',
          headerName:"Year"
        },
        {field: 'price'},
        {field: '_links.self.href',
          headerName:'',
          sortable: false,
          filter: false,
          cellRenderer: params => <Button onClick={() => deleteMutations.mutate(params.data._links.self.href)}>Delete</Button>
        },
        {field: '_links.self.href',
          headerName:'',
          sortable: false,
          filter: false,
          cellRenderer: params => <UpdateCar currentCar={params.data} />
        }
    ]);
    useEffect(()=> fetchCars,[])
   
    return(    
  <div className="ag-theme-material" style={{width: 1600, height: 1000}}>
    <AddCar addCar={car => addMutation.mutate(car)}/>
      <AgGridReact 
        rowData={cars}
        columnDefs={columnDefs}
        accentedSort={true}
      />
    </div> 
    
    )
}