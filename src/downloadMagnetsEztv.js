function getAllElementsWithMagnetClass(){
    return document.getElementsByClassName('magnet');    
}

function getAllHrefsFromElements(elements){
    var result = [];
    for(var i=0; i<elements.length; i++){
        result.push(elements[i].href);
    }
    return result;
}

function getAllLinksWithContainsKeyWords(args){
    var elementshtml = getAllElementsWithMagnetClass();
    var hrefs = getAllHrefsFromElements(elementshtml);
    var patterns = createRegexToSearchWithArgs(args);
    
    var result = [];
    hrefs.forEach(element => {
        if (elementMatchesAllPatterns(element, patterns)){            
            result.push(element);
        }
    });
    return result;
}
function createRegexToSearchWithArgs(args) {
    var patternsToSearchFor = [];
    if (args) { //work on this!!
        args.forEach(element => {
            var regex = new RegExp("\\b" + args + "\\b");
            patternsToSearchFor.push(regex);
        });
    } else {
        patternsToSearchFor.push(new RegExp("\\b720\\b"));
    }

    return patternsToSearchFor;
}

function elementMatchesAllPatterns(element, patterns) {
    for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index]; 
        if (pattern.test(element)) {
            continue;
        } else {
            return false;
        }        
    }
    return true;
}