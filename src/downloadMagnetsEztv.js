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
    hrefs.forEach(function(element) {
        if (elementMatchesAllPatterns(element, patterns)){            
            result.push(element);
        }
    });
    return result.join("\n");
}
function createRegexToSearchWithArgs(args) {
    var patternsToSearchFor = [];
    if (args) { //work on this!!
        args.forEach(function(element) {
            var regex = new RegExp("\\b" + args + "\\b");
            patternsToSearchFor.push(regex);
        });
    } else {
        patternsToSearchFor.push(new RegExp("\\b720p\\b"));
    }

    return patternsToSearchFor;
}

function elementMatchesAllPatterns(element, patterns) {
    for (var index = 0; index < patterns.length; index++) {
        var pattern = patterns[index]; 
        if (pattern.test(element)) {
            continue;
        } else {
            return false;
        }        
    }
    return true;
}