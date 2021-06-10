
const express = require('express');
const app = express();
const port = 3003;
const mainMenu = [
    { id: 1, name: "all" },
    { id: 2, name: "summer" },
    { id: 3, name: "winter" },
]

app.set('view engine', 'pug');
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('index', { mainMenu: mainMenu });
});

app.get("/mainMenu/:id", (req, res) => {
    const selectedId = req.params.id;
    let selectedMainMenuArray = mainMenu.filter(menuElement => {
        return menuElement.id === +selectedId;
    });
    selectedMenuElement = selectedMainMenuArray[0];
    res.render("menuElement", { menuElement: selectedMenuElement });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


