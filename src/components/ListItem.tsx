import React from 'react';

type ShoppingListItem = {
    text: string;
    price: number;
    quantity: number;
};

const shoppingList: ShoppingListItem[] = [
    {text: 'Bananes', price: 1, quantity: 20},
    {text: 'Choucroute', price: 3, quantity: 12},
    {text: 'Caviar', price: 1000, quantity: 200},
    {text: 'Poulet', price: 20, quantity: 54},
    {text: 'Pommes', price: 4, quantity: 102},
    {text: 'Prunes', price: 5, quantity: 23},
]

export const ListItem = () => {
    return (
        <div className="bg-amber-400 rounded-2xl p-5">
            <table>
                <thead>
                <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                </tr>
                </thead>
                {shoppingList.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{item.text}</td>
                            <td>{item.price}€</td>
                            <td>{item.quantity}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}