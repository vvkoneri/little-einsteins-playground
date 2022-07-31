import react from 'react'
type OptionsProps = {
  opts: string[]
  onclick: (event: React.MouseEvent) => void
}
const Options = ({opts, onclick} : OptionsProps) => {
  
  return (
    <div>
      {opts && opts.map( op => { 
       return (<button onClick={onclick} value={op}> {op} </button>)
       })
       }
    </div>
  )
}

export default Options