import { StyledInput } from './styles'

const Input = ({placeholder, value, onChange}) => {
    return (
        <StyledInput placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input;