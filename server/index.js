const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

let rests = [
    {
        title: 'Genac Vale',
        id: 1,
        image: 'https://genacvale.am/wp-content/uploads/2021/02/hasce5.jpg',
        rate: 2.5,
        position: { lat: 40.177463, lng: 44.502992 },
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum laboriosam maxime, nihil quisquam voluptates',
    },
    {
        title: 'Lavash',
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/b5/26/ed/new-year-s-magic-at-lavash.jpg',
        rate: 3.5,
        position: { lat: 40.183078, lng: 44.516501 },
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum laboriosam maxime, nihil quisquam voluptates',
    },
    {
        title: 'Sherep',
        id: 3,
        image: 'https://cdn.technolab.com.ru/v1/file/87e2ce5c-b5ee-48a2-b635-7818fa4ba415',
        rate: 4,
        position: { lat: 40.178512, lng: 44.511178 },
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum laboriosam maxime, nihil quisquam voluptates',
    },
    {
        title: 'Katsin',
        id: 4,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/5d/ae/0e/interior.jpg',
        rate: 5,
        position: { lat: 40.178541, lng: 44.509045 },
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum laboriosam maxime, nihil quisquam voluptates',
    },
    {
        title: 'Pandok Yerevan',
        id: 5,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/68/8d/50/tavern-yerevan-riverside.jpg',
        rate: 2.5,
        position: { lat: 40.179155, lng: 44.509986 },
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum laboriosam maxime, nihil quisquam voluptates',
    },
];

app.use(express.json());

app.get('/restaurants', (_, res) => {
    const sortedRests = rests.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));

    res.status(200).json(sortedRests);
});

app.get('/restaurants/:id', (req, res) => {
    const resId = Number(req.params.id);
    const restaurant = rests.find((item) => {
        return item.id === resId;
    });
    res.status(200).json(restaurant);
});

app.listen(port, () => console.log('> Server is up and running on port : ' + port));
