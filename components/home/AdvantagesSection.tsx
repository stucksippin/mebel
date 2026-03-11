const advantages = [
  {
    num: "01",
    title: "Собственное производство",
    desc: "Изготавливаем мебель на своём заводе — без посредников. Контролируем каждый этап и отвечаем за качество.",
  },
  {
    num: "02",
    title: "Точный замер бесплатно",
    desc: "Выезжаем к вам, снимаем все размеры, учитываем особенности помещения — трубы, скосы, ниши.",
  },
  {
    num: "03",
    title: "3D-проект за 24 часа",
    desc: "Покажем, как будет выглядеть мебель в вашем интерьере до начала производства. Без доплат.",
  },
  {
    num: "04",
    title: "Гарантия 3 года",
    desc: "На всю мебель и фурнитуру. Если что-то пойдёт не так — устраним бесплатно.",
  },
  {
    num: "05",
    title: "Срок от 14 дней",
    desc: "Чёткие сроки и соблюдение договора. Не затягиваем производство и не переносим установку.",
  },
  {
    num: "06",
    title: "Монтаж под ключ",
    desc: "Наши мастера устанавливают и настраивают мебель. Убираем за собой, вы принимаете готовый результат.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="section adv-section">
      <div className="adv-bg-text" aria-hidden>КАЧЕСТВО</div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Почему мы</div>
          <h2 className="section-title">6 причин выбрать нас</h2>
        </div>

        <div className="adv-grid">
          {advantages.map((a) => (
            <div key={a.num} className="adv-card">
              <span className="adv-num">{a.num}</span>
              <div className="adv-divider" />
              <h3 className="adv-title">{a.title}</h3>
              <p className="adv-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
