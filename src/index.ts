import express from 'express';

const app = express();
interface User {
    name: string; 
    age: number;
}
const a: User["name"]= 'a';

app.get('/', (req, res) => res.send('Hello World!'+ a));
app.listen(3000, () => console.log('Server running on port 3000'))
