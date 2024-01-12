const ProcedureCard = ({icon, title, info}) => {
  return (
    <div className="flex flex-col items-center">
        <img src={icon} alt="" width={170} height={170} className="min-w-lg" />
        <h2 className="font-poppins text-2xl font-bold">{title}</h2>
        <p className="font-rubik text-slate-500 max-w-xs text-center mt-6">{info}</p>
    </div>
  )
}

export default ProcedureCard
