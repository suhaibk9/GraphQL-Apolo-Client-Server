const fetchGreeting = async () => {
  const url = 'http://localhost:8080';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
          greeting
        }`,
    }),
  });
  const { data } = await response.json();
  const { greeting } = data;
  return greeting;
};
fetchGreeting().then((greeting) => {
  const tag = document.getElementById('data');
  tag.innerHTML = greeting;
});
