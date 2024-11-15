import { useEffect, useState } from "react";
import "./../Cards/_Cards.scss";
import logoPlaceholder from "../../assets/latest_card1.png"; // Placeholder if `urlToImage` is not available

function Cards() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of cards per page

  useEffect(() => {
    fetch("../../../news_listing.json") // Replace with your JSON file path or URL
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.News);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const truncateTitle = (title) => {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  };

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace" && selectedArticle) {
        handleBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  // Category ID to name mapping
  const getCategoryName = (categoryID) => {
    const categories = {
      1: "Daily updates",
      2: "Technology",
      3: "Sales and Nutrition",
      4: "Global News",
    };
    return categories[categoryID] || "Unknown Category";
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / pageSize);

  // Get the articles for the current page
  const paginatedArticles = articles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <button className="sort">sort</button>
      {selectedArticle ? (
        <div className="selected-article-container">
          <img
            src={selectedArticle.urlToImage || logoPlaceholder}
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

          <p>{selectedArticle.description}</p>
          <p>{selectedArticle.content}</p>
        </div>
      ) : (
        <div>
          <div className="card-container">
            {paginatedArticles.map((article) => (
              <div
                key={article.id}
                className="card"
                onClick={() => handleCardClick(article)}
              >
                <div className="image-container">
                  <img
                    src={article.urlToImage || logoPlaceholder}
                    className="card-img-top"
                    alt={article.title}
                  />
                </div>
                <div className="card-body">
                  <div className="card-body__top__content latest__desktop-card-body">
                    <div className="line"></div>
                    <p>{getCategoryName(article.categoryID)}</p>
                  </div>
                  <h5 className="card-title">{truncateTitle(article.title)}</h5>
                  <div className="card-body__bottom__content">
                    <div className="latest__name">
                      <span className="icon-pen"></span>
                      <p>{article.author || "Mohamed Sherif"}</p>
                    </div>
                    <div className="latest__date">
                      <span className="icon-calendar"></span>
                      <pre>{article.publishedDate}</pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
