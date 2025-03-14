import { z } from "zod";

export const formSchema = z.object({
    nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).nonempty("Este campo é obrigatório"),
    telefone: z.string().regex(/^$$\d{2}$$\s\d{4,5}-\d{4}$/, {
      message: "Formato deve ser (XX) XXXXX-XXXX",
    }).nonempty("Este campo é obrigatório"),
    email: z.string().email({ message: "E-mail inválido" }).nonempty("Este campo é obrigatório"),
    estado: z.string().min(2, { message: "Selecione um estado" }).nonempty("Este campo é obrigatório"),
    municipio: z.string().min(2, { message: "Informe seu município" }).nonempty("Este campo é obrigatório"),
    cargo: z.string().min(2, { message: "Informe seu cargo" }).nonempty("Este campo é obrigatório"),
    mensagem: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }).nonempty("Este campo é obrigatório"),
  })