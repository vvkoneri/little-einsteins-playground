import react from 'react'

type ImageProps = {
  src: string
  height?: string
  width?: string
}
const ImageDiv = ({src, height="400", width="400"}: ImageProps) => {
  return (
    <div>
      <img src={src} width={width} height={height}></img>
    </div>
  )
}

export default ImageDiv