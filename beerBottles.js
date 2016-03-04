function nintyNineBottlesOfBeer(n){

  // when there are no bottles left
  if (n <= 0){
     console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
     return false;
  }

  // when there is one bottle left
  if(n === 1){
     console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n");
     nintyNineBottlesOfBeer(n-1);

  }
  // every other bottle left

  else{
    console.log(n + " bottles of beer on the wall, "
    + n + " bottles of beer.\nTake one down and pass it around, "
    +(n-1)+ " bottles of beer on the wall.\n");

    nintyNineBottlesOfBeer(n-1);
  }
  
  return false;

}

console.log(nintyNineBottlesOfBeer(99));
