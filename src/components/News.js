import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor(){
        super();
        console.log('this is constructor from news');
        this.state = {
             articles: [],
             loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a4440218c9046ee8b490fdd79e6afc3";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    console.log('should be first')
    return (
      <div className='container my-3'>
        <h1>NewsHub - Top Headlines</h1>
        
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                    <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
            })}
            
        </div>

      </div>
    )
  }
}

export default News
