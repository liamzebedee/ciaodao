import resolve from 'did-resolver';

export const timeSince = (date) => {
  if (!date) return '';

  const d = new Date(date);
  const dateFormat = d && `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

  const seconds = Math.floor(((new Date().getTime() / 1000) - date / 1000));

  let interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return dateFormat;
  }

  const hh = d.getHours();
  let h = hh;
  let m = d.getMinutes();
  let dd = 'AM';
  m = m < 10 ? `0${m}` : m;

  if (h >= 12) {
    h = hh - 12;
    dd = 'PM';
  }
  if (h == 0) {
    h = 12;
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${h}:${m}${dd}`;
  if (interval === 1) return `${h}:${m}${dd}`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${h}:${m}${dd}`;
  if (interval === 1) return `${h}:${m}${dd}`;

  return `${h}:${m}${dd}`;
};

export const getAddrFromDid = async (did) => {
  const doc = await resolve(did);
  return doc.publicKey[2].ethereumAddress;
}