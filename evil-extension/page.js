const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  //console.log(node.textContent);
  //console.log(node.nodeType);
    if(node.nodeType == Node.TEXT_NODE){
      		let words = node.textContent.split(' ');
        		for(let i=0;i<words.length;i++){
        			words[i] = words[i].replace('\n','')
        			words[i] = words[i].trim()
        			if(MATCH_LIST[words[i]]!== undefined){
                  //console.log(words[i]);
                  words[i] = MATCH_LIST[words[i]];
                  //console.log(MATCH_LIST[words[i]]);
                  //console.log('change');
              }
      		    node.textContent = words.join(' ');
    	     }
    }
    for(child of node.childNodes){
        transformTextNodes(child);
    }
}
transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
