"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(10, "Введите корректный телефон"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function OrderForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await fetch("/api/order", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <input {...register("name")} placeholder="Ваше имя" className="w-full border border-gray-300 rounded px-4 py-2" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <input {...register("phone")} placeholder="+7 (___) ___-__-__" className="w-full border border-gray-300 rounded px-4 py-2" />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <textarea {...register("message")} placeholder="Опишите вашу задачу" rows={4} className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-700 transition-colors disabled:opacity-50">
        {isSubmitting ? "Отправляем..." : "Оставить заявку"}
      </button>
    </form>
  );
}
