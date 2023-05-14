class MyExt {
  getInfo() {
    return {
      id: 'cdypredux1',
		name: '拒绝填参',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello, world!'
        },
        {
                    opcode: 'bool_true',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'true',
                }, 
	 {
	                opcode: 'bool_false',
                    blockType:Scratch.BlockType.BOOLEAN,
	                text: 'false'
	            }
      ]
    };
  }
  hello() {
    return '';
  },
bool_true(){
    return true;
},
bool_false(){
    return false;
}
Scratch.extensions.register(new MyExt()); 