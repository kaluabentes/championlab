function extractDataList(data) {
  return Object.keys(data).map((key) => data[key]);
}

export default extractDataList;
