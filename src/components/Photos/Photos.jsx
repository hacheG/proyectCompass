import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";
import "./Photos.css"

function Photos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photos, setPhotos] = useState({});

    const getLocations = async () => {
        let res = await axios.get('http://localhost:5000/api/location');

        let locations = res.data.locations;
        locations.forEach(location => {
            location.src = location.image;
            location.width = 1;
            location.height = 1;
        });
        setPhotos( locations);
    };

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    getLocations();
    return (
        <div className="Photos">
            { !Array.isArray(photos) || !photos.length ?(
                <div><h1>Loading ... </h1></div>):(
                    <div>
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>

            )}


        </div>
    );
}

export default Photos;
