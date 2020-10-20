import React, {useState} from 'react'
import MaterialTable from 'material-table'
import { data, columns } from '../data'

function Pdf() {

  const [dados, setDados] = useState({...data})

  return (
    <MaterialTable
      title="Coronavirus in World"
      columns={columns, {validate: rowData => rowData.name === '' ? {
        isValid: false, helperText: 'Country cannot be empty'
      } : true}}
      data={data}
      editable= {{
        onRowAdd: newData => 
        new Promise((resolve, reject) => {
          setTimeout(() => {
            setDados([...data, newData]);
            resolve()
          }, 1000)
        }),
        onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataUpdate = [...data]
            const index = oldData.tableData.id
            dataUpdate[index] = newData
            setDados(dataUpdate)
          })
        }) 
      }}     
      options={{
        exportButton: true,
        pageSizeOptions: [20,30,50],
        filtering: true,
        search: false,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        }
      
      }}
    />
  )
}

export default Pdf