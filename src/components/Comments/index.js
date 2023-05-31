import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

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
  state = {
    commentsListDetails: [],
    name: '',
    description: '',
  }

  addComment = event => {
    event.preventDefault()
    const color = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const backgroundColor = initialContainerBackgroundClassNames[color]
    const {name, description} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      description,
      backgroundColor,
      isLike: false,
    }
    this.setState(preVState => ({
      commentsListDetails: [...preVState.commentsListDetails, newComment],
      name: '',
      description: '',
    }))
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getDescription = event => {
    this.setState({description: event.target.value})
  }

  deleteComment = id => {
    const {commentsListDetails} = this.state
    const filteredResults = commentsListDetails.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsListDetails: filteredResults})
    this.setState(preVState => ({comments: preVState.comments - 1}))
    console.log(commentsListDetails)
  }

  likedButton = id => {
    this.setState(preVState => ({
      commentsListDetails: preVState.commentsListDetails.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsListDetails} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <div className="top-section">
          <form className="form-container">
            <p className="technologies-para">
              Say something about 4.0 Technologies
            </p>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              onChange={this.getName}
            />
            <textarea
              rows="10"
              cols="40"
              className="text-area"
              placeholder="Your Comment"
              onChange={this.getDescription}
            />
            <button type="submit" className="button" onClick={this.addComment}>
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr />
        <p>
          <span className="span-element">{commentsListDetails.length}</span>
          Comments
        </p>
        <ul>
          {commentsListDetails.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachCommentDetails={eachComment}
              getDeleteComment={this.deleteComment}
              getLikeButton={this.likedButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
