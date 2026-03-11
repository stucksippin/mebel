const reviews = [
  {
    name: "Анна М.",
    city: "Москва",
    rating: 5,
    date: "Март 2025",
    text: "Заказывали кухню угловую, 12 кв.м. Всё чётко: замер приехали на следующий день, проект сделали за сутки. Кухня готова через 18 дней. Качество отличное, петли немецкие, ящики ходят мягко. Однозначно советую.",
    order: "Кухня угловая",
  },
  {
    name: "Дмитрий К.",
    city: "Подмосковье",
    rating: 5,
    date: "Февраль 2025",
    text: "Делали шкаф-купе в спальню с нестандартной нишей под скошенным потолком. Другие компании отказывались или давали ценник в 2 раза выше. Здесь всё спроектировали точно, никаких зазоров нет.",
    order: "Шкаф-купе",
  },
  {
    name: "Ольга Р.",
    city: "Москва",
    rating: 5,
    date: "Январь 2025",
    text: "Детскую комнату для двоих детей делали. Двухъярусная кровать, два рабочих места, шкаф — всё в одном проекте. Дети в восторге, я в восторге. Мастера работали аккуратно, не оставили ни одного пятна.",
    order: "Детская комната",
  },
];

export default function ReviewsSection() {
  return (
    <section className="section reviews-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Отзывы</div>
          <h2 className="section-title">Что говорят клиенты</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-top">
                <div className="review-avatar">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-city">{r.city} · {r.date}</div>
                </div>
                <div className="review-stars">
                  {"★".repeat(r.rating)}
                </div>
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-order">
                <span>Заказ:</span> {r.order}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
