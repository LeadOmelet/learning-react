const auxiliary = (props) => props.children;
/*
Aux.js doesn't work on Windows machines. <<< Important Note.
HOCs or Higher Order Components allow for wrapping of adjacent elements.
IE:
<Aux>
  <li>List Item without Key.</li>
  <li>Another List Item without Key being needed.</li>
</Aux>
*/

export default auxiliary;
