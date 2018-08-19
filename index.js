exports.resRulesServer = (server) => {
  server.on('request', (req, res) => {
    const { ruleValue } = req.originalReq;
    let keyName = 'whistle.inspect/vConsole.js';
    if (ruleValue.toLowerCase().indexOf('e') === 0) {
      keyName = 'whistle.inspect/eruda.js';
    }
    /**
     * 也可以用下面这种方式直接输出rules和values
     * 本插件的values是固定的，所以都放在了项目的_values.txt文件
     * res.end({
     *  rules: '',
     *  values: {
     *    [keyName]: 'xxxxx',
     *  },
     * });
     */
    res.end(`/./ jsAppend://{${keyName}}`);
  });
};
