function getImageElementsWithSrcSet(images){var result=[];for(let i=0;i<images.length;i++){var current=images[i];if(current.srcset&&current.srcset!==""){if(current.srcset.indexOf('1080w')!==-1){result.push(current.srcset)}}}
return result}
function getImageUrl(references){var imageList=[];var list=references.split(",");for(let i=0;i<list.length;i++){var current=list[i].split(" ");if(current&&current.length===2){imageList[current[1]]=current[0]}}
return imageList["1080w"]}
function getListOf1080Images(list){var result=[];for(let i=0;i<list.length;i++){var imageinhires=getImageUrl(list[i]);if(imageinhires){result.push(imageinhires)}}
return result}
function openInNewTab(url){var win=window.open(url,'_blank');win.focus()}
function addLinkToImageInPage(url,pos){var elemDiv=document.createElement('div');var id=`ig-hires-img-${pos}`;elemDiv.id=id;elemDiv.id=id;elemDiv.attributes.id=id;elemDiv.onclick=openInNewTab(url);elemDiv.innerHTML=`Download image`;elemDiv.style.cssText='height:50px';document.getElementsByTagName('article')[1].append(elemDiv)}
function addLinksToPage(imageLinks){for(let i=0;i<imageLinks.length;i++){var current=imageLinks[i];addLinkToImageInPage(current,i)}}
function OpenHiResImageInOtherTab(){var images=document.getElementsByTagName('img');var result=getImageElementsWithSrcSet(images);var link=getListOf1080Images(result);addLinksToPage(link)}