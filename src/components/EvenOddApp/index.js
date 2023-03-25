import {useState}from 'react'
import { Container,Header,Para,Para1,Button,CardContainer} from "./styled"


const EvenOddApp=()=>{

    const [number,setNumber]=useState(0)

    const onClickIncrement=()=>{
             const randomNumber=Math.floor(Math.random()*100)
             setNumber(prevState=>prevState+randomNumber)
    }

    const value = number%2===0?"Even":"Odd"

    return(
        <Container>
            <CardContainer>
             <Header>Count {number}</Header>
             <Para>Count is {value}</Para>
             <Button onClick={onClickIncrement}>Increment</Button>
             <Para1>*Increase By Random Number Between 0 to 100</Para1>
             </CardContainer>
        </Container>
    )

}

export default EvenOddApp