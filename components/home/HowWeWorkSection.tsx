const steps = [
  { num: "1", title: "Заявка", desc: "Оставляете заявку на сайте или звоните. Менеджер связывается в течение 30 минут." },
  { num: "2", title: "Замер", desc: "Выезжаем к вам бесплатно, снимаем точные размеры и обсуждаем детали." },
  { num: "3", title: "Проект", desc: "Разрабатываем 3D-визуализацию и смету. Согласовываем с вами до последней детали." },
  { num: "4", title: "Договор", desc: "Подписываем договор с чёткими сроками и стоимостью. Без скрытых доплат." },
  { num: "5", title: "Производство", desc: "Изготавливаем мебель на своём производстве. Вы можете приехать и всё проверить." },
  { num: "6", title: "Монтаж", desc: "Наши мастера привозят, собирают и настраивают. Убираем за собой." },
];

export default function HowWeWorkSection() {
  return (
    <section className="section steps-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Процесс</div>
          <h2 className="section-title">Как мы работаем</h2>
          <p className="section-desc">Прозрачный процесс от первого звонка до готовой мебели у вас дома.</p>
        </div>

        <div className="steps-wrap">
          <div className="steps-line" aria-hidden />
          {steps.map((s, i) => (
            <div key={s.num} className={`step ${i % 2 === 1 ? "step--alt" : ""}`}>
              <div className="step-num-wrap">
                <div className="step-num">{s.num}</div>
              </div>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
