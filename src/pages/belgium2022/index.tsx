import React from 'react';
import PhotoGallery from '../PhotoGallery'; // Adjust the import path as needed
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Belgium2022() {
  return (
    <>
      <div className='container'>
        <Card>
          <CardHeader>
            <CardTitle>Aerial photography of Henk Knopert</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Photos displayed on this page were taken on (datum) in Belgium.</p>
          </CardContent>
        </Card>
        <div className='container'></div>
        <div className='image-container'>
        <PhotoGallery folderName={'content_belgium2022'} key={3} />
        </div>
      </div>
    </>
  );
}
