import { TouchableOpacity } from 'react-native'
import { ButtonProps } from './button'

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <TouchableOpacity
      className={`border border-white space-x-1 rounded-md flex-row items-center justify-center px-4 py-3 ${className}`}
      {...props}
    />
  )
}
