import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ pictures }) => {
    console.log(pictures);
    return (
        <ul>
        {pictures.hits.map(picture => (
            <li key={picture.id}>
                <ImageGalleryItem picture={picture} />
            </li>
        ))}
    </ul>);
};
    
