import React from "react"; 

const NewsItem =(props)=>{
  
    let { title, description,imageUrl,newsUrl,author,date} = props;
    // const handleImageError = (event) => {
    //   // Handle image loading error (e.g., display a placeholder image)
    //   event.target.src = imageUrl;
    // };
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Author"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank "rel="noreferrer" className="btn btn-dark">
              
              Read More...
            </a>
          </div>
        </div>
       </div>
    );
  }


export default NewsItem;
