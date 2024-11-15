import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./../Latest/_Latest.scss";
import { useEffect, useState } from "react";

function Latest() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Truncate title function
  const truncateTitle = (title) =>
    title.length > 50 ? title.slice(0, 50) + "..." : title;

  // Handle card click to set selected article
  const handleCardClick = (article) => setSelectedArticle(article);



  useEffect(() => {
    fetch("../../../news_listing.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter articles where 'showOnHomepage' is true
        const filteredArticles = data.News.filter((article) => article.showOnHomepage);

        // Sort articles by publishedDate in descending order (most recent first)
        const sortedArticles = filteredArticles.sort((a, b) => {
          const dateA = new Date(a.publishedDate);
          const dateB = new Date(b.publishedDate);
          return dateB - dateA; // descending order
        });

        // Set the articles state with the most recent 3 articles
        setArticles(sortedArticles.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getCategoryName = (categoryID) => {
    const categories = {
      1: "Daily updates",
      2: "Technology",
      3: "Sales and Nutrition",
      4: "Global News",
    };
    return categories[categoryID] || "Unknown Category";
  };

  const handleViewAllClick = () => {
    navigate("/articles"); // Navigate to /articles page
  };

  return (
    <section className="latest">
      <div className="container">
        <div className="latest__content">
          <div>
            <p className="latest__p">SUCCESS STORIES</p>
            <h2 className="latest__content__h2">Read up on latest Articles</h2>
          </div>
          
          {/* View All button with onClick handler */}
          <button className="btn latest__btn" onClick={handleViewAllClick}>
            View All
          </button>
        </div>

        {/* If an article is selected, show the detailed view */}
        {selectedArticle ? (
          <div className="selected-article-container">
            <img
              src={selectedArticle.urlToImage || "./Assets/placeholder-image.png"} // Use a placeholder if no image is available
              alt={selectedArticle.title}
              className="expanded__card-img"
            />
            <div className="card-body__top__content latest__desktop-card-body">
              <div className="line"></div>
              <p>{getCategoryName(selectedArticle.categoryID)}</p>
            </div>
            <h2>{selectedArticle.title}</h2>
            <div className="card-body__bottom__content">
              <div className="latest__name">
                <span className="icon-pen"></span>
                <p>{selectedArticle.author || "Mohamed Sherif"}</p>
              </div>
              <div className="latest__date">
                <span className="icon-calendar"></span>
                <pre>{selectedArticle.publishedDate}</pre>
              </div>
            </div>
            <p className="selected__article-description">
              {selectedArticle.description}
            </p>
            <p className="selected__article-content">
              {selectedArticle.content}
            </p>
          </div>
        ) : (
          // Display the article cards
          <div className="row latest__cards">
            {articles.map((article, index) => (
              <div
                key={article.id || index}
                className="col-lg-6 col-xl-4 col-md-6 all-shown-card"
                onClick={() => handleCardClick(article)} // Trigger card click
              >
                <div className="card">
                  <div className="image-container">
                    <img
                      src={article.urlToImage || "./Assets/latest_card1.png"}
                      alt={article.title || "Latest Article Image"}
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-body__top__content latest__desktop-card-body">
                      <div className="line"></div>
                      <p>{getCategoryName(article.categoryID)}</p>
                    </div>
                    <h5 className="card-title">{truncateTitle(article.title)}</h5> {/* Truncated title */}
                    <div className="card-body__bottom__content">
                      <div className="latest__name">
                        <span className="icon-pen"></span>
                        <p>{article.author || "Author Name"}</p>
                      </div>
                      <div className="latest__date">
                        <span className="icon-calendar"></span>
                        <pre>{article.publishedDate || "Date"}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Latest;
