import React, { useEffect, useState } from 'react';

interface PhotoGalleryProps {
  folderName: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ folderName }) => {
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/getImages?folder=${folderName}`);
        if (response.ok) {
          const files = await response.json();
          setPhotoNames(files);
        } else {
          setError('Failed to fetch images');
        }
      } catch (error) {
        setError('Error fetching images');
      }
    }
  
    fetchImages();
  }, [folderName]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="photo-gallery">
      <style jsx>{`
        .photo-gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .photo-gallery img {
          width: calc(33.33% - 10px); /* Adjust width to fit three images in a row with some padding */
          margin-bottom: 15px; /* Adjust margin between images */
        }
      `}</style>
      {photoNames.map((fileName, index) => (
        <img
          key={index}
          src={`/${folderName}/${fileName}`} // Adjust the path as needed
          alt={fileName}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
