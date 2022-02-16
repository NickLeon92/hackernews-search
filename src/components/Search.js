import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { updateHistory } from "../features/terms";
import {InputGroup, Button, FormControl} from 'react-bootstrap'
import Results from './Results'

function Search(){

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    return (
        <div>
        <div className="search-bar">
            <InputGroup className="mb-3">
                <FormControl
                    onChange={(event) => {setSearch(event.target.value)}}
                    placeholder="Search by topic..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={search}
                    onKeyPress={event => event.key === 'Enter' && 
                                dispatch(updateHistory(search)) &&
                                setSearch('')
                    } 
                />
                <Button variant="outline-secondary" color="success" id="button-addon2"
                onClick={() => {
                    dispatch(updateHistory(search))
                    setSearch('')
                }}
                >
                    Search
                </Button>
            </InputGroup>
        </div>
        <Results />
        </div>
    )

}

export default Search