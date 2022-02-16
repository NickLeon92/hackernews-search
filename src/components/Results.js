import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import {Card, Container, Row} from 'react-bootstrap'

function Results(){

    const search = useSelector((state) => state.terms[state.terms.length - 1])

    const [results, setResults] = useState(null)

    useEffect(() => {
        if(search){
            fetch('https://hn.algolia.com/api/v1/search?query=' + search)
                .then(response => response.json())
                .then(data => setResults(data))
        }
    })
    
    return (
    <Container>
        <Row>
        {results?(
            results.hits.map((el) => {
                return (
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{el.created_at}</Card.Subtitle>
                            <Card.Text>
                                points: {el.points}
                            </Card.Text>
                            <Card.Text>
                                relevancy score: {el.relevancy_score}
                            </Card.Text>
                            <Card.Link href={el.url} target="_blank">Full Article</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })
        ):(
            <p>Search something!</p>
        )}
        </Row>
    </Container>
    )
}

export default Results