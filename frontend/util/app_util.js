const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} YEARS AGO`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} MONTHS AGO`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} DAYS AGO`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} HOURS AGO`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} MINUTES AGO`;
  }
  return 'MOMENTS AGO';
};

export default timeSince;
