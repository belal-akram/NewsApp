import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:6,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = [];

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello There!");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsApp`;
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fa5567fbe6f49f6adf3055087003b86&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fa5567fbe6f49f6adf3055087003b86&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next Clicked");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fa5567fbe6f49f6adf3055087003b86&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Prev
          </button>
          <button
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";

// export class News extends Component {
//   constructor() {
//     super();
//     console.log("Hello There!");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//   }

//   async componentDidMount() {
//     this.fetchArticles();
//   }

//   async fetchArticles() {
//     this.setState({ loading: true });

//     const url = 'https://real-time-news-data.p.rapidapi.com/local-headlines?query=New-York&country=US&lang=en';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'ab63c4592amsh30475c2ce7663d7p184e1bjsn5bfba4e701d4',
//         'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const jsonData = await response.json();
//       console.log(jsonData.data);
//       this.setState({
//         articles: jsonData.data || [],
//         loading: false
//       });
//     } catch (error) {
//       console.error(error);
//       this.setState({ loading: false });
//     }
//   }

//   handlePrevClick = async () => {
//     console.log("Prev Clicked");
//     this.setState({ page: this.state.page - 1 }, () => {
//       this.fetchArticles();
//     });
//   };

//   handleNextClick = async () => {
//     console.log("Next Clicked");
//     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
//       this.setState({ page: this.state.page + 1 }, () => {
//         this.fetchArticles();
//       });
//     }
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1>NewsMonkey - Top Headlines</h1>
//         <div className="row">
//           {this.state.articles.map((element, index) => {
//             return (
//               <div className="col-md-4" key={index}>
//                 <NewsItem
//                   title={element.title}
//                   description={element.published_datetime_utc}
//                   imageUrl={element.photo_url}
//                   newsUrl={element.link}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePrevClick}
//           >
//             &larr;Prev
//           </button>
//           <button
//             disabled={this.state.loading}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;