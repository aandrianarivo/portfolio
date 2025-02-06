
function TestComponent(
  {
    idComponent,
    colors = {color1:'bg-blue-300',color2:'bg-green-300',color3:'bg-red-300'},
    position = 'center',
    children
  }
) {
  const positionClasses = {
    left: '-left-4',
    center: 'left-1/2 transform -translate-x-1/2',
    right: '-right-4',
  };
  return (
    <div id={idComponent} className='bg-gray-50 min-h-screen w-full flex items-center justify-center shadow-xl ' >
      <div className='relative w-full max-w-5xl'>
        <div className={`absolute top-0 ${positionClasses[position]} w-122 h-122 ${colors.color1} rounded-full mix-blend-multiply blur-lg opacity-65 filter animate-blob`}></div>
        <div className={`absolute top-0 ${positionClasses[position]} w-72 h-72 ${colors.color2} rounded-full mix-blend-multiply filter blur-lg opacity-65 animate-blob animation-delay-2000`}></div>
        <div className={`absolute top-0 ${positionClasses[position]} left-20 w-72 h-72 ${colors.color3} rounded-full mix-blend-multiply filter blur-lg opacity-65 animate-blob animation-delay-4000`}></div>
        <div className='relative'>
         <div className=' bg-white rounded-lg w-full opacity-85'>
          {children}
          </div>
          {/* <div className='p-5 bg-white rounded-lg flex opacity-70'>
            TestComponent 
            <div className='w-24 h-6 rounded-lg bg-purple-300'></div> 
          </div>
          */}
        </div>

      </div>
    </div>
  )
}

export default TestComponent