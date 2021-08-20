const app = require("./server");

const port = process.env.PORT || 2096;

app.listen(port, () => console.log(`Express departed from port ${port}`))