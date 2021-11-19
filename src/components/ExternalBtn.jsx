import React from 'react'

const ExternalBtn = (props) => {
    return (
        < div className="page-buttons">
            <button className="DeleteAllButton" onClick={()=> props.deleteAll()} > Delete All</button>

        </div>
    )
}

export default ExternalBtn