const express = require('express');
const router = express.Router();

const path = require('path');

const db = require('../models/db-table.js');
const parse = require('./parse.js');



router.get('/', (req,res) => {
    console.log('— Home Page —')

    res.render(
        'home.hbs',
        {
            title: 'Home Page',
            style: 'home.css',
            script: 'home.js'
        }    
    )
})

router.get('/work', (req,res) => {
    console.log('— Work Page —')
    
    db.findAll()
    .then( data => {
        let data_list = parse.captureData(data);
        jobListing(data_list)
    })
    .catch( err => {
        console.log(err)
    })

    jobListing = (data) => {
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

router.get('/work/add', (req,res) => {
    console.log('— Add Page —')

    res.render(
        'add.hbs',
        {
            title: 'Add Page',
            style: 'add.css',
            script: 'add.js'
        }    
    )
})

router.get('*', (req,res) => {
    res.send('Page Not Found')
})



module.exports = router;