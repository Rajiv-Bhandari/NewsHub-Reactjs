import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/92DF/production/_132699573_gettyimages-1929775267-1.jpg ":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-secondary">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItems
