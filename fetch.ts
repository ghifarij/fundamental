const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw "failed to fetch";

    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
