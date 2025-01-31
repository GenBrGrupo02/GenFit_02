import axios from "axios";
import Exercicio from "../models/Exercicio";

const api = axios.create({
    baseURL: "https://genfit-k0rq.onrender.com"
})

export const cadastrarUsuario = async (url : string, dados: Object, setDados: Function  ) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const login = async (url : string, dados: Object, setDados: Function  ) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}

// Exercícios

export const createExercicio = async (dados: Exercicio, header: Object) => {
    await api.post("/exercicio", dados, header)
}

export const updateExercicio = async (dados: Exercicio, header: Object) => {
    await api.put("/exercicio", dados, header)
}