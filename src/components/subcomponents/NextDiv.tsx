import react from 'react'

type NextDivProps = {
  onclick: () => void
}
const NextDiv = ({onclick}:NextDivProps) => {
  return (
  <button onClick={onclick}></button>
  )
}

export default NextDiv