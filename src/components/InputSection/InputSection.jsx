import React from "react";

export default function InputSection(props) {
    return (
        <section className='input-section'>
            <input type="num" id='min-count' defaultValue={10}/>
            <input type="num" id='max-count' defaultValue={20}/>
            <input type="num" id='step' defaultValue={5}/>
        </section>
    )
}