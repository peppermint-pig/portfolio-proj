'use strict';

var gProjs = [
    {
        id: '01-donuts',
        name: 'Donut Lover',
        title: 'Mmmmm... Donuts..!',
        desc: 'she dickety poor wiggum. gangsta city malparkage telepanhandling smarch totally outrageous paradigm pollutinest that\'s why your robot never worked she.',
        url: 'https://www.delish.com/cooking/recipe-ideas/a24788319/how-to-make-donuts-at-home/',
        publishedAt: Date.now(),
        labels: ['Donut', 'Yummi', 'Sweets']
    },

    {
        id: '02-fat-tony',
        name: 'Crime Fighter',
        title: 'Well, maybe not',
        desc: 'rappin\' surfer not back, avenge deaths crisitunity milhousing that\'s why your robot never worked stinkables bumbled-bee well, that\'s the end of me',
        url: 'https://www.imdb.com/title/tt0099685/',
        publishedAt: Date.now(),
        labels: ['Mafia', 'Crime']
    },

    {
        id: '03-police-station',
        name: 'Cops Leader',
        title: 'The best of the bunch',
        desc: 'scotchtoberfest scalpal smuggled vegetables knifey wifey suck shack this stupid country stinkables nuclear whipping boy blubber-in-law here\'s vanessa williams',
        url: 'https://youtu.be/qDSlNIDOQGY',
        publishedAt: Date.now(),
        labels: ['Police', 'Cop', 'Leader']
    },

    {
        id: '04-lad-lard',
        name: 'Break Taker',
        title: 'Cause even heroes need a donut break',
        desc: 'like... all those people in jail smendler stinkables dirty, maybe. dangerous, hardly. eat my shirt scientician dickety they tried that in the movies and it didn\'t work zazz capdabbler',
        url: 'https://www.universalorlando.com/web/en/us/things-to-do/dining/lard-lad-donuts',
        publishedAt: Date.now(),
        labels: ['Police', 'Cop', 'Leader']
    },


    {
        id: '05-press-con',
        name: 'Media Talker',
        title: 'Gotta love the fame',
        desc: 'like... all those people in jail smendler stinkables dirty, maybe. dangerous, hardly. eat my shirt scientician dickety they tried that in the movies and it didn\'t work zazz capdabbler',
        url: 'https://youtu.be/oK4U9bgHk9Q',
        publishedAt: Date.now(),
        labels: ['Press', 'Media', 'Leader']
    },

    {
        id: '06-arrest',
        name: 'Criminal Arrest-er',
        title: 'Take \'em in, boys',
        desc: 'pinnitchy-o where\'s poochie? foundling-a-ding learnatorium my son is also named bort magumba smarch shiva h. vishnu steamed hams bort',
        url: 'https://youtu.be/o2c82pxj0lU',
        publishedAt: Date.now(),
        labels: ['Crime', 'Fight', 'Arrest']
    },
];

function getProjs() {
    var projs = gProjs;
    return projs;
}

function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return projId === proj.id;
    });
    return proj;
}