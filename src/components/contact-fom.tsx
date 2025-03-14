"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { formSchema } from "@/functions/form-validate";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

type Form = z.infer<typeof formSchema>;

type StatusForm = {
  success: boolean | null;
  message: string | null;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<StatusForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");

    if (value.length <= 2) {
      value = value.replace(/^(\d{0,2})/, "($1");
    } else if (value.length <= 7) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    e.currentTarget.value = value;
  };

  const onSubmit = async (data: Form) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: data.nome,
          from_email: data.email,
          telefone: data.telefone,
          estado: data.estado,
          municipio: data.municipio,
          cargo: data.cargo,
          message: data.mensagem,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email enviado com sucesso:", result.text);
      setSubmitStatus({
        success: true,
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus({
        success: false,
        message:
          "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por outro meio.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Entre em Contato
      </h2>

      {submitStatus && (
        <div
          className={`p-4 mb-8 rounded-xl ${
            submitStatus.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Nome *
            </label>
            <input
              type="text"
              id="nome"
              {...(register("nome"), { required: true })}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.nome
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-primary/20"
              }`}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Telefone *
            </label>
            <input
              type="text"
              id="telefone"
              placeholder="(XX) XXXXX-XXXX"
              {...register("telefone", { required: true })}
              onInput={handlePhoneInput}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.telefone
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-primary/20"
              }`}
            />
            {errors.telefone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.telefone.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-300 focus:ring-primary/20"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="estado"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Estado *
            </label>
            <select
              id="estado"
              {...register("estado", { required: true })}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 appearance-none bg-white ${
                errors.estado
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-primary/20"
              }`}
              style={{
                backgroundImage:
                  'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5z" fill="%23555"/></svg>\')',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
            >
              <option value="">Selecione um estado</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            {errors.estado && (
              <p className="mt-1 text-sm text-red-600">
                {errors.estado.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="municipio"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Município *
            </label>
            <input
              type="text"
              id="municipio"
              {...register("municipio", { required: true })}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.municipio
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-primary/20"
              }`}
            />
            {errors.municipio && (
              <p className="mt-1 text-sm text-red-600">
                {errors.municipio.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cargo"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Cargo *
          </label>
          <input
            type="text"
            id="cargo"
            {...register("cargo", { required: true })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.cargo
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-300 focus:ring-primary/20"
            }`}
          />
          {errors.cargo && (
            <p className="mt-1 text-sm text-red-600">{errors.cargo.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Mensagem *
          </label>
          <textarea
            id="mensagem"
            rows={5}
            {...register("mensagem", { required: true })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.mensagem
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-300 focus:ring-primary/20"
            }`}
          ></textarea>
          {errors.mensagem && (
            <p className="mt-1 text-sm text-red-600">
              {errors.mensagem.message}
            </p>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-[#FEBD11] text-white font-medium rounded-xl hover:brightness-75 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 flex items-center gap-2"
          >
            <Send />
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
