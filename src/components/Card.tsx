interface CardProps {
  title: string
  description: string
  rotataion: string
}

function Card({ title, description, rotataion }: CardProps) {
  return (
    <div className={`w-[150px] h-[225px] cursor-pointer select-none bg-gray-100 p-4 border-black border-4 rounded-lg ${rotataion} hover:-translate-y-10 transform transition duration-200 ease-in-out`}>
      <h2 className="text-pink-800 text-center">{title}</h2>
      <p className="text-pink-400 text-sm text-center">{description}</p>
    </div>
  )
}

export default Card