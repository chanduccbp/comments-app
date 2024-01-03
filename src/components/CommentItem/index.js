// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDelete, onLike} = props
  const {id, name, comment, initialContainerClassName, isLiked} = commentDetails
  const time = formatDistanceToNow(new Date())

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likePara = isLiked ? 'blue-c' : 'grey-c'

  const onClickDelete = () => {
    onDelete(id)
  }

  const onClickLike = () => {
    onLike(id)
  }

  return (
    <li className="c-item">
      <div className="cont-1">
        <p className={initialContainerClassName}>{name[0]}</p>
        <div className="c-des">
          <h1 className="name-head">
            {name} <span className="time">{time}</span>
          </h1>
          <p className="c-para">{comment}</p>
        </div>
      </div>
      <div className="icon-cont">
        <button type="button" onClick={onClickLike} className="like-butt">
          <img src={likeUrl} alt="like" />
        </button>
        <p className={likePara}>Like</p>
        <button
          type="button"
          onClick={onClickDelete}
          className="del-butt"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
