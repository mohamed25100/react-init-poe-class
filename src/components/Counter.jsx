import React, { Component } from 'react'

export class Counter extends Component {

    static defaultProps = {
        initCount: 0
    }
    
    constructor(props) {
        super(props)
        this.state = {
            counter : this.props.initCount
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

      }

    increment = () => {
        this.setState({
            counter : this.state.counter + 1
        })

    }

     decrement = () => {
        if(this.state.counter > 0) {
            this.setState({
                counter : this.state.counter - 1
            })
        }
        
    }

  render() {
    return (
      <div className='flex justify-center mt-10'>
        <div className='w-1/2 bg-gray-800 text-white p-3'>
            <p>{this.props.title}</p>
            <p 
            className='text-5xl text-center p-4'>
                {this.state.counter} </p>
            <div className='flex justify-around mt-7'>
                <button 
                onClick={this.decrement}
                className='p-3 bg-black shadow-sm shadow-white'>
                    -
                </button>
                <button 
                onClick={this.increment}
                className='p-3 bg-black shadow-sm shadow-white'>
                    +
                </button>

            </div>
        
        </div>

      </div>
    )
  }
}