function getItem(id) {
  let localData = JSON.parse(localStorage.getItem("data"))

  let userData = localData.find(function(element) {
      return element.id === id
  })
  return userData
}

function displayItem () {
  const searchId = parseInt(new URLSearchParams(window.location.search).get('id'));
  console.log("searchId: ", searchId)
  let item = getItem(searchId)
  
  document.querySelector(".carddisplay-title").textContent = item.title
  document.querySelector(".carddisplay-id").textContent = item.id
  document.querySelector(".carddisplay-body").textContent = item.body

}


displayItem()
