import { ImgWrap,Img } from "./ImageGalleryItem.styled";
export const ImageGalleryItem = ({ picture: hits }) => {
    const { webformatURL, tags } = hits;
   
    return (
      <ImgWrap>
        <Img src={webformatURL} alt={tags}/>
      </ImgWrap>
    );
};