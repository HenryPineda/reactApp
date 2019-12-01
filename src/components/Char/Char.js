
import React from 'react';

const char = (props) => {

    const style = {

        display: 'inline-block',
        textAlign: 'center',
        margin:'16px',
        padding:'16px',
        border:'1px solid black',
        boxShadow:'0 2px 2px grey',
        borderRadius:'2px'
    }


    return (

        <div style={style} onClick={props.click}>

            {props.char}
            


        </div>



    );
}


export default char;