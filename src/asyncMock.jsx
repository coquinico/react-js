


const products = [
    {
        id: '1',
        name: 'Beats Fit Pro',
        price:'200',
        category:'Earbuds',
        img: "https://imgs.search.brave.com/9PJm2WbXK6ka4dCUgV0ngm4DUl8SVVXiQTxKf6fepSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kLzE5/NDI1MjQ4NDI5Ni1m/cm9udGltYWdl",
        stock:'20',
        description: 'Auriculares inalámbricos con cancelación de ruido' },
        {
            id: '2',
            name: 'NUX NSS-4 Mini Core',
            price:'100',
            category:'Accesories',
            img: "https://cdn.korn.eu/pictures/product/400/280469.jpg",
            stock:'10',
            description: 'Pedal de efectos de guitarra'  },
            {
                id: '3',
                name: 'Bose SoundLink Flex',
                price:'150',
                category:'Speakers',
                img: "https://imgs.search.brave.com/Onhly0eN4CItF6h-tsVsPlLT6MasdtPbSZfeQoC_fxk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmhwaG90by5j/b20vaW1hZ2VzL2lt/YWdlczM0NXgzNDUv/MTYzNDcyMTcxN18x/NjYxMjU4LmpwZw",
                stock:'10',
                description: 'Altavoz portátil Bluetooth, altavoz impermeable inalámbrico'  }
            
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}