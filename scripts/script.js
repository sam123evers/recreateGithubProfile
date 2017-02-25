var profile = 'https://api.github.com/users/sam123evers'

var repo = 'https://api.github.com/users/sam123evers/repos'

//console.log($)

var profilePromise = $.getJSON(profile)

var repoPromise = $.getJSON(repo)

var makeProfileHTML = function(singleObject) {
	var getProfileHTML = ''
	getProfileHTML += '<div class="profileDiv">'
	getProfileHTML += '<img class ="profilePic" src='+ singleObject.avatar_url + '/>'
	getProfileHTML += '<p class="name">' + singleObject.name + '</p>'
	getProfileHTML += '<p class="login">' + singleObject.login + '</p>'
	getProfileHTML += '<p class="bio">' + singleObject.bio + '</p>'
	getProfileHTML += '<ul class="about">' + '<li>' + singleObject.company + '</li>' + '<li>' + singleObject.location + '</li>'
	getProfileHTML += '<li>' + singleObject.email + '</li>' + '<li>' + singleObject.blog + '</li>'
	getProfileHTML += '</div>'
	
	return getProfileHTML
}

var makeRepoHTML = function(repObject) {
	getRepoHTML = ''
	getRepoHTML += '<div class="singleRepo">'
	getRepoHTML += '<h2 class="repoName">' + repObject.name + '</h2>'
	getRepoHTML += '<p class="language">' + repObject.language + '</p>'
	getRepoHTML += '<p class="createdAt">' + repObject.created_at + '</p>'
	getRepoHTML += '</div>'
// console.log(repObject.name)
// console.log(repObject.language)
// console.log(repObject.created_at)
	return getRepoHTML
}







function handleProfileResponse(dataObj){
 	var finalProfileHTML = ''
 	var containerNode = document.querySelector('.profileContainer')
 	var profileDataArray = dataObj//<------def working up till this point
 	//console.log(profileDataArray)//<-----this works
 	//console.log(dataObj)<----------------this works
 	//console.log(dataObj.avatar_url)//<---this is working too
 	//for(var i = 0; i < profileDataArray.length; i++) {
 		finalProfileHTML += makeProfileHTML(dataObj)
 		//console.log(profileDataArray[i])//<--this doesnt do anything
 	
 	containerNode.innerHTML = finalProfileHTML
}

function handleRepoResponse(dataArray){
  	var finalRepoHTML = ''
  	var containerNode = document.querySelector('.repoContainer')
  	var repoDataArray = dataArray
  	//console.log(repoDataArray)
  	for (var i =0; i < repoDataArray.length; i++) {
  		finalRepoHTML += makeRepoHTML(repoDataArray[i])
  	}
  	containerNode.innerHTML = finalRepoHTML
}

profilePromise.then(handleProfileResponse)

 repoPromise.then(handleRepoResponse)

