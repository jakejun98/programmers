function solution(strings, n) {
  strings.sort((a, b) => {
    const charA = a[n];
    const charB = b[n];

    if (charA < charB) {
      return -1;
    } else if (charA > charB) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });

  return strings;
}