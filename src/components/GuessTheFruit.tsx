import React, { useState } from 'react'
import ImageDiv from './subcomponents/ImageDiv'
import './css/GuessFruitGame.css'
import Options from './subcomponents/Options'
import NextDiv from './subcomponents/NextDiv'

interface Fruit {
  name: string
  image: string
  options: string[]
}

const fruits: Fruit[] = [
  {
    name: "Banana",
    image: "/images/banana.jpeg",
    options: ["Banana","Orange","Grapes"]
  },
  {
    name: "Orange",
    image: "/images/orange.png",
    options: ["Watermelon","Orange","Mango"]
  },
  {
    name: "Watermelon",
    image: "/images/watermelon.png",
    options: ["Watermelon","Jackfruit","Banana"]
  },
  {
    name: "Grapes",
    image: "/images/grapes.png",
    options: ["Pear","Pomegranate","Grapes"]
  },
  {
    name: "Mango",
    image: "/images/mango.png",
    options: ["Mango","Jackfruit","Blueberry"]
  },
  {
    name: "Pear",
    image: "/images/pear.jpeg",
    options: ["Mango","Pear","Strawberry"]
  },
]

const GuessTheFruit = () => {

  const [index, setIndex] = useState<number>(0)
  const [answer, setAnswer] = useState<string | undefined>()

  const goNext = () => {
    setIndex(index + 1)
    setAnswer(undefined)
  }

  const checkIfRight = (val: string) => {
    val === fruits[index].name ? setAnswer("Yes") : setAnswer("No")
  }

  return (
    <>
    <div id="guessTheFruit">
    {fruits && <ImageDiv src={fruits[index].image} /> }
    <div id="nextDiv">
      {(index !== fruits.length - 1) && <NextDiv onclick={goNext}/> }
     </div>
    </div>
    <div id="guessFruitOptions">
     <Options opts={fruits[index].options} onclick={(e) => checkIfRight((e.target as HTMLTextAreaElement).value)}/>
     </div>
     <div id="answerDiv">
       {answer && (answer === "Yes" ?  <img src="/images/right-answer.png" /> : <img src="/images/wrong-answer.png"/>)}
     </div>
    </>
  )
}

export default GuessTheFruit