function replaceTag(id){
    var that = document.getElementById(id);

    var p = document.createElement('h1');
    p.setAttribute('id',that.getAttribute('id'));

  // move all elements in the other container.
  while(that.firstChild) {
      p.appendChild(that.firstChild);
  }
  that.parentNode.replaceChild(p,that);

}