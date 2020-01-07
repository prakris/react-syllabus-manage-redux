import React from 'react'
import { Button,Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrash} from '@fortawesome/free-solid-svg-icons'

export const TableTop = props =>
{
    return(
        <div>
             <Table striped bordered hover>
            <tbody>
            { props.value.map((td,tindex) => <tr key={tindex}>
                        <td>{td}
                        <Button style={{float:'right', marginLeft:'10px' }} onClick={()=> props.handleTopEdit(tindex,props.index)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button style={{float:'right' }} onClick={()=>props.handleTopDelete(tindex,props.index)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        </td>
                      </tr> )}
                      </tbody>
                      </Table>
        </div>
        

    )
}