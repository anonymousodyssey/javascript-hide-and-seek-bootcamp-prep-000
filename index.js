function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
  return list
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll('div')
  var gotEm = []
  for (let i =0; i < list.length; i++) {
      gotEm = list[i].querySelector('div');
  }
  return gotEm
}
