import React from 'react';

const wrapHoc = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

/*
{...props} allows us to pass props onto WrappedComponent.

Example via App.js:
import wrapHoc from '../hoc/wrapHoc';
---...---
export default wrapHoc(App, styleClasses.App);
*/

export default wrapHoc;
