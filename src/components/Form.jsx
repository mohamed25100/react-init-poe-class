import React, { Component } from 'react'

export  class Form extends Component {
 
    /*
    Lorsque je clique sur le bouton "S'inscrire"
    - si le champs nom ou prénom sont vide : Message d'erreur : "Les champs nom et prénom sont obligatoire"
    - Si les champs sont remplis : "Bonjour nom prenom "
    - Un message : "Bienvenue"
    */
    constructor() {
        super()
        this.state = {
            message: 'void',
            email: '',
            fName: '',
            lName: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.fName !== '' && this.state.lName !== '') {
          this.setState({message: 'success'})
        } else {
          this.setState({message: 'error'})
        }
      }

  render() {
      const {lName, fName, email, message} = this.state
    return (
        <>
          {message == 'success' &&
        <p className='bg-emerald-200 p-4 text-black text-center text-xl'>Hello {fName} {lName} </p>
      }

    { message == 'void' &&
        <p className='bg-white p-4 text-black text-center text-xl'>Bienvenue</p>
      }

      {  message == 'error' &&
        <p className='bg-red-200 p-4 text-black text-center text-xl'>Les champs nom et prénom sont obligatoires !</p>
      }
      
        <div className='flex justify-center'>
           <p className='text-lg'>{fName}</p>
            <form onSubmit={this.handleSubmit} className='bg-black w-2/3 p-6'>
                <div className='my-4'>
                    <label htmlFor="name">Nom</label>
                    <input  
                      onChange={(e) => this.setState({lName: e.target.value })}
                      value={lName}
                      className='p-5 w-full bg-gray-900'
                      type='text'
                      placeholder='Tapez votre nom ici' /> 
                </div>
                <div className='my-4'>
                    <label htmlFor="firstname">Prénom</label>
                    <input  
                      onChange={(e) => this.setState({fName: e.target.value })}
                      value={fName}
                      className='p-5 w-full bg-gray-900'
                      type='text'
                      placeholder='Tapez votre Prénom ici' /> 
                </div>

                <div className='my-4'>
                    <label htmlFor="email">Email</label>
                    <input  
                      onChange={(e) => this.setState({email: e.target.value })}
                      value={email}
                      className='p-5 w-full bg-gray-900'
                      type='email'
                      placeholder='Tapez votre Email ici' /> 
                </div>
                <div className='flex justify-center'>
                
              <button
              className='bg-red-700 p-5' 
              type='submit'>S'inscrire</button> 
             
           </div>

            </form>

        </div>
        </>
    
   )
  }
}