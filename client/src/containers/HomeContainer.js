import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions';
import { NavLink } from 'react-router-dom'
import '../styleAll.css';

class Home extends Component {
  componentWillMount = () => {
    this.props.dispatch(getBooks(4, 0, 'desc'));
  };

  showBooks = (b) =>
    b.list
      ? b.list.map((item) => (
          <div className='homeMainDiv' key = {item._id}>
              <NavLink to={`/books/${item._id}`} className='book_store'>
                {item.name}
              <div className='author'>{item.author}</div>
              <div className='homeSpans'>
                <span className='price'>Price ${item.price}</span>{' '}
                <span className='pages'>Pages {item.pages}</span>{' '}
                <span className='rating'>Rating {item.rating}</span>
              </div>
            </NavLink>
          </div>
        ))
      : null;

  loadMoreBooks = () => {
    let count = this.props.allBooks.list.length;
    console.log(count);
    this.props.dispatch(
      getBooks(count, count, 'desc', this.props.allBooks.list)
    );
  };

  render() {
    console.log(this.props.allBooks);
    return (
      <div>
        <div className='HomeDiv'>{this.showBooks(this.props.allBooks)}</div>
        <div onClick={this.loadMoreBooks} className='loadMoreButton'>
          Load More Books
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    allBooks: state.allBooks
  };
};
export default connect(mapStateToProps)(Home);
