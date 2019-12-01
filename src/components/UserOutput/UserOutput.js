

import React from 'react';

const useroutput = (props) => {

    return (

        <div>

            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>The user is : {props.userName} and the Alias is :{props.userAlias}</p>
        </div>
    )
}

export default useroutput;