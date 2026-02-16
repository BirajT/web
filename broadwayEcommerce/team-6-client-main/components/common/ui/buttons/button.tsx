import { cn } from '@/utils/tw-merge.util'
import React from 'react'

type IProps = {
  label?: string,
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  variant?: 'outline' | 'filled' | 'danger'
}

const Button: React.FC<IProps> = ({ label = 'Button', type = 'button', disabled = false, variant = 'filled' }) => {
  return (
    <div className='w-full'>
      <button
        disabled={disabled}
        type={type}
        className={cn(
          'w-full  p-3  font-bold text-lg rounded mt-5 mb-1 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-500/60',
          variant === 'filled' ? 'bg-blue-500 text-white' : '',
          variant === 'outline' ? 'border border-blue-500 text-blue-500' : ''
        )}
      >
        {label}
      </button>
    </div>
  )
}

export default Button