import { z } from "zod";

export const formSchema = z.object({
    nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    telefone: z.string().regex(/^$$\d{2}$$\s\d{4,5}-\d{4}$/, {
      message: "Formato deve ser (XX) XXXXX-XXXX",
    }),
    email: z.string().email({ message: "E-mail inválido" }),
    estado: z.string().min(2, { message: "Selecione um estado" }),
    municipio: z.string().min(2, { message: "Informe seu município" }),
    cargo: z.string().min(2, { message: "Informe seu cargo" }),
    mensagem: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
  })