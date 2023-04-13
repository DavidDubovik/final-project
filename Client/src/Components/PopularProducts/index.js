import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStyles from "./style";


export default function ImgMediaCard() {
    const [state, setState] = useState({
        products: [
            {
                "name": "Стілець обідній Юля горіх темний/сірий",
                "price": '1000',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/326/P1/monolith_61-702x467.jpg",
                "id": "00110010",
                "category": "tires",

            },
            {
                "name": "Ліжко-диван прямий Меблі Прогрес Кельн темно-сірий темно-сірий 1520x920x890 мм",
                "decription": "бла-бла-бла-бла",
                "price": '12 246',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/492/P2/alabama_light_grey-702x467.jpg",
                "id": "11001441",
                "category": "tires",

            },
            {
                "name": "Лейзі лежанка для тварин",
                "decription": "бла-бла-бла-бла",
                "price": '1834',
                'newPrice': '1000',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/212/P2/california_flamingo-702x467.jpg",
                "id": "110011",
                "category": "tires",
                'discount': true

            },
            {
                "name": "Обідній стіл у стилі лофт Серія 1 1200х600 мм",
                "decription": "бла-бла-бла-бла ",
                "price": '2834',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/334/_MG_0983-702x467h.jpg",
                "id": "0001111",
                "category": "tires",
                "newProduct": true
            }
        ]
    })
    const product = state.products.map(({name, img_url, price, newProduct, discount, newPrice}) => {
        return (

            <Card style={useStyles.root}>
                {discount ? <p style={useStyles.discount}>Знижка</p> : ''}
                {newProduct ? <p style={useStyles.new}> Новинка</p> : ''}
                <CardActionArea style={{height: '100%'}}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        max-height="150"
                        image={img_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5" style={useStyles.nameProduct}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={useStyles.price}>
                            {discount ? <div style={{bottom: 3,position: 'absolute', display: "flex",alignItems:"center"}}>
                                    <p style={{margin: 0}}> {newPrice} <span
                                        style={{fontSize: 18}}>грн</span></p>
                                    <p style={{margin: '0 0 0 13px', color:'#A0A9AF',textDecoration: "line-through", fontSize:22 }}> {price} <span
                                        style={{fontSize: 18}}>грн</span></p>

                                </div>

                                : <p style={{margin: 0, position: 'absolute', bottom: 3}}> {price} <span
                                    style={{fontSize: 18}}>грн</span></p>}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        )
    })
    return (
        <div>
            <div style={{
                display: "grid",
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fill, 300px)',
                maxWidth: 1499,
                margin: '0 auto'
            }}>
                {product}
            </div>
        </div>

    );
}
