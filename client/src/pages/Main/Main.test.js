import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';

test('test the corect content', ()=> {
     render(<Main />);
   
     expect(screen.getByText(/ศูนย์ประสานงานการแข่งขัน NSC ระดับภาคใต้/i)).toBeInTheDocument();
   });