import React, { useState } from 'react'
import style from './field.module.css'

const TextArea = ({ name, title, isRequired, value, onChange }) => {
    const { message, setMessage } = useState(null)
    return (
        <div className={style.container}>
            <div className={style.formItem}>
                <label htmlFor={name}>
                    <textarea
                        name={name}
                        placeholder={title}
                        required={isRequired}
                        onChange={onChange}
                    >
                        {value}
                    </textarea>
                </label>
                {message ? (
                    <div className={style.errorContainer}>
                        <div>X</div>
                        <small>Message error</small>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
TextArea.defaultProps = {
    isRequired: false,
    buttonInside: false,
}

export default TextArea
