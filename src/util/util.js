// 工具类方法

export function mkRow(v = 0, length = 10) {
  return Array.from({ length }).fill(v);
}

export function mkMatrix(v = 0, length) {
  return mkRow([], length.row).map(() => (
    mkRow(v, length.col)
  ));
}
