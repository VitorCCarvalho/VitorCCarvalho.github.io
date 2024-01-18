import { OcorrenciaEntrevDesapDTO } from "./ocorrenciaEntrevDesapDTO"

export interface UltimaOcorrencia{
    dtDesaparecimento: Date
    dataLocalizacao: Date
    encontradoVivo: boolean
    localDesaparecimentoConcat: string
    listaCartaz: string
    ocoId: number
    ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO
}