const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

const data = JSON.parse(jsonString);
const list = data.list;

for (let user of list) {
  const result = {
    name: user.name,
    age: user.age,
    prof: user.prof
  };
  console.log(result);
}
