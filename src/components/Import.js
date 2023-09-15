import React from 'react'
import CustomTable from './Table'
import { Button } from '@mui/material'

const Import = (props) => {
    return (
        <>
        <Button variant="contained" onClick={props.fetchMakes}>
            Import
        </Button>
        <CustomTable rows={props.makes} columns={['MakeId', 'MakeName', 'Actions']}
        removeMake={props.removeMake}
            />
        </>
    )
}

export default Import