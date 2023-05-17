import React, { useMemo, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from "./style";
import styles from './index.module.css';
import { useSelector, useDispatch } from "react-redux";

export function ImgMediaCard() {
    const products = useSelector(state => {
        return state.products.product
    })
    const dispatch = useDispatch()


    const product = useMemo(() => products ? products.map(({ name, imageUrls, currentPrice, newProduct, discount, newPrice }) => {
        return (
            <Card classes={{ root: styles.rootCard }} >
                {discount ? <p style={useStyles.discount}>Знижка</p> : ''}

                <Card style={useStyles.root}>


                    {newProduct ? <p style={useStyles.new}> Новинка</p> : ''}
                    <CardActionArea style={{ height: '100%' }}>
                        <div style={{ height: 200, width: 200, margin: ' 0 auto' }} >
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                
                                image={imageUrls[0]}
                                title="Contemplative Reptile"
                                style={{ height: 200, width: 200, objectFit: 'contain' }}
                            />
                        </div>
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
                                        }}> {currentPrice} <span
                                            style={{ fontSize: 18 }}>грн</span></p>

                                    </div>

                                    : <p style={{ margin: 0, position: 'absolute', bottom: 3 }}> {currentPrice} <span
                                        style={{ fontSize: 18 }}>грн</span></p>}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Card >

        )
    }, [products]) : '')
    return (
        <div style={{ margin: '50px 4px 80px' }}>  {/* overflow: "hidden", , height: 400  */}
            <h1 style={useStyles.p}>Популярні товари</h1>
            <div className="card-box" style={{
                display: "grid",
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fill, 300px)',
                maxWidth: 1499,
                margin: '0 auto',
                // overflowX: 'scroll',
            }}>
                {product}
            </div>
        </div>

    );
}