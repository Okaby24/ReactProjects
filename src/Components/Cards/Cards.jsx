import { useEffect, useState, useRef } from "react";
import { Dropdown, DropdownItem, DropdownButton } from "react-bootstrap";
import "./../Cards/_Cards.scss";
import logoPlaceholder from "../../assets/latest_card1.png";

function Cards() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    fetch("../../../news_listing.json")
      .then((response) => response.json())
      .then((data) => setArticles(data.News))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const truncateTitle = (title) =>
    title.length > 50 ? title.slice(0, 50) + "..." : title;

  const handleCardClick = (article) => setSelectedArticle(article);
  const handleBack = () => setSelectedArticle(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace" && selectedArticle) handleBack();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedArticle]);

  const getCategoryName = (categoryID) => {
    const categories = {
      1: "Daily updates",
      2: "Technology",
      3: "Sales and Nutrition",
      4: "Global News",
    };
    return categories[categoryID] || "Unknown Category";
  };

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth <= 375) {
        setPageSize(1);
      } else if (window.innerWidth <= 768) {
        setPageSize(2);
      } else {
        setPageSize(6);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const totalPages = Math.ceil(articles.length / pageSize);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const renderPageNumbers = () => {
    const maxPagesToShow = window.innerWidth >= 1920 ? 5 : 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(
      totalPages,
      currentPage + Math.floor(maxPagesToShow / 2)
    );

    if (endPage - startPage + 1 < maxPagesToShow) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const handleSortByTitle = () => {
    const sortedArticles = [...articles].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setArticles(sortedArticles);
    setDropdownOpen(false);
  };

  const handleSortByDate = () => {
    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    setArticles(sortedArticles);
    setDropdownOpen(false);
  };

  const handleSortAlphabetically = () => {
    const sortedArticles = [...articles].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setArticles(sortedArticles);
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); //closing dropdown after sorting or filtering
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" ||
        getCategoryName(article.categoryID) === selectedCategory)
  );

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="container">
      <div className="sort__position">
        {!selectedArticle && (
          <Dropdown
            ref={buttonRef}
            onClick={toggleDropdown}
            className="sort"
          >
            Sort{" "}
            {dropdownOpen ? (
              <p className="close-dropDown">X</p>
            ) : (
              <span className="icon-filter"></span>
            )}
          </Dropdown>
        )}

        {dropdownOpen && (
          <div ref={dropdownRef} className="dropdown-menu show">
            <DropdownItem onClick={handleSortByTitle} className="dropdown-item">
              Sort by Title
            </DropdownItem>
            <DropdownItem onClick={handleSortByDate} className="dropdown-item">
              Sort by Date
            </DropdownItem>
            <DropdownItem
              onClick={handleSortAlphabetically}
              className="dropdown-item"
            >
              Sort Alphabetically
            </DropdownItem>

            <div className="dropdown-item">
              <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            <DropdownButton
              title="Filter by Category"
              onSelect={handleCategorySelect}
              className="dropdown-item dropdown-btn"
            >
              <Dropdown.Item eventKey="">All</Dropdown.Item>
              <Dropdown.Item eventKey="Daily updates">Daily updates</Dropdown.Item>
              <Dropdown.Item eventKey="Technology">Technology</Dropdown.Item>
              <Dropdown.Item eventKey="Sales and Nutrition">Sales and Nutrition</Dropdown.Item>
              <Dropdown.Item eventKey="Global News">Global News</Dropdown.Item>
            </DropdownButton>
          </div>
        )}

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
            <p className="selected__article-description">
              {selectedArticle.description}
            </p>
            <p className="selected__article-content">
              {selectedArticle.content}
            </p>
          </div>
        ) : (
          <div>
            <div className="card-container">
              {filteredArticles
                .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((article) => (
                  <div
                    key={article.id}
                    className="card"
                    onClick={() => handleCardClick(article)}
                  >
                        <div className="image-container">
                      <img
                        src={article.urlToImage || logoPlaceholder}
                        className="card-img"
                        alt={article.title}
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-body__top__content latest__desktop-card-body">
                        <div className="line"></div>
                        <p>{getCategoryName(article.categoryID)}</p>
                      </div>
                      <h5 className="card-title">
                        {truncateTitle(article.title)}
                      </h5>
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
            <div className="pagination">
              {currentPage > 1 && (
                <button onClick={goToPreviousPage}>&lt;</button>
              )}
              {renderPageNumbers().map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </button>
              ))}
              {currentPage < totalPages && (
                <button onClick={goToNextPage}>&gt;</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
