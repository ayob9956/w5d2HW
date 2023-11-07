function changeWords(searchWord, newWord) {
    var bodyTextNodes = document.querySelectorAll('body *');
  
    bodyTextNodes.forEach(function(node) {
      if(node.nodeType === 3 && node.textContent.includes(searchWord)){
        node.textContent = node.textContent.replace(new RegExp(searchWord, 'gi'), newWord);
      } else if(node.nodeType === 1){
        var childNodes = node.childNodes;
        for(var i = 0; i < childNodes.length; i++){
          var child = childNodes[i];
          if(child.nodeType === 3){
            child.textContent = child.textContent.replace(new RegExp(searchWord, 'gi'), newWord);
          }
        }
      }
    });
  }
  