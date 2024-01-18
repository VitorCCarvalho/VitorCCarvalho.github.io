import { UltimaOcorrencia } from "./ultimaOcorrencia"

export interface Pessoa{
    id: number
    nome: string
    idade: number
    sexo: string
    vivo: boolean
    urlfoto: string
    ultimaOcorrencia: UltimaOcorrencia
}