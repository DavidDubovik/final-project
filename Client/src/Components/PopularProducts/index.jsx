<<<<<<< HEAD
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
=======
import React, { useMemo, useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from "./style";
import styles from './index.module.css';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import { fetchAsyncAllProducts } from "../../Redux/products.reducer";

export function ImgMediaCard() {
    const [products, setProducts] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncAllProducts()).then(res => res.payload).then((data) => { setProducts(data) })
    }, [dispatch])

    const product = useMemo(() => products ? products.map(({ name, imageUrls, currentPrice, newProduct, discount, newPrice, itemNo }, index) => {
        if (index <= 3) {
            return (
                <Card classes={{ root: styles.rootCard }} key={uuidv4()} >
                    {discount ? <p style={useStyles.discount}>Знижка</p> : ''}
                    <Link to={"products/" + itemNo}>

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
                    </Link>
                </Card >

            )
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb

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
<<<<<<< HEAD
        <div style={{ marginTop: 50, marginBottom: 80 }}>
            <h1 style={useStyles.p}>Популярні товари</h1>
            <div style={{
=======
        <div style={{ margin: '40px 0px 40px' }}>  {/* overflow: "hidden", , height: 400  */}
            <h1 style={useStyles.p} >Популярні товари</h1>
            <div className="card-box" style={{
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
                display: "grid",
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fill, 300px)',
                maxWidth: 1499,
<<<<<<< HEAD
                margin: '0 auto'
=======
                margin: 'auto',

                // overflowX: 'scroll',
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
            }}>
                {product}
            </div>
        </div>

    );
}