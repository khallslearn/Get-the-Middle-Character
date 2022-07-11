function getMiddle(s)
{
   var h = s.length / 2;
  h = Math.round(h);
  if(s.length % 2 === 0){
    return s.slice(h - 1, h + 1);
  }else{
    return s.slice(h - 1, h);
  }
}