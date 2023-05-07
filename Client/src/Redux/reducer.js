const initialState = {
    products: [
        {
            "name": "Стілець обідній Юля горіх темний/сірий",
            "currentPrice": '456',
            "imageUrls": "https://wowin.ua/image/cache/catalog/easyphoto/326/P1/monolith_61-702x467.jpg",
            "id": "00110010",
            "colors": [
                'red',
                'black',
                'yellow'
            ],
           
            "category": "tires",
            'selectedQuantiy': 2

        },
        {
            "name": "Ліжко-диван прямий Меблі Прогрес Кельн темно-сірий темно-сірий 1520x920x890 мм",
            "decription": "бла-бла-бла-бла",
            "currentPrice": '5500',
            "imageUrls": "https://wowin.ua/image/cache/catalog/easyphoto/492/P2/alabama_light_grey-702x467.jpg",
            "id": "11001441",
            "category": "tires",

        },
        {
            "name": "Лейзі лежанка для тварин",
            "decription": "бла-бла-бла-бла",
            "currentPrice": '2580',
            'newPrice': '1000',
            "imageUrls": "https://wowin.ua/image/cache/catalog/easyphoto/212/P2/california_flamingo-702x467.jpg",
            "id": "110011",
            "category": "tires",
            'discount': true,
            'selectedQuantiy': 5

        },
        {
            "name": "Обідній стіл у стилі лофт Серія 1 1200х600 мм",
            "decription": "бла-бла-бла-бла ",
            "currentPrice": '2040',
            "imageUrls": "https://wowin.ua/image/cache/catalog/easyphoto/334/_MG_0983-702x467h.jpg",
            "id": "0001111",
            "category": "tires",
            "newProduct": true
        }
    ],
    basket: [],
    isModal: false
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, isModal: !state.isModal }
        case 'BASKET':
            return { ...state, basket: state.products }
    }
    return { ...state }
}