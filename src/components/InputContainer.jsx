import Input from './Input'
import Button from './Button'

const InputContainer = () => {
  return (
    <div className="flex flex-col gap-2 items-center my-5 max-w-max sm:flex-row md:gap-10">
      <Input />
      <Button />
    </div>
  )
}

export default InputContainer
