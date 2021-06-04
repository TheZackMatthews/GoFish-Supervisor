import React, { useEffect, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../redux/actions/photoActions';

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!photos || !photos.length)
    dispatch(getPhotos());
  }, []);

  const tempPhotos = photos.map((photo) => {
    const image = new Image();
    image.src = photo.src;
    const { height, width } = image;
    const ratio = height / width;
    return {
      ...photo,
      width: 1,
      height: ratio,
    };
  });
  console.log(tempPhotos);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log(photo);
    setCurrentImage(index);
    setViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerOpen(false);
  };

  // const photos = [
  //   {
  //     src: 'https://media.fisheries.noaa.gov/styles/full_width/s3/dam-migration/750x500-coho-salmon.jpg?null&itok=lan8JjNI',
  //     width: 1.7,
  //     height: 1,
  //   },
  //   {
  //     src: 'http://www.northwestfishingreports.com/Content/Files/ArticlePhotos/132093_IMG_1553.JPG',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'https://images.thefishsite.com/fish/articles/pink-salmon.jpg?profile=article-full@desktop',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'https://www.moldychum.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-09-at-8.41.39-PM-1024x616.png',
  //     width: 4,
  //     height: 3,
  //   },
  // ];

  return (photos && photos.length && (
    <div style={{ width: '80vw' }}>
      <Gallery
        photos={tempPhotos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((img) => ({
                ...img,
                srcset: img.srcSet,
                caption: img.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  ));
};

export default Photos;
