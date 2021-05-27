import React, { useState } from 'react'
import style from './field.module.css'

interface Props {
    name: string
    title: string
    value: any
    type: string
    isRequired: boolean
    buttonInside: boolean
    buttonText: string
    placeholder: string
    onChange: any
}

const Text = ({
    name,
    title,
    type,
    value,
    isRequired,
    buttonInside,
    buttonText,
    placeholder,
    onChange,
}: Props) => {
    const { message, setMessage } = useState(null)

    return (
        <div className={style.container}>
            <div className={style.formItem}>
                <label htmlFor={name}>
                    {!buttonInside ? (
                        <input
                            type={type}
                            name={name}
                            id={name}
                            required={isRequired}
                            placeholder={title}
                            value={value}
                            onChange={onChange}
                        />
                    ) : (
                        <div className={style.insideButton}>
                            <input
                                type={type}
                                name={name}
                                id={name}
                                required={isRequired}
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange}
                            />
                            <button>{buttonText}</button>
                        </div>
                    )}
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
Text.defaultProps = {
    isRequired: false,
    buttonInside: false,
    type: 'text',
}

export default Text
