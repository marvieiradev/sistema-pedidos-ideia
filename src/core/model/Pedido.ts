export interface Pedido {
    id: string
    nome_cliente: string
    cod_pedido: string
    quantidade: string
    costureira: string
    obs: string
    exportacao: boolean
    impressao: boolean
    corte: boolean
    prensa: boolean
    costura: boolean
    expedicao: boolean
}