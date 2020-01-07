import React from 'react'
import { Table } from 'react-bootstrap'
import { TableChap } from './TableChap'


export const Tables = props =>
{
    return(
        <div>
             { props.tValue ? <Table striped bordered hover>
              
                <TableChap value={props.tValue}
                           handleChapEdit={props.handleChapEdit}
                           handleChapter={props.handleChapter}
                           handleChapDelete={props.handleChapDelete}
                           handleTopic={props.handleTopic}
                           handleTopEdit={props.handleTopEdit}
                           handleTopDelete={props.handleTopDelete} /> 
          </Table>:''}   
        </div>
    )
}