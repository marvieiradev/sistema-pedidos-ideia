import { Pedido } from "@/core/model/Pedido";

const pedidos: Pedido[] = [
    {
        id: "1",
        nome_cliente: "Maria",
        cod_pedido: "2255",
        quantidade: "12",
        costureira: "Antonia",
        obs: "https://images.unsplash.com/photo-1721048149858-139c52892fc9",
        exportacao: false,
        impressao: false,
        corte: false,
        prensa: false,
        costura: false,
        expedicao: false
    },

    {
        id: "2",
        nome_cliente: "Pedro",
        cod_pedido: "3214",
        quantidade: "22",
        costureira: "Samara",
        obs: "https://images.unsplash.com/photo-1721297014365-5f8e043e87a5",
        exportacao: false,
        impressao: false,
        corte: false,
        prensa: true,
        costura: false,
        expedicao: false
    },

    {
        id: "3",
        nome_cliente: "Pedro",
        cod_pedido: "358514",
        quantidade: "22",
        costureira: "Samara",
        obs: "https://images.unsplash.com/photo-1721297014365-5f8e043e87a5",
        exportacao: false,
        impressao: false,
        corte: false,
        prensa: true,
        costura: false,
        expedicao: false
    },

    {
        id: "4",
        nome_cliente: "Pedro",
        cod_pedido: "3258514",
        quantidade: "22",
        costureira: "Samara",
        obs: "https://images.unsplash.com/photo-1721297014365-5f8e043e87a5",
        exportacao: false,
        impressao: false,
        corte: false,
        prensa: true,
        costura: false,
        expedicao: false
    },
]

export default pedidos;