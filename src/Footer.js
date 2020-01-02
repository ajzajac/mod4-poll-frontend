import React from 'react';

let str = 'Justin & Andrew \u00A9 2019'

export default function Footer(props) {

    return (
        <div className='footer' >

            <h4>{str}</h4>

        </div>
    )

}