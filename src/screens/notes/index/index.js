import React, { Fragment, useState } from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from '../../../components/notes';

const NotesScreen = () => {
  const [isOPen, setIsOpen] = useState(false);
  return(
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen}/>
      <Notes setIsOpen={setIsOpen} isOpen={isOPen}/> 
    </Fragment>
  )
};

export default NotesScreen;