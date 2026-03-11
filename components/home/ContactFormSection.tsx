"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(10, "Введите корректный телефон"),
  type: z.string().min(1, "Выберите тип мебели"),
});

type FormData = z.infer<typeof schema>;

const types = ["Кухня", "Шкаф / гардеробная", "Гостиная", "Спальня", "Детская", "Прихожая", "Другое"];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSent(true);
  };

  return (
    <section className="section form-section" id="zayavka">
      <div className="container">
        <div className="form-wrap">
          {/* Left */}
          <div className="form-left">
            <div className="section-tag section-tag--light">Бесплатно</div>
            <h2 className="form-title">Рассчитайте стоимость мебели</h2>
            <p className="form-sub">
              Оставьте заявку — менеджер свяжется в течение 30 минут, ответит на вопросы и назначит выезд замерщика.
            </p>
            <ul className="form-promises">
              {[
                "Замер и 3D-проект бесплатно",
                "Фиксированная цена в договоре",
                "Срок изготовления от 14 дней",
              ].map((p) => (
                <li key={p}>
                  <span className="form-promise-icon">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="form-right">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Заявка принята!</h3>
                <p>Менеджер свяжется с вами в течение 30 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="form-inner" noValidate>
                <div className="field-wrap">
                  <label className="field-label">Ваше имя</label>
                  <input
                    {...register("name")}
                    placeholder="Как вас зовут?"
                    className={`field-input ${errors.name ? "field-input--error" : ""}`}
                  />
                  {errors.name && <span className="field-error">{errors.name.message}</span>}
                </div>

                <div className="field-wrap">
                  <label className="field-label">Телефон</label>
                  <input
                    {...register("phone")}
                    placeholder="+7 (___) ___-__-__"
                    className={`field-input ${errors.phone ? "field-input--error" : ""}`}
                  />
                  {errors.phone && <span className="field-error">{errors.phone.message}</span>}
                </div>

                <div className="field-wrap">
                  <label className="field-label">Что нужно сделать?</label>
                  <div className="type-pills">
                    {types.map((t) => (
                      <label key={t} className="type-pill">
                        <input {...register("type")} type="radio" value={t} className="sr-only" />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                  {errors.type && <span className="field-error">{errors.type.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-submit">
                  {isSubmitting ? "Отправляем..." : "Получить расчёт бесплатно"}
                </button>

                <p className="form-legal">
                  Нажимая кнопку, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
