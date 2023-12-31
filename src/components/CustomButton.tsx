'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({
  title,
  containerStyles,
  handlerClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn btn-blue ${containerStyles}}`}
      onClick={handlerClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  )
}

export default CustomButton
