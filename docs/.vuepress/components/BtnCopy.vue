<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    class="content-copy">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
</template>


<style lang="styl" scoped>
  svg 
    color: inherit
    height: 1em
    width: 1em
    font-size: 24px
    border: none
    outline: none
    user-select: none
    vertical-align: text-bottom
    cursor: pointer
    fill: alpha($badgeTipColor, 0.5)
  
    &:hover
      fill: $badgeTipColor;
    &:active
      fill: alpha($badgeTipColor, 0.5);

</style>