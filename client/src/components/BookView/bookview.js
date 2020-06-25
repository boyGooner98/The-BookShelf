import React, { Component } from 'react';
import { getBook } from '../../redux/actions';
import { connect } from 'react-redux';
import '../../styleAll.css';
class BookView extends Component {
  componentWillMount = () => {
    this.props.dispatch(getBook(this.props.match.params.id));
    console.log(this.props);
  };

  renderItems = (b) =>
    b.book ? (
      <div className='bookView'>
        <div className='bookViewBookName'>
          <div className='bookName'>{b.book.name}</div>
          <div className='bookViewAuthor'>
            <strong>{b.book.author}</strong>
          </div>
          <div className='bookViewReviewer'>
            <strong className='bookViewReviewerName'>
              <span className='s'>Review by:</span>{' '}
              <span className='l'>
                {b.reviewer.name}
                {b.reviewer.lastname}
              </span>
            </strong>
          </div>
        </div>
        <div className='bookViewReview'>
          <p className='para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='last'>
          <div className='cell1'>
            <span className='pageTag'> Pages: </span>
            <span className='pagesNo'>{b.book.pages}</span>
          </div>
          <div className='cell2'>
            <span className='ratingTag'>Rating:</span>{' '}
            <span className='bookRating'>{b.book.rating}/5</span>
          </div>
        </div>
      </div>
    ) : null;
  render() {
    let book = this.props.allBooks;
    console.log(this.props.allBooks);
    return <div>{this.renderItems(book)}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    allBooks: state.allBooks,
  };
};
export default connect(mapStateToProps)(BookView);
