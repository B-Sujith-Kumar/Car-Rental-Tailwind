const Button = ({label}) => {
  return (
    <button className="bg-coral-red border-1 border-coral-red text-white font-rubik px-6 py-3 rounded-sm shadow-sm shadow-coral-red cursor-pointer hover:shadow-md hover:shadow-coral-red">
        {label}
    </button>
  )
}

export default Button
