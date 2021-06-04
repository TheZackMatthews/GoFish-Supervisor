import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerOpen(false);
  };

  const photos = [
    {
      src: 'https://media.fisheries.noaa.gov/styles/full_width/s3/dam-migration/750x500-coho-salmon.jpg?null&itok=lan8JjNI',
      width: 4,
      height: 3,
    },
    {
      src: 'http://www.northwestfishingreports.com/Content/Files/ArticlePhotos/132093_IMG_1553.JPG',
      width: 4,
      height: 3,
    },
    {
      src: 'https://images.thefishsite.com/fish/articles/pink-salmon.jpg?profile=article-full@desktop',
      width: 4,
      height: 3,
    },
    {
      src: 'https://www.moldychum.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-09-at-8.41.39-PM-1024x616.png',
      width: 4,
      height: 3,
    },
  ];

  return (
    <div style={{ width: '80vw' }}>
      <Gallery
        photos={photos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(img => ({
                ...img,
                srcset: img.srcSet,
                caption: img.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Photos;
