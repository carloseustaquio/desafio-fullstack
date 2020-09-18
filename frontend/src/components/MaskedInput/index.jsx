import React from 'react'
import InputMask from 'react-input-mask'
import TextInput from '../TextInput'

export default props => (
    <InputMask {...props}>
        {(inputProps) => 
            <TextInput  {...inputProps} />
        }
    </InputMask>
)