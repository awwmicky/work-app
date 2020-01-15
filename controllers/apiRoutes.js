const express = require('express');
const router = express.Router();
const db = require('../models/db-table.js');
const parse = require('./parse.js');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get('/view', (req,res) => {
    console.log('— GET view —')
        
    db.findAll()
    .then( data => {
        let data_list = parse.captureData(data);
        res.send(data_list)
    })
    .catch( err => {
        console.log(err)
    })
})

router.get('/search', (req,res) => {
    console.log('— GET search —')

    let { searching } = req.query;
    searching = searching.trim().toLowerCase();

    db.findAll({
        where: {
            technologies: {
                [Op.like]: `%${searching}%`
            }
        }
    })
    .then( data => {
        let data_list = parse.captureData(data);
        searchResult(data_list)        
    })
    .catch( err => {
        console.log(err)
    })

    searchResult = (data) => {
        res.render(
            'work.hbs',
            {
                title: 'Work Page',
                style: 'work.css',
                script: 'work.js',
                data: data
            }    
        )
    };
})

router.post('/add', (req,res) => {
    console.log('— POST —')

    const user_data = req.body;
    let dataChecked = parse.validateData(user_data);

    if (dataChecked.length > 0) {
        console.log(dataChecked)
        res.render(
            'add.hbs',
            {
                title: 'Add Page',
                style: 'add.css',
                script: 'add.js',
                errors: dataChecked,
                data: user_data
            }
        )
    } else {
        console.log('-ok-')
        db.create(user_data)
        .then( data => {
            /* test */
            console.log(data)
            console.log(data.work)
            console.log(data.dataValues)
            /* test */

            res.redirect('/work')
        })
        .catch( err => {
            console.log(err)
        })
    }

    submitWork = () => {
        res.render(
            'work.hbs',
            {
                title: 'Work Page',
                style: 'work.css',
                script: 'work.js',
                data: data
            }
        )
    };
})



module.exports = router;