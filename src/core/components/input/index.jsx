import { StyledInput } from './style'

const Input = ({placeholder, value, onChange}) => {
    return (
        <StyledInput placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input;