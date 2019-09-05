  var names = ["Lars", "Ib", "Kim", "Destroyer of Worlds", "Bo"];


  const shortNames = names.filter(name => name.length <= 3);
  
  names.forEach(function(element)
  {
      console.log(element);
  })
  
  shortNames.forEach(function(element)
  {
      console.log(element);
  })
  
  const mapOfDoom = names.map(a => a.toUpperCase());
  console.log(mapOfDoom);
  
  function htmlString(array)
  {
      const arrayMap = array.map(a=> "<li>" + a+ "</li>")
      return "<ul>" + arrayMap.join('') + "<ul>"
  }
  console.log(htmlString(names))