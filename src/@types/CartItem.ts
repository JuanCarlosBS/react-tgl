export interface CartItem {
    id: string;
    type: string;
    price: number;
    color: string; 
}

export interface CartItemProps {
    games: CartItem[],
    trotalPrice?: number;
}