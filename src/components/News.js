import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Ben Hayward",
            "title": "‘He speaks about football and about life - and he tells us some stories that stay inside our dressing room…’ Tottenham star Guglielmo Vicario on what working with Ange Postecoglou is REALLY like",
            "description": "Guglielmo Vicario tells FourFourTwo what it is like to work with Ange Postecoglou and opens up on similarities between the two",
            "url": "https://www.fourfourtwo.com/news/he-speaks-about-football-and-about-life-and-he-tells-us-some-stories-that-stay-inside-our-dressing-room-tottenham-star-guglielmo-vicario-on-what-working-with-ange-postecoglou-is-really-like",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/BfFkaKGzsdS2VXezhbHCjh-1200-80.jpg",
            "publishedAt": "2024-02-20T10:00:45Z",
            "content": "Tottenham Hotspur goalkeeper Guglielmo Vicario has opened up on what it is like to work with manager Ange Postecoglou and about similarities between their career paths before joining Spurs.\r\nVicario … [+2365 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Who has a new hero? Garth Crooks' Team of the Week",
            "description": "Which players impressed our football pundit Garth Crooks enough to make his latest Team of the Week?",
            "url": "http://www.bbc.co.uk/sport/football/68340599",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1203C/production/_132688737_-d77f0c1c-c2fc-463e-ac6e-9679d690e9b4.png",
            "publishedAt": "2024-02-19T22:37:22.448726Z",
            "content": "After every Premier League weekend, BBC football pundit Garth Crooks gathers his thoughts and gives you his Team of the Week.\r\nHere are this week's choices and, as ever, Garth also discusses the game… [+11328 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Nicole Carpenter",
            "title": "EA Sports College Football 25 teaser reintroduces the beloved franchise",
            "description": "EA released a trailer for EA Sports College Football 25 on Thursday, giving players a first look at the highly-anticipated return of NCAA football video games.",
            "url": "https://www.polygon.com/24074774/ea-sports-college-football-25-teaser-trailer",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/C4cfKMFZYCqPRAr7EUj0MfreLnI=/0x0:2063x1080/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25289260/CFB25_UF_jersey_WM.png",
            "publishedAt": "2024-02-16T15:51:50Z",
            "content": "A teaser trailer dropped Thursday, but a full look is coming in May"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "Unique Stats from the 2023 College Football Regular Season",
            "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
            "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
            "publishedAt": "2023-12-12T12:00:00Z",
            "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
            "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
            "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-06T09:06:42Z",
            "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
            "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
            "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-05T17:57:19Z",
            "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor(){
        super();
        console.log('this is constructor from news');
        this.state = {
             articles: this.articles,
             loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsHub - Top Headlines</h2>
        
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                    <NewsItems title={element.title.slice(0,50)} description={element.description.slice(0,90)} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
            })}
            
        </div>

      </div>
    )
  }
}

export default News
