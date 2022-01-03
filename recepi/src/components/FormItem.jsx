export const ROW = ({data,handleDelete})=>{
    console.log("Row", data);
          return( 
             <tr>
              <td>{data.name}</td>
              <td>{data.recipe}</td>
              <td><button onClick={() => handleDelete(data.id)}>Delete</button></td>
             </tr>
    )
}