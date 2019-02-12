import React from 'react'
import { createAnecdote } from './../reducers/anecdoteReducer'

/*const createAnecdote = e => {
  e.preventDefault()
  return async (dispatch) => {
  const createdAnecdote = await e.target.anecdote.value
  dispatch({ 
    type: 'CREATE', 
    anecdote: createdAnecdote 
  })
  }
}*/

class AnecdoteForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    this.props.store.dispatch(createAnecdote(content))
  }

   render() {
     return (
       <div>
      <h2>Create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' placeholder="Add anecdote content here"/></div>
          <button>Create</button> 
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
