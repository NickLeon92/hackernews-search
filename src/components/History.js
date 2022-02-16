import React from 'react'
import {useSelector} from "react-redux"

function History(){

    const searchHistory = useSelector((state) => state.terms)

    return(
        <div>
            {searchHistory.length? (
            searchHistory.map(el => {
                return <p>{el}</p>
            })
            ) : (
            <p>nothing in your history!</p>
            )}
        </div>
    )

}

export default History