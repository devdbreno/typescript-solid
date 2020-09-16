type CartItem = { name: string; price: number }

export default class ShoppingCart {
  private readonly items: CartItem[] = []

  public async addItem(carItem: CartItem): Promise<void> {
    this.items.push(carItem)
  }

  public async removeItem(index: number): Promise<void> {
    this.items.splice(index, 1)
  }
}

const shoppingCart = new ShoppingCart()

shoppingCart.addItem({ name: 'NodeJS t-shirt', price: 20 })
shoppingCart.addItem({ name: 'NodeJS coffee cup', price: 12 })
shoppingCart.addItem({ name: 'NodeJS shoes', price: 14 })
shoppingCart.addItem({ name: 'NodeJS sticker', price: 2 })

console.log(shoppingCart)
