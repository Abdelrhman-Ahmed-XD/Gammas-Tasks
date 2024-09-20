import React from 'react';
import '../styles/Error404.css'

const Error404 = (props) => {
    return (
        <section className='error__container'>
            <div className='error__smile'>😕</div>
            <h1 className='error__title'>{props.title}</h1>
            <p className='error__text'>
                <span>{props.resolution}</span>
            </p>
        </section>
    );
};

export default Error404;