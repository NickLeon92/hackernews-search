import React, { useEffect, useState } from "react";
import {Card, Container, Row} from 'react-bootstrap'


function Home(){

    const [homeFeed, setHomeFeed] = useState(null)

    useEffect(() => {
        fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(response => response.json())
        .then(data => setHomeFeed(data))
    })
    return (
        <Container>
            <h1>TOP STORIES</h1>
            <Row>
            {homeFeed?(
                homeFeed.hits.map((el) => {
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

export default Home