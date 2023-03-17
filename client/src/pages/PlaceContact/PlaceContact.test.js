import { render, screen } from '@testing-library/react';
import React from 'react';
import PlaceContact from './PlaceContact';

test('test the corect content', ()=> {
     render(<PlaceContact/>);
   
     expect(screen.getByText(/สถานที่ติดต่อ/i)).toBeInTheDocument();
   });
