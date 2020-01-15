/* parse data */

captureData = (data) => {
    let dataArr = [];

    data.forEach( val => {
        dataArr.push(val.dataValues)
    })
    
    console.table(
        dataArr, 
        [
            'id', 'title', 'technologies', 
            'description', 'budget',
            'contact_email'
        ]
    )
    return dataArr;
};

validateData = (data) => {
    let errors = [];
    
    const { 
        title, technologies, budget,
        description, contact_email 
    } = data;

    if (!title)
        errors.push({ message: 'type in a title' })
    if (!technologies)
        errors.push({ message: 'add in some technologies' })
    if (!description)
        errors.push({ message: 'type in a description' })
    if (!contact_email)
        errors.push({ message: 'enter in your email' })
    /*  */
    
    console.log('error checked');
    return errors;
};

budgetConvert = (budget) => {
    // user_data.budget =
    // (user_data.budget !== '') ?
    // 0 : 'unknown';

/* 
= edit =
- export/import data.budget
- set dafault value
- convert with '$' & '0.00'
- (!budget) ? 'unknown' : '$+[budget].00'
*/
};

techConvert = (tech) => {
    tech = 
    tech
    .toLowerCase()
    .replace(/, /g,',');

/* 
= edit =
- export/import data.technologies
- all lowercase
- no whitespace
*/
};

// returns object
module.exports = {
    captureData: captureData,
    validateData: validateData
};



/* e.g: POST value */
// let data = {
//     title: 'posting data',
//     technologies: `hmtl,css,js`,
//     budget: 2000,
//     description: 'x-mission assignment',
//     contact_email: 'email@email.com'
// };
// const { 
//     title, technologies, budget,
//     description, contact_email 
// } = data;


/* e.g: POST - req.body */
// const { 
//     title, technologies, budget,
//     description, contact_email 
// } = req.body;

// let errorChecked = validateData(req.body);

/* POST via SQL */
// db.create({
//     title, technologies, budget,
//     description, contact_email 
// })

// db.create(data)