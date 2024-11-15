import "./../BackToTop/_BackToTop.scss"

window.onscroll = function () {
  let backToTopBtn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function BackToTop() {
  return (
    <button id="backToTopBtn" onClick={scrollToTop}>
      Back to Top <span className="icon-right-long"></span>
    </button>
  );
}
export default BackToTop;
