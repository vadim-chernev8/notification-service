// Author: Abhishek Dutta, 12 June 2020
// License: CC0 (https://creativecommons.org/choose/zero/)
export const uuid = () => {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  uuid = uuid.substring(uuid.lastIndexOf("/") + 1); // remove prefix (e.g. blob:www.test.com/, ...)
  uuid = uuid.substring(uuid.lastIndexOf(":") + 1); // remove further prefixes (e.g. blob: ...)
  return uuid;
};
