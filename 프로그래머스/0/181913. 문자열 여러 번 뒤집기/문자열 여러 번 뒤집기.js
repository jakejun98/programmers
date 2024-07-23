function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const reversed = [...my_string]
      .slice(start, end + 1)
      .reverse()
      .join("");
    my_string = my_string.slice(0, start) + reversed + my_string.slice(end + 1);
  }
  return my_string;
}
