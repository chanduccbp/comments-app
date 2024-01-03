import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddingComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialContainerClassName = `profile ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialContainerClassName,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredComments})
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const count = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="head">Comments</h1>
        <div className="input-container">
          <form onSubmit={this.onAddingComment} className="form">
            <p className="form-head">Say something about 4.0 Technologies</p>
            <input
              type="input"
              placeholder="Your Name"
              value={name}
              onChange={this.updateName}
              className="name-input"
            />
            <textarea
              placeholder="Your Comment"
              rows="10"
              cols="50"
              value={comment}
              onChange={this.updateComment}
              className="text"
            />
            <button type="submit" className="butt">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <ul className="c-container">
          <li className="c-head">
            <span className="count">{count}</span> Comments
          </li>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onDelete={this.onDelete}
              onLike={this.onLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
