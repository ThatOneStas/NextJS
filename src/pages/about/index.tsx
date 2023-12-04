import {Component, ReactNode} from 'react'
import Link from 'next/link'
import s from "@/pages/about/about.module.scss"
import counter from '@/store/features/counter'

interface State {
  counter: number
}

interface Props{
  
}

class About extends Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.state={
      counter:0
    }
  }
  increment=()=>{
    this.setState((prevState)=>({
      counter: prevState.counter + 1
    }))
  }
  decrement=()=>{
    this.setState((prevState)=>({
      counter: prevState.counter - 1
    }))
  }
  render(): ReactNode{
    return(
      <>
      <h1>About: {this.state.counter}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      </>
    )
  }
}

export default About;