// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachCommentDetails, getDeleteComment, getLikeButton} = props
  const {id, name, description, isLike, backgroundColor} = eachCommentDetails
  const firstLetter = name[0]

  const onclickDelete = () => {
    getDeleteComment(id)
  }

  const onclickLike = () => {
    getLikeButton(id)
  }

  const buttonColor = isLike ? 'like-button' : 'like-text'

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-type">
      <div className="name-container">
        <h1 className={`${backgroundColor}  initial-container`}>
          {firstLetter}
        </h1>
        <h1 className="comment-by">{name}</h1>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="description">{description}</p>
      <div className="comment-bottom-section">
        <div className="like-container">
          <img src={imgUrl} alt="like" className="like-image" id="like" />
          <button
            className="comment-button"
            type="button"
            onClick={onclickLike}
          >
            <label htmlFor="like" className={buttonColor}>
              Like
            </label>
          </button>
        </div>
        <button
          type="button"
          className="comment-button"
          onClick={onclickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
