import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const useStyles = {
    root: {
        margin: '55px 11.5px 77px',
        maxWidth: 282,
        width: 282,
        position: 'relative'
    },
    new: {
        color: '#FFFFFF',
        transform: 'translate(10px, 20px) rotate(45deg)',
        background: '#E4A11E',
        zIndex: 2,
        padding: '5px 20px',
        position: 'absolute',
        right: -14,
        top: -24
    },
    imgProduct: {
        width: 280,
        height: 280
    },
    img: {
        width: '100%',
        objectFit: 'cover',
    },


};


export default function ImgMediaCard() {
    const [state, setState] = useState({
        products: [
            {
                "name": "Стілець обідній Юля горіх темний/сірий",
                "price": '1000₴',
                "img_url": "https://wowin.ua/image/cache/catalog/easyphoto/392/Ralf%20Lucky2-702x467h.jpg",
                "id": "00110010",
                "category": "tires",

            },
            {
                "name": "Ліжко-диван прямий Меблі Прогрес Кельн темно-сірий темно-сірий 1520x920x890 мм",
                "decription": "бла-бла-бла-бла",
                "price": '12 246₴',
                "img_url": "https://cdn.27.ua/190/08/0b/6555659_2.jpeg",
                "id": "11001441",
                "category": "tires",

            },
            {
                "name": "Тумба мобільна Грейд Ален 402х670х450 мм дуб крафт золотий / графіт",
                "decription": "бла-бла-бла-бла",
                "price": '1834₴',
                "img_url": "https://cdn.27.ua/190/58/ff/6838527_1.jpeg",
                "id": "110011",
                "category": "tires",

            },
            {
                "name": "Обідній стіл у стилі лофт Серія 1 1200х600 мм",
                "decription": "бла-бла-бла-бла ",
                "price": '2834₴',
                "img_url": "https://cdn.27.ua/sc--media--prod/default/7d/c1/5e/7dc15ec8-c29c-4cee-99d8-839205d3b4c4.jpg",
                "id": "0001111",
                "category": "tires",
                "newProduct": true
            }
        ]
    })
    const product = state.products.map(({name, img_url, price, newProduct}) => {
        return (

            <Card style={useStyles.root}>
                {newProduct ? <p style={useStyles.new}> Новинка</p> : ''}
                <CardActionArea>
                    <div style={useStyles.imgProduct}>
                        {/*<img src={img_url} alt="#" style={useStyles.img}/>*/}
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            max-height="150"
                            style={useStyles.img}
                            image={img_url}
                            title="Contemplative Reptile"
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5" style={{fontSize: 15}}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            ціна: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        )
    })
    return (
        <div>

            <div style={{display: "flex", justifyContent: 'center'}}>

                {product}
            </div>
        </div>

    );
}
