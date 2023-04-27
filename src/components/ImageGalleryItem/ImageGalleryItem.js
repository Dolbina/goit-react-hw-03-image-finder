export const ImageGalleryItem = ({ picture: hits }) => {
    const { webformatURL, tags } = hits;
   
    return (
      <div>
        <img src={webformatURL} alt={tags}/>
      </div>
    );
};