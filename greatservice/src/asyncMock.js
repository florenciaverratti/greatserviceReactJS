const products =[
    {
        id: 1,
        name: 'Tintura',
        price: 4000,
        category: 'Servicios',
        img: 'https://ath2.unileverservices.com/wp-content/uploads/sites/13/2020/04/cada-cu%C3%A1nto-te%C3%B1ir-1.jpg' ,
        stock: 1000,
        description: 'La tintura tarda 80min y se usa la marca igora'
    },
    {
        id: 2,
        name: 'Igora',
        price: 900,
        category: 'Productos',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/850/675/products/tintura-igora-dusted-rouge-royaltakeover-schwarzkopf-60g-d_nq_np_890398-mla31066912387_062019-f1-14b965f97c92fb51d815990650810237-640-0.jpg',
        stock: 100,
        description: 'El color ha sido el centro de nuestro trabajo durante más de 100 años. Estableciendo nuevos estándares en el mercado, IGORA ha potenciado la creatividad de nuestros coloristas durante más de 50 años. Ir un paso por delante de las tendencias siempre ha sido nuestro compromiso para ti. Entendemos que necesitas una coloración en la que puedas confiar y que nunca te decepcione. Nuestras gamas de color profesional se caracterizan por proporcionar unos resultados fascinantes con un 100 % de fiabilidad, incluso bajo las condiciones más complicadas.'
    },
    {
        id: 3 ,
        name: 'Shock de btx',
        price: 1000,
        category: 'Tratamientos',
        img: 'https://mejorconsalud.as.com/wp-content/uploads/2021/01/botox-capilar-768x512.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe',
        stock: 30,
        description: 'Un tratamiento increible para tus raices'
    }
]

export const getProduct =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getDetail =()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[1])
        }, 2000)
    })
}