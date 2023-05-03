import React, { useMemo, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from "./style";
import styles from './index.module.css';
import { useSelector, useDispatch } from "react-redux";

export function ImgMediaCard() {
    const products = useSelector(state => { // получает clicked із store
        return state.products.products
    })
    const dispatch = useDispatch()
 

    const product = useMemo(() => products.map(({ name, img_url, price, newProduct, discount, newPrice }) => {
        return (
            <Card classes={{ root: styles.rootCard }} >
                {discount ? <p style={useStyles.discount}>Знижка</p> : ''}

                <Card style={useStyles.root}>


                    {newProduct ? <p style={useStyles.new}> Новинка</p> : ''}
                    <CardActionArea style={{ height: '100%' }}>
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
                                {discount ?
                                    <div style={{ bottom: 3, position: 'absolute', display: "flex", alignItems: "center" }}>
                                        <p style={{ margin: 0 }}> {newPrice} <span
                                            style={{ fontSize: 18 }}>грн</span></p>
                                        <p style={{
                                            margin: '0 0 0 13px',
                                            color: '#A0A9AF',
                                            textDecoration: "line-through",
                                            fontSize: 22
                                        }}> {price} <span
                                            style={{ fontSize: 18 }}>грн</span></p>

                                    </div>

                                    : <p style={{ margin: 0, position: 'absolute', bottom: 3 }}> {price} <span
                                        style={{ fontSize: 18 }}>грн</span></p>}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Card>

        )
    }, [products]))
    return (
        <div style={{ marginTop: 50, marginBottom: 80 }}>
            <h1 style={useStyles.p}>Популярні товари</h1>
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