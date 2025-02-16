const { body, validationResult } = require('express-validator');

const register = async (req,res)=>{

        // Perform validation
        await Promise.all([
            body('name').notEmpty().withMessage('Name is required').run(req),
            body('email').isEmail().withMessage('Valid email is required').run(req),
            body('password')
              .isLength({ min: 6 })
              .withMessage('Password must be at least 6 characters long')
              .run(req),
          ]);
      
          // Check for errors
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).json({ message:"Validation Error\nPlease fill where necessary",errors: errors.array() });
          }





          








    try {
        

    } catch (error) {
        res.status(500).json({message:"Error Occur", error:error.message})
    }
}




module.exports = {
    register,

}