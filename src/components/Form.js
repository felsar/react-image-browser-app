import React, { useState } from 'react';

import Error from './Error';

const Form = ({setTerm}) => {

    const [wordQuery, setWordQuery] = useState('');
    const [error, setError] = useState(false);


    const searchImage = e => {
        e.preventDefault();     

        if (wordQuery === '') {
            setError(true);
            return;
        }
        setError(false);
        
        setTerm(wordQuery);
    }

    return ( 
        <form
            onSubmit={searchImage}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        onChange={e=> setWordQuery(e.target.value)}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search Image"
                        name ="searchImage"
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error ? <Error message="Provide a word to search" /> : null}
        </form>

     );
}
 
export default Form;