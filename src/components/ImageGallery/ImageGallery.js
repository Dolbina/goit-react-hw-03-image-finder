import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGallaryWrap } from "./ImageGallery.styled";

export const ImageGallery = ({ pictures }) => {
    console.log(pictures);
    return (
      <ImageGallaryWrap>
        {pictures.hits.map(picture => (
          <li key={picture.id}>
            <ImageGalleryItem picture={picture} />
          </li>
        ))}
      </ImageGallaryWrap>
    );
};
    
