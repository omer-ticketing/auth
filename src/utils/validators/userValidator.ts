import { body } from "express-validator";

const emailValidation = body("email").isEmail().withMessage("Email must be valid.");

export const validateSignup = [
    emailValidation,
    body("password")
        .trim("")
        .isLength({ min: 4, max: 20 })
        .withMessage("Password must be between 4 and 20 characters."),
];

export const validateSignin = [
    emailValidation,
    body("password").trim("").notEmpty().withMessage("You must provide a password."),
];
