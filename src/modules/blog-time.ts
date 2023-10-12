function BlogTime(blog: string) {
  const blogMs = new Date(blog).getTime();
  const nowMs = new Date().getTime();

  const timeDiff = Math.floor((nowMs - blogMs) / 1000);

  if (timeDiff / 60 / 60 / 12 / 365 >= 1) {
    return `${Math.floor(timeDiff / 60 / 60 / 12 / 365)}년 전`;
  } else if (timeDiff / 60 / 60 / 12 >= 1) {
    return `${Math.floor(timeDiff / 60 / 60 / 12)}일 전`;
  } else if (timeDiff / 60 / 60 >= 1) {
    return `${Math.floor(timeDiff / 60 / 60)}시간 전`;
  } else if (timeDiff / 60 >= 1) {
    return `${Math.floor(timeDiff / 60)}분 전`;
  } else if (timeDiff >= 1) {
    return `${Math.floor(timeDiff)}초 전`;
  }
}

export default BlogTime;
