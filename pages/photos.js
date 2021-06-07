import React, { useEffect, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useSelector, useDispatch } from 'react-redux';
import {
  InputLabel, MenuItem, FormControl, Select,
} from '@material-ui/core/';
import { getPhotos } from '../redux/actions/photoActions';

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [photoList, setPhotoList] = useState(null);
  const [fullPhotoList, setFullPhotoList] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!photos || !photos.length) dispatch(getPhotos());
  }, []);
  console.log(photos);
  useEffect(() => {
    let tempPhotos;
    if (photos && photos.length) {
      tempPhotos = photos.map((photo) => {
        const image = new Image();
        image.src = photo.src;
        const { height, width } = image;
        const ratio = height / width;
        return {
          ...photo,
          width: 1,
          height: ratio,
          caption: photo.comment,
        };
      });
    }
    setPhotoList(tempPhotos);
    setFullPhotoList(tempPhotos);
  }, [photos]);

  useEffect(() => {
    let tempPhotos;
    if (category === '') {
      setPhotoList(fullPhotoList);
    } else {
      tempPhotos = fullPhotoList.filter((photo) => photo.reason_for_submission === category);
      setPhotoList(tempPhotos);
    }
  }, [category]);

  // eslint-disable-next-line no-unused-vars
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerOpen(false);
  };

  console.log(category);
  return (
    <div>
      <h3>Specimen Photos</h3>
      <div id="filters">
        <FormControl style={{ margin: 10, minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">All photos</MenuItem>
            <MenuItem value="help identifying">Need help identifying</MenuItem>
            <MenuItem value="outreach">Outreach</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </div>

      {photoList && photoList.length !== 0 ? (
        <div style={{ width: '80vw' }}>
          <Gallery
            photos={photoList}
            onClick={openLightbox}
          />
          <ModalGateway>
            {viewerOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoList.map((img) => ({
                    ...img,
                    srcset: img.srcSet,
                    caption: img.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : (<div />)}

    </div>
  );
};

export default Photos;
