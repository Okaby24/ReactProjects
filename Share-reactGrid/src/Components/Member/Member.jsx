import "./../Member/_Member.scss";

function MemberSection() {
  return (
    <section className="member">
      <div className="container">
        <h2 className="member__h2">Become a member and Get our Benefits</h2>

        <p className="member__p">
          Whether you’re an established enterprise or a growing startup,
          discover flexible spaces and solutions.
        </p>

        <button className="btn member__btn">Learn More</button>
      </div>
    </section>
  );
}

export default MemberSection;
