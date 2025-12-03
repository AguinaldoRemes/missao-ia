const nomes = ["Daiane", "lisiane", "masqueiquinho", "marlonildo ", "ratinho"];
export function aleatorio (lista){
    const posicao = Math.floor (Math.rondom()*lista.lenght);
    return lista [posicao];
}
export const nome = aleatorio(nomes)