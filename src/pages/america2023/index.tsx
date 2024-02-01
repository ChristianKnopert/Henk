import React from 'react';
import PhotoGallery from '../PhotoGallery'; // Adjust the import path as needed
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function America2023() {
  return (
    <>
      <div className='container'>
        <Card>
          <CardHeader>
            <CardTitle>Aerial photography of Henk Knopert</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Photos displayed on this page were taken on (datum) in the USA.</p>
          </CardContent>
        </Card>
        <div className='container'></div>
        <div className='image-container'>
        <PhotoGallery folderName={'content_america2023'} key={2} />
        </div>
      </div>
    </>
  );
}
