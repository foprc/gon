const f2e = {
  local: '127.0.0.1:8000',
  pro: '119.29.43.29:80',
  pre: '119.29.28.15:80',
  dev: '192.168.101.34:80',
  dev1: '192.168.101.31:80',
  dev2: '192.168.101.54:80',
  dev3: '192.168.101.63:80',
}

const api = {
  pro: '203.195.146.180',
  pre: '10.3.10.101',
  dev: '10.3.10.100',
}

module.exports = {
  f2e,
  api,
  hostF2e: f2e.local,
  hostApi: api.pro,
  reactMin: '0', // '0' 为压缩版，'1' 为开发版
}
