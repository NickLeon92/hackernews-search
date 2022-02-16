import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { updateHistory } from "../features/terms";
import {InputGroup, Button, FormControl} from 'react-bootstrap'

function Search(){

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    return (
        <div className="search-bar">
            <InputGroup className="mb-3">
                <FormControl
                    onChange={(event) => {setSearch(event.target.value)}}
                    placeholder="Recipient's username"
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
                    Button
                </Button>
            </InputGroup>
        </div>
    )

}

export default Search