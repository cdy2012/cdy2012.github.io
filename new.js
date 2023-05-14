class MyExt {
  getInfo() {
    return {
      id: 'hello',
		name: 'Hello world!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello, world!'
        }
      ]
    };
  }
  hello() {
    return 'Hello, world!';
  }
}
Scratch.extensions.register(new MyExt()); 作者：MA_master https://www.bilibili.com/read/cv21614823?spm_id_from=333.999.0.0 出处：bilibili
