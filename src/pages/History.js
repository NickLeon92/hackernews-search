import React from 'react'
import {useSelector} from "react-redux"
import {ListGroup, Container} from 'react-bootstrap'

function History(){

    const searchHistory = useSelector((state) => state.terms)

    return(
        <Container style={{width:'50%'}}>
            {searchHistory.length? (
            <ListGroup style={{marginTop:'1rem'}}>
            <h1 style={{marginBottom:'1rem'}}>Search History</h1>
            {searchHistory.map(el => {
                return <ListGroup.Item>{el}</ListGroup.Item>
            })}
            </ListGroup>
            ) : (
            <h3>nothing in your history!</h3>
            )}
        </Container>
    )

}

export default History