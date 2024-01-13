


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
        name: 'Bose Speaker',
        price:'150',
        category:'Speakers',
        img: "https://imgs.search.brave.com/Onhly0eN4CItF6h-tsVsPlLT6MasdtPbSZfeQoC_fxk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmhwaG90by5j/b20vaW1hZ2VzL2lt/YWdlczM0NXgzNDUv/MTYzNDcyMTcxN18x/NjYxMjU4LmpwZw",
        stock:'13',
        description: 'Auriculares Inalambricos'  },
                {
        id: '4',
        name: 'Marshall Stanmore III ',
        price:'350',
        category:'Speakers',
        img: "https://avstore.in/cdn/shop/products/2.AVStore-Marshall-Stanmore-III-Front-Left-Angled-View-Brown_1800x.jpg?v=1675651759",
        stock:'10',
        description: 'Altavoz portátil Bluetooth'  },            
            {
        id: '5',
        name: 'Bose QuietComfort',
        price:'299',
        category:'Earbuds',
        img: "https://i.ebayimg.com/images/g/wLwAAOSwwEpkI-1t/s-l1200.webp",
        stock:'10',
        description: 'Auriculares Inalambricos'  },
        {
        id: '6',
        name: 'SkullCandy Grind ',
        price:'150',
        category:'Earbuds',
        img: "https://www.skullcandy.com.ar/product_images/a/762/20002000grindfuel__16755_std.jpg",
        stock:'10',
        description: 'Altavoz portátil Bluetooth, altavoz impermeable inalámbrico'  },
                
        {
        id: '7',
        name: 'Fender Guitar Strap ',
        price:'80',
        category:'Accesories',
        img: "https://www.musikshack.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/1/4/141023.jpg",
        stock:'10',
        description: 'Guitar Strap'  },     
            {
        id: '8',
        name: 'Dunlop Tortex púa',
        price:'10',
        category:'Accesories',
        img: "https://www.stringsdirect.co.uk/cdn/shop/products/1597837840-57952400_e7f9ec09-8bf8-4436-ab0a-b0bd891e4ba9.jpg?v=1685107921",
        stock:'10',
        description: 'Púa tortex'  },       
        {
            id: '9',
            name: 'Wonderboom 2',
            price:'80',
            category:'Speakers',
            img: "https://www.artis.in/cdn/shop/products/1_f5b3377c-c870-420f-bc6a-5cd4b3a5a7c7.jpg?v=1653639993",
            stock:'10',
            description: 'Speaker inalambrico a prueba de agua'  },       
            {
                id: '10',
                name: 'BOSS DS-1W ',
                price:'149',
                category:'Accesories',
                img: "https://media.musiciansfriend.com/is/image/MMGS7/DS-1W-Distortion-Waza-Craft-Effects-Pedal-Orange/L96681000001000-00-400x400.jpg",
                stock:'10',
                description: 'Pedal Distortion'  },             
            
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
        const lowerCaseCategoryId = categoryId.toLowerCase();
        resolve(products.filter(prod => prod.category.toLowerCase() === lowerCaseCategoryId));
      }, 1000);
    });
  };
  