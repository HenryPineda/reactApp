
import React from 'react';

const validation = (props) => {


    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5){

        validationMessage ='Text is toos short';

    }



    return (


        <div>

            {/* {
                props.inputLength < 5 ?


                <p>Text is too short!</p> :

                <p>Text is long enought!</p>

            } */}

        <p>{validationMessage}</p>
        
        </div>

    );
}

export default validation;

