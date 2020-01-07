import React from 'react';
import { Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faEdit , faTrash} from '@fortawesome/free-solid-svg-icons'
import { TableTop } from './TableTop'


export const TableChap = props =>
{
    return (
        <div>
          <Table>
        <thead>
                <tr>
                  <th>Chapter No.</th>
                  <th>Chapters
                  <Button style={{float: 'right' }} onClick={props.handleChapter}>
                      <FontAwesomeIcon icon={faPlusSquare} />
                  </Button>
                  </th>
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
            {  
            props.value.chapter.map((item,index) =>
            <tr key={index} >
              <td>{index+1}</td>
              <td>{item.chapterName}
              <Button  style={{float:'right', marginLeft:'10px' }} onClick={()=> props.handleChapEdit(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button  style={{float:'right' }} onClick={()=>props.handleChapDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              </td>
              <td>
                <Table striped bordered hover>
                  <tbody>
                      <tr>
                        <td>
                          <Button style={{float:'right' }} onClick={()=>props.handleTopic(index)}>
                            <FontAwesomeIcon icon={faPlusSquare} />
                          </Button>
                        </td>  
                      </tr>
                      <TableTop  value={item.topic}
                                 index={index} 
                                 handleTopEdit={props.handleTopEdit}
                                 handleTopDelete={props.handleTopDelete}
                      />
                  </tbody>
                </Table>
              </td> 
             </tr>
                     )
         }
         </tbody>
         </Table>
      </div>
    )
}