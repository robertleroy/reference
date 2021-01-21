# [Reference](https://robertleroy.github.io/reference/)

> *Boilerplate & snippets*

.dynamic-textbox {
  position: relative;
  display: inline-grid;
  align-items: center;
  padding: 0.25em 0.5em; 
  border-radius: 0.25rem;   
  box-shadow: 0px 0px 0px 1px inset $muted-5;
   
  &::after,
  [type="text"],
  textarea {
    width: auto;
    min-width: 3rem;
    grid-area: 1 / 1;
    font: inherit;
    padding: 0;
    
    overflow: hidden;  
    -webkit-appearance: none;
    appearance: none;
        
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
    }  
    &:focus {
      box-shadow: none;
    }  
  }  

