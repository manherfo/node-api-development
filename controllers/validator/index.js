exports.createPostValidator = (req, res, next) => {
    req.check('title', "write a title").notEmpty()
    req.check('title', 'Title must be up to 4 and down to 150').isLength({
        min: 4,
        max: 150
    });
    req.check('body', "write a body").notEmpty()
    req.check('body', 'Body must be up to 4 and down to 2000').isLength({
        min: 4,
        max: 2000
    })

    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next()
}