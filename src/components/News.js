import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor(){
        super();
        console.log('this is constructor from news');
        this.state = {
             articles: [],
             loading: false,
             page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a4440218c9046ee8b490fdd79e6afc3&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=> {
        console.log('prev')

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a4440218c9046ee8b490fdd79e6afc3&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=> {
        console.log('next')
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
        {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a4440218c9046ee8b490fdd79e6afc3&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
    
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
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
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
