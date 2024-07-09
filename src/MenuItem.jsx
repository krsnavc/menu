function MenuItem({ img, title, price, desc }) {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <header>
        <h5>{title}</h5>
      </header>
      <p className="item-text">{desc}</p>
    </article>
  );
}

export default MenuItem;
