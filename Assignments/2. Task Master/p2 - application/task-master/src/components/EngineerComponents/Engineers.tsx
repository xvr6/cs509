import Engineer from "./Engineer"

interface EngineersProps {
    children: string[]
}

const Engineers = ({children}: EngineersProps) => {
  return (
    <div className=''>
        <h2 className='text-xl font-semibold text-gray-700'>
            Engineers
        </h2>
        <div>
          <Engineer />
            {/* each individual engineer goes here */ children}
        </div>

    </div>
    // <div>{children}</div>
  )
}

export default Engineers