import React from 'react'
import { popNotification, resetNotification } from "../reducers/notificationReducer";
import Filter from './Filter'

class AnecdoteList extends React.Component {
  /*handleNoti = () => {
    const message = 'bro'
    this.props.store.dispatch(popNotification(message))
  }*/

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    console.log('filtteri: ', this.props.store.getState().filter)
    const anecdotesToShow =
      this.props.store.getState().filter === '' ?
        anecdotes :
        anecdotes.filter(anecdote => (anecdote.content.toLowerCase().indexOf(this.props.store.getState().filter.toLowerCase()) > -1))
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div> 
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch({type: 'VOTE', id: anecdote.id})
                this.props.store.dispatch(popNotification(anecdote.content))
                setTimeout(() => {
                  this.props.store.dispatch(resetNotification())
                  console.log('settimeout')
                }, 3000)
              }}>
                Vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
