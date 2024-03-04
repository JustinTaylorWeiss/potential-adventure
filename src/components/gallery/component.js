import "./gallery.css";
import ImageGallery from "react-image-gallery";
import { Component } from "react";
import board1 from "../assets/board1.jpg";
import board2 from "../assets/board2.jpg";
import slab1 from "../assets/slab1.jpg";
import { useMediaQuery } from 'react-responsive'

const images = [
    {
        original: board1,
        originalClass: "imgContainer",
        bulletClass: "myBullet",
    },
    {
        original: board2,
        originalClass: "imgContainer",
        bulletClass: "myBullet",
    },
    {
        original: slab1,
        originalClass: "imgContainer",
        bulletClass: "myBullet",
    }
];

class MyGallery extends Component {
    render() {
        return <ImageGallery 
            showThumbnails={false} 
            disableSwipe={false} 
            showFullscreenButton={false} 
            showNav={false} 
            slideDuration={800} 
            slideInterval={5000} 
            autoPlay={true} 
            showBullets={true} 
            showPlayButton={false} 
            disableKeyDown={true} 
            items={images}/>
    };
};

class MyBulletlessGallery extends Component {
    render() {
        return <ImageGallery 
            showThumbnails={false} 
            disableSwipe={false} 
            showFullscreenButton={false} 
            showNav={false} 
            slideDuration={800} 
            slideInterval={8000} 
            autoPlay={true} 
            showBullets={false} 
            showPlayButton={false} 
            disableKeyDown={true} 
            items={images}/>
    };
};

export const GalleryWrapper = () => <>
    {
        useMediaQuery({ query:'(max-width: 550px)'}) 
            ? <MyBulletlessGallery/>
            : <MyGallery/> 
    }
</>