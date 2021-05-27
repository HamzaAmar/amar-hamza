import React, { useState } from 'react'
import style from './field.module.css'

interface Props {
    name: string
    title: string
    type: string
    isRequired: boolean
    buttonInside: boolean
    buttonText: string
    placeholder: string
}

const Select = ({
    name,
    title,
    type,
    isRequired,
    buttonInside,
    buttonText,
    placeholder,
}: Props) => {
    const { message, setMessage } = useState<Error | null>(null)

    return (
        <div className={style.container}>
            <div className={style.formItem}>
                <label htmlFor={name}>
                    <select>
                        <option>Hello</option>
                        <option>World</option>
                        <option>MyName</option>
                        <option>here</option>
                    </select>
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
Select.defaultProps = {
    isRequired: false,
    buttonInside: false,
    type: 'text',
}

export default Select
