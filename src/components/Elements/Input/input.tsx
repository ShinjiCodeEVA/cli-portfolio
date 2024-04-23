import { InputProp } from "./input.interface"
import { ChangeEvent } from "react"

export const Input = ({value, placeholder, handleInputChange, ...rest}: InputProp) => {
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    handleInputChange(value);
  }
    
  return (
    <input 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="text" 
        {...rest}
    />
  )
}
